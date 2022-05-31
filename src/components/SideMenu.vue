<template>
  <nav class="menu">
    <ul class="menu__container">
      <li class="menu__item">
        <router-link to="/operations"
          ><mdicon class="menu__icon" name="swap-horizontal" size="22"></mdicon>
          Операции</router-link
        >
      </li>
      <li class="menu__item">
        <router-link to="/reports"
          ><mdicon class="menu__icon" name="poll" size="18"></mdicon>
          Отчеты</router-link
        >
      </li>
      <li class="menu__item">
        <router-link to="/contragents"
          ><mdicon
            class="menu__icon"
            name="apple-keyboard-command"
            size="18"
          ></mdicon>
          Контрагенты</router-link
        >
      </li>
      <li class="menu__item">
        <router-link to="/projects"
          ><mdicon
            class="menu__icon"
            name="hammer-screwdriver"
            size="18"
          ></mdicon>
          Проекты</router-link
        >
      </li>
      <li class="menu__item">
        <router-link to="/states"
          ><mdicon class="menu__icon" name="receipt-outline" size="18"></mdicon
          >Статьи расходов</router-link
        >
      </li>
      <li class="menu__item">
        <router-link to="/workers"
          ><mdicon class="menu__icon" name="account-outline" size="18"></mdicon
          >Сотрудники</router-link
        >
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
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }

  &__item {
    width: 100%;
    margin: 15px 0;
    list-style: none;
    text-align: left;
  }
  &__icon {
    display: inline-block;
    margin-right: 5px;
    transform: translateY(-1px);
  }

  a {
    width: 100%;
    display: inline-block;
    padding: 12px 15px;
    font-weight: 500;
    font-size: 1rem;
    color: #555454;
    text-decoration: none;
    border-radius: 8px;
    &:hover .menu__icon {
      color: #2cb96b;
    }

    &.router-link-exact-active {
      background-color: #eeeeee;
      color: #1b1a1a;
    }
  }
}
</style>
