<template>
  <div class="workers">
    <top-container :title="mainTitle"></top-container>
  </div>
</template>

<script>
export default {
  name: "StatesView",
  data() {
    return {
      mainTitle: "Статьи расходов",
    };
  },
};
</script>

<style lang="scss" scoped></style>
