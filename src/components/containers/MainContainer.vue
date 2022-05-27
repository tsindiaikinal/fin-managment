<template>
  <div class="main-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-container {
  width: 80%;
  height: 100vh;
  flex-shrink: 1;
  border: 1px solid #3263be;
}
</style>
