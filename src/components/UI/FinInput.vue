<template>
  <input
    class="fin-input"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "finInput",
  props: ["value"],
};
</script>

<style lang="scss" scoped>
.fin-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
}
</style>
