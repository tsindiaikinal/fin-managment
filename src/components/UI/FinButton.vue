<template>
  <button class="fin-btn" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "finButton",
};
</script>

<style lang="scss" scoped>
.fin-btn {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
