<template>
  <div class="fin-search">
    <label for="search-elem">Поиск</label>
    <input
      class="fin-search__place"
      type="search"
      v-focus
      :value="value"
      @input="$emit('input', $event.target.value)"
      name="search_val"
      :placeholder="textholder"
      id="search-elem"
    />
    <mdicon name="magnify"></mdicon>
  </div>
</template>

<script>
export default {
  props: ["value", "textholder"],
};
</script>

<style lang="scss" scoped>
.fin-search {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
  padding-right: 14px;
  overflow: hidden;
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background-color: #fff;
  &__place {
    width: 100%;
    padding: 12px 5px;
    border: none;
    outline: none;
    &::placeholder {
      color: rgba($color: #2e2e2e, $alpha: 0.3);
      font-size: calc(15 / 16) + rem;
    }
  }
}
</style>
