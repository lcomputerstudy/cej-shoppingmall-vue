import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/Home/Login'
import OAuth from '../views/OAuth'
import Mypage from '../views/Home/Mypage'
import SignUp from '../views/Home/SignUp'
import HelloWorld from '../components/HelloWorld'
import Shop from '@/views/Shop/Shop'
import Admin from '@/views/Admin/Admin'
import Category from '@/views/Admin/Category/Category'
import AddCategory from '@/views/Admin/Category/AddCategory'
import EditCategory from '@/views/Admin/Category/EditCategory'
import Product from '@/views/Admin/Product/Product'
import AddProduct from '@/views/Admin/Product/AddProduct'
import User from '@/views/Admin/User/User'
import Point from '@/views/Admin/User/Point'
import UserInfo from '@/views/Home/UserInfo'
import Main from '@/views/Shop/Main'
import ProductList from '@/views/Shop/ProductList'
import ProductDetail from '@/views/Shop/ProductDetail'
import WishList from '@/views/Shop/WishList'
import HeartList from '@/views/Shop/HeartList'
import OrderForm from '@/views/Shop/OrderForm'
import KakaopayFail from '@/views/Shop/KakaopayFail'
import KakaopaySuccess from '@/views/Shop/KakaopaySuccess'
import OrderDetails from '@/views/Shop/OrderDetails'
import OrderList from '@/views/Admin/List/OrderList'
import OrderAddress from '@/views/Admin/List/OrderAddress'
import QABoardList from '@/views/Shop/QABoardList'
import WriteQA from '@/views/Shop/WriteQA'
import QADetails from '@/views/Shop/QADetails'
import WriteAnswer from '@/views/Shop/WriteAnswer'
import WriteReview from '@/views/Shop/WriteReview'
import ReviewDetails from '@/views/Shop/ReviewDetails'
import EditReview from '@/views/Shop/EditReview'
import OrderProduct from '@/views/Admin/List/OrderProduct'
import ReviewList from '@/views/Admin/List/ReviewList'
import QABoard from '@/views/Admin/List/QABoard'
import Chart from '@/views/Admin/Chart/Chart'
import Route from './index'
Vue.use(VueRouter)

const rejectAuthUser = (to, from, next) => {
  if (store.state.UserInfo.login_success === true) {
    if (Route.currentRoute.matched[0].name === "Shop") {
      Route.push("/shop/")
    } else {
      Route.push("/")
    }
  } else {
    next()
  }
}

const onlyAuthUser = (to, from, next) => {
  if (store.state.UserInfo.login_success === true) {
    next()
  } else {
    if (Route.currentRoute.matched[0].name === "Shop") {
      Route.push("/shop/")
    } else {
      Route.push("/")
    }
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: "login", name: 'Login', component: Login, },
      { path: "mypage", name: 'Mypage', component: Mypage, },
      { path: "signup", name: 'SignUp', component: SignUp },
      { path: "", name: 'HelloWorld', component: HelloWorld },
      { path: "userinfo", name: 'UserInfo', component: UserInfo, },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    children: [
      { path: "/shop", name: 'Main', component: Main },
      { path: "login", name: 'shopLogin', component: Login, },
      { path: "mypage", name: 'shopMypage', component: Mypage, },
      { path: "signup", name: 'shopSignUp', component: SignUp },
      { path: "userinfo", name: 'shopUserInfo', component: UserInfo, },
      { path: "productlist", name: 'ProductList', component: ProductList },
      { path: "productdetail", name: 'ProductDetail', component: ProductDetail },
      { path: "wishlist", name: 'WishList', component: WishList },
      { path: "heartlist", name: 'HeartList', component: HeartList },
      { path: "orderform", name: 'OrderForm', component: OrderForm },
      { path: "kakaopay-fail", name: 'KakaopayFail', component: KakaopayFail },
      { path: "kakaopay-success", name: 'KakaopaySuccess', component: KakaopaySuccess },
      { path: "orderdetails", name: 'OrderDetails', component: OrderDetails },
      { path: "qaboardlist", name: 'QABoardList', component: QABoardList },
      { path: "writeqa", name: 'WriteQA', component: WriteQA },
      { path: "qadetails", name: 'QADetails', component: QADetails },
      { path: "write-answer", name: 'WriteAnswer', component: WriteAnswer },
      { path: "write-review", name: 'WriteReview', component: WriteReview },
      { path: "reviewdetails", name: 'ReviewDetails', component: ReviewDetails },
      { path: "editreview", name: 'EditReview', component: EditReview },
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      { path: "category", name: 'Category', component: Category },
      { path: "addCategory", name: 'AddCategory', component: AddCategory },
      { path: "editCategory", name: 'EditCategory', component: EditCategory },
      { path: "product", name: 'Product', component: Product },
      { path: "addproduct", name: 'AddProduct', component: AddProduct },
      { path: "user", name: 'User', component: User },
      { path: "point", name: 'Point', component: Point },
      { path: "orderlist", name: 'OrderList', component: OrderList },
      { path: "order-address", name: 'OrderAddress', component: OrderAddress },
      { path: "orderdetails-admin", name: 'OrderDetails_Admin', component: OrderDetails },
      { path: "qaboardlist", name: 'QABoard', component: QABoard },
      { path: "writeqa", name: 'WriteQA_admin', component: WriteQA },
      { path: "qadetails", name: 'QADetails_admin', component: QADetails },
      { path: "write-answer", name: 'WriteAnswer_admin', component: WriteAnswer },
      { path: "orderproduct", name: 'OrderProduct', component: OrderProduct },
      { path: "reviewlist", name: 'ReviewList', component: ReviewList },
      { path: "reviewdetails", name: 'ReviewDetails_admin', component: ReviewDetails },
      { path: "chart", name: 'Chart', component: Chart },
    ]
  },
  {
    path: '/auth',
    name: 'OAuth',
    component: OAuth,
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
