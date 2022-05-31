<template>
  <div class="total">
    <strong class="total__sum">738 831</strong>
    <mdicon viewBox="0 0 384 512" name="currency-uah"></mdicon>
    <div>
      <span class="total__uah">546 568 </span>
      <mdicon
        class="uah-icon"
        viewBox="0 0 384 512"
        size="13"
        name="currency-uah"
      ></mdicon>
    </div>
    <div>
      <span class="total__usd">8 797</span>
      <mdicon size="17" name="currency-usd"></mdicon>
    </div>
    <div class="separator">
      <div class="separator__line"></div>
    </div>
    <div>
      <div class="bank">
        {{ nameBank[0] }}
        <p class="bank__uah">
          312 471
          <mdicon
            class="icon"
            viewBox="0 0 384 512"
            size="10"
            name="currency-uah"
          ></mdicon>
        </p>
      </div>
    </div>
    <div>
      <div class="bank">
        <p>
          {{ this.nameBank[0] }},<mdicon
            class="icon"
            size="13"
            name="currency-usd"
          ></mdicon>
        </p>
        <p class="bank__usd">
          8 797<mdicon class="icon" size="13" name="currency-usd"></mdicon>
        </p>
      </div>
    </div>
    <div>
      <div class="bank">
        Касса
        <p class="bank__uah">
          234 097<mdicon
            class="icon"
            viewBox="0 0 384 512"
            size="10"
            name="currency-uah"
          ></mdicon>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uah: "red",
      nameBank: ["Монобанк", "Приватбанк"],
    };
  },
};
</script>

<style lang="scss" scoped>
.total {
  min-width: 170px;
  padding: 15px;

  text-align: left;

  border-radius: 8px;
  background-color: #eee;

  &__sum {
    vertical-align: middle;

    font-size: calc(28 / 16) + rem;
    font-weight: 500;
  }

  &__uah {
    vertical-align: middle;

    font-size: calc(14 / 16) + rem;
  }

  &__usd {
    vertical-align: middle;

    font-size: calc(14 / 16) + rem;
  }

  .separator {
    position: relative;

    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    &__line {
      position: absolute;
      right: 0;
      left: 0;

      width: 100%;
      height: 1px;

      background-color: #dcdcdc;
    }
  }

  .bank {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    color: rgba($color: #2e2e2e, $alpha: 0.6);

    font-size: calc(12 / 16) + rem;
    font-weight: 400;
    line-height: 1.5;

    &__uah,
    &__usd {
      text-align: right;

      color: #2e2e2e;
    }
  }
}
</style>
