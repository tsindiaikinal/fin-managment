<template>
  <div class="card">
    <div
      :class="{ paid: budget, 'not-paid': !budget }"
      class="card__icon-arrow"
    >
      <mdicon name="arrow-up-thin" size="18"></mdicon>
    </div>
    <div class="card__user">
      <p class="user__data">ИП Бирюков Михаил Алексеевич</p>
      <span class="user__bank-account"> monobank</span>
    </div>
    <div class="card__service">
      <p class="service__type">Сайт Volkswagen</p>
      <span class="service__tag">Продвижение</span>
    </div>
    <div class="card__description">
      Оплата за продвижение Google Adwords июнь-июль
    </div>
    <div class="status-wrapper">
      <span
        :class="{ paid: status, 'not-paid': !status }"
        class="card__status"
        >{{ numStatus[0] }}</span
      >
    </div>
    <div class="pay">
      <span class="pay__sum"> {{ paidSum }} </span>
      <mdicon
        class="pay__icon-uah"
        viewBox="0 0 384 512"
        name="currency-uah"
        size="14"
      ></mdicon>
    </div>
  </div>
</template>

<script>
export default {
  name: "OperatinCard",
  props: {
    budget: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      paidSum: "+ 21 239",
      numStatus: ["Не оплачено", "Оплачено"],
    };
  },
  methods: {},
  computed: {
    payStatus: () => {
      /* return this.status
        ? (this.className = "paid")
        : (this.className = "not-paid"); */
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
%params-card {
  width: 20%;
  padding-right: 17px;
  padding-left: 17px;
  font-size: calc(14 / 16) + rem;
  font-weight: 400;
  text-align: left;
}
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  &__icon-arrow {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 8px;
    line-height: 30px;
  }

  .not-paid.card__icon-arrow {
    transform: rotate(180deg);
  }

  &__user {
    @extend %params-card;
  }

  &__service {
    @extend %params-card;
  }

  &__description {
    @extend %params-card;
  }

  &__status {
    display: inline-block;
    // flex: 0 0 85px;
    font-size: calc(12 / 16) + rem;
    font-weight: 500;
    padding: 6px 10px;
    color: #167951;
    border-radius: 8px;
    background-color: #d7eae3;
    white-space: nowrap;
  }
}
.status-wrapper {
  width: 10%;
  padding-right: 17px;
  padding-left: 17px;
}
.user {
  @extend %params-card;
  // &__data {}

  &__bank-account {
    font-size: calc(12 / 16) + rem;
    font-weight: 400;
    &::before {
      content: "Со счёта:";
      color: rgba($color: #2e2e2e, $alpha: 0.6);
    }
  }
}
.service {
  @extend %params-card;
  // &__type {}

  &__tag {
    font-size: calc(12 / 16) + rem;
    font-weight: 400;
    color: rgba($color: #2e2e2e, $alpha: 0.6);
  }
}
.pay {
  @extend %params-card;
  width: 15%;
  white-space: nowrap;
  text-align: right;
  color: #1a8d5f;
  font-size: 1rem;
  // &__sum {}

  // &__icon-uah {}
}
.paid {
  color: #167951;
  background-color: #d7eae3;
}
.not-paid {
  color: #e04f1a;
  background-color: #ffd3c2;
}
</style>
