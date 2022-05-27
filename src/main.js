import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import containers from "@/components/containers";
import components from "@/components";

for (const container in containers) {
  Vue.component(container, containers[container]);
}
for (const component in components) {
  Vue.component(component, components[component]);
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
