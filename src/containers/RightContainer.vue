<template>
  <div class="right-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.right-container {
  min-width: 270px;
  flex-shrink: 1;
  width: 20%;
  // height: 100vh;
  // border: 1px solid #b8aeae;
}
</style>
