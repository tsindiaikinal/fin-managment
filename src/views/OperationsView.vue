<template>
  <div class="operations">
    <top-container :title="mainTitle"></top-container>
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
// .operations {}
</style>
