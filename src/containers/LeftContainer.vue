<template>
  <div class="left-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.left-container {
  flex-shrink: 1;
  width: 20%;
  height: 100vh;
}
</style>
