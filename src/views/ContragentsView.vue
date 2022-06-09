<template>
  <div class="contragents">
    <top-container>
      <h1>{{ mainTitle }}</h1>
    </top-container>
  </div>
</template>

<script>
export default {
  name: "ContragentsView",
  data() {
    return {
      mainTitle: "Контрагенты",
    };
  },
};
</script>

<style lang="scss" scoped>
.contragents {
  h1 {
    text-align: center;
  }
}
</style>
