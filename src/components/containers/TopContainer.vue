<template>
  <div class="top-container">
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TopContainer",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.top-container {
  width: 100%;
  min-height: 20%;
}
h1 {
  text-align: center;
  font-size: 1.2rem;
}
</style>
