<template>
  <div class="dashboard">
    <div class="dashboard__wrapper">
      <div class="dashboard__header">
        <h3 class="dashboard__title">{{ title }}</h3>
        <img
          @click="$router.push('/')"
          class="dashboard__logo"
          src="@/assets/logo.svg"
          alt="Logo"
          title="HOME"
        />
      </div>
      <total-elem></total-elem>
      <side-menu></side-menu>
    </div>
    <profile-elem></profile-elem>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
  data() {
    return {
      title: "Все деньги",
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  min-width: 270px;
  background-color: #f5f5f5;
  border-radius: 8px;
  &__logo {
    display: inline-block;
    cursor: pointer;
    border-radius: 8px;
    border: 3px solid transparent;
    &:hover {
      border: 3px solid #ffffff;
    }
  }
  &__wrapper {
    padding: 30px;
  }
  &__header {
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    text-align: left;
    font-size: calc(22 / 16) + rem;
    font-weight: 500;
  }
}
</style>
