<template>
  <div class="home">
    <top-container :title="mainTitle"></top-container>
    <div class="home__panel"></div>
    <div class="home__diagram"></div>
  </div>
</template>

<script>
// import SideMenu from "@/components/SideMenu.vue";
export default {
  name: "HomeView",
  data() {
    return {
      mainTitle: "Главная страница",
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__panel {
    padding: 10px;
  }

  &__diagram {
    padding: 25px;
  }

  /*   &__main {
  }

  &__menu {
  } */
}
</style>
