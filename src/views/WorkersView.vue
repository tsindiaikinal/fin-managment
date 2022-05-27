<template>
  <div class="workers">
    <top-container :title="mainTitle"></top-container>
  </div>
</template>

<script>
export default {
  name: "WorkersView",
  data() {
    return {
      mainTitle: "Сотрудники",
    };
  },
};
</script>

<style lang="scss" scoped>
.workers {
  h1 {
    text-align: center;
  }
}
</style>
