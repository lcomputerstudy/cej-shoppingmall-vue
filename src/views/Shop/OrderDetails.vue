<template>
  <div style="width: 80%" class="mx-auto">
    <br />
    <v-card elevation="0">
      <v-card-title><h4>주문상품</h4> </v-card-title>
    </v-card>
    <v-card style="padding: 50px" class="mx-auto">
      <v-row v-for="(item, index) in item" :key="index">
        <v-col cols="2">
          <v-img
            class="mx-auto"
            :src="require('@/assets/' + item.product.mainPhoto)"
            width="100"
            height="100"
          ></v-img>
        </v-col>
        <v-col>
          <v-container>{{ item.product.name }}</v-container>
        </v-col>
        <v-col>
          <v-card-text>옵션 : {{ item.option }} </v-card-text>
        </v-col>
        <v-col>
          <v-card-text>수량 : {{ item.count }} </v-card-text>
        </v-col>
        <v-col style="padding-top: 25px">
          <v-btn small @click="WriteReview(item)">후기작성</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import Route from "@/router/index";
import { mapState } from "vuex";
export default {
  data() {
    return {
      item: this.$route.query,
    };
  },
  computed: {
    ...mapState(["ReviewList"]),
  },
  methods: {
    WriteReview(item) {
      let list = [];
      for (let i = 0; i < this.ReviewList.length; i++) {
        list.push(this.ReviewList[i].order_num);
      }
      if (list.indexOf(item.order_num) === -1) {
        Route.push({
          name: "WriteReview",
          query: { item: item, product: item.product },
        });
      } else {
        alert("이미 리뷰를 작성하셨습니다.");
      }
    },
  },
  created() {
    this.$store.dispatch("Get_Users_review", this.$store.state.UserInfo.id);
  },
};
</script>