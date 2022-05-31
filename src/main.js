import Vue from "vue";
import App from "./App.vue";
import mdiVue from "mdi-vue/v2";
import * as mdijs from "@mdi/js";
import router from "./router";
import store from "./store";
import containers from "@/components/containers";
import components from "@/components";
import componentsUI from "@/components/UI";

for (const container in containers) {
  Vue.component(container, containers[container]);
}
for (const component in components) {
  Vue.component(component, components[component]);
}
for (const componentUI in componentsUI) {
  Vue.component(componentUI, componentsUI[componentUI]);
}

Vue.use(mdiVue, {
  icons: mdijs,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
