<template>
  <div class="operations">
    <top-container :title="mainTitle"></top-container>
    <div class="operations__panel"></div>
    <div class="operations__diagram"></div>
  </div>
</template>

<script>
export default {
  name: "OperationView",
  data() {
    return {
      mainTitle: "Операции",
    };
  },
};
</script>

<style lang="scss" scoped>
// .operations {
.operations {
  &__panel {
    padding: 10px;
  }

  &__diagram {
    padding: 25px;
  }
}
</style>
