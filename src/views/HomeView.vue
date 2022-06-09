<template>
  <div class="home">
    <top-container
      class="home__title"
      color="brown"
      :title="mainTitle"
    ></top-container>
    <div class="home__logo">
      <img src="@/assets/logo.svg" alt="Logo" title="HOME PAGE" />
    </div>
  </div>
</template>

<script>
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
  flex-direction: column;
  padding-top: 35px;
  justify-content: center;
  align-items: center;
  // &__title {}
  &__logo {
    img {
      width: 300px;
    }
  }

  /*   &__main {
  }

  &__menu {
  } */
}
</style>
