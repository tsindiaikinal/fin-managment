<template>
  <div class="month-select">
    <transition name="fade">
      <fin-button
        ref="prev"
        @click="prev"
        class="month-select__btn"
        :disabled="checkToFirstMonth"
        v-show="monthNow >= 1"
        ><mdicon name="chevron-left"></mdicon
      ></fin-button>
    </transition>
    <transition name="gum">
      <div class="month-select__calendar">
        <mdicon class="icon-calendar" name="calendar-month-outline"></mdicon>
        <span class="month-name"> {{ month[monthNow] }} </span>
      </div>
    </transition>
    <transition name="fade">
      <fin-button
        ref="next"
        @click="next"
        class="month-select__btn"
        :disabled="checkToLastMonth"
        v-show="monthNow <= 10"
        ><mdicon name="chevron-right"></mdicon
      ></fin-button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MonthSelect",
  data() {
    return {
      monthNow: new Date().getMonth(),
      isDisable: "",
      isActiveBtn: false,
      month: [
        "январь",
        "февраль",
        "март",
        "апрель",
        "май",
        "июнь",
        "июль",
        "август",
        "сентябрь",
        "октябрь",
        "ноябрь",
        "декабрь",
      ],
    };
  },
  methods: {
    prev() {
      this.monthNow--;
    },
    next() {
      this.monthNow++;
    },
  },
  computed: {
    checkToFirstMonth() {
      return this.monthNow <= 0 ? !this.isActiveBtn : this.isActiveBtn;
    },
    checkToLastMonth() {
      return this.monthNow >= 11 ? !this.isActiveBtn : this.isActiveBtn;
    },
  },
};
</script>

<style lang="scss" scoped>
.month-select {
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  &__btn {
    width: 45px;
    height: 45px;
    flex-shrink: 0;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
  }

  &__calendar {
    margin: 0 10px;
    padding: 10px 15px 10px 45px;
    position: relative;
    flex: 1 0 auto;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
  }
}
.icon-calendar {
  position: absolute;
  top: 25%;
  left: 15px;
  bottom: 25%;
}
.month-name {
  display: inline-block;
  font-size: 1.2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.gum-enter-active,
.gum-leave-active {
  transition: width 0.5s;
}
.gum-enter,
.gum-leave-to {
  width: 200px;
}
</style>
