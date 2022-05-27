<template>
  <nav class="menu">
    <ul class="menu__container">
      <li class="menu__item">
        <router-link to="/operations">Операции</router-link>
      </li>
      <li class="menu__item">
        <router-link to="/reports">Отчеты</router-link>
      </li>
      <li class="menu__item">
        <router-link to="/contragents">Контрагенты</router-link>
      </li>
      <li class="menu__item">
        <router-link to="/projects">Проекты</router-link>
      </li>
      <li class="menu__item">
        <router-link to="/states">Статьи расходов</router-link>
      </li>
      <li class="menu__item">
        <router-link to="/workers">Сотрудники</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.menu {
  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }

  &__item {
    width: 100%;
    // flex-shrink: 1;
    margin: 15px 0;
    list-style: none;
    text-align: left;
  }
  a {
    width: 100%;
    display: inline-block;
    padding: 12px 25px;
    font-weight: 500;
    font-size: 1rem;
    color: #555454;
    text-decoration: none;
    border-radius: 8px;

    &.router-link-exact-active {
      background-color: #eeeeee;
      color: #2e2e2e;
    }
  }
}
</style>
