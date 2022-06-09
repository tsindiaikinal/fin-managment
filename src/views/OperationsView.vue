<template>
  <div class="operation">
    <top-container :title="mainTitle"></top-container>
    <div class="operation__panel">
      <month-select class="panel__month-elem"></month-select>
      <div class="panel__search-elem">
        <search-elem
          textholder="по проекту, контрагенту или счёту"
          v-model="val"
        ></search-elem>
      </div>
      <div class="panel__select-elem">
        <fin-select></fin-select>
      </div>
    </div>
    <div class="operation__diagram">
      <diagram-move></diagram-move>
    </div>
    <div class="operation__cards">
      <operation-card></operation-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "OperationView",
  data() {
    return {
      mainTitle: "Операции",
      val: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.operation {
  &__panel {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 17px 26px 0;
  }
  &__diagram {
    padding-right: 17px;
  }
  &__cards {
    overflow: auto;
  }
}

.panel {
  &__month-elem {
    width: 20%;
  }

  &__search-elem {
    width: 40%;
  }

  &__select-elem {
    width: 30%;
  }
}
</style>
