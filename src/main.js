import Vue from "vue";
import Quiz from "./Quiz.vue";
import questions from "./questions";

Vue.config.productionTip = false;

var app = new Vue({
  render: h => h(Quiz, { props: { questions } }),
  data : {
    val: false
  }
}).$mount("#app");
