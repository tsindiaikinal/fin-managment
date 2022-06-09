<template>
  <div class="favorite-container">
    <!-- <img src="@/assets/lena.jpg" alt="sd" /> -->
    <div class="filter">
      <mdicon name="filter-outline" size="16"></mdicon>
      <select name="" id="filter">
        <option value="" disabled selected>Фильтр</option>
        <option v-for="user in users" :key="user.id" value="">
          {{ user.name }}
        </option>
      </select>
    </div>
    <!-- <div class="favorites"></div> -->
    <div class="user-favorite" v-for="user in users" :key="user.id">
      <img :src="user.avatar" :alt="user.name" />
    </div>
    <fin-button class="add-favorite"
      ><mdicon name="plus" size="16"></mdicon
    ></fin-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "finSelect",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    // getImg() {},
  },
  mounted() {
    let self = this;
    axios.get("./data/users.json").then(function (res) {
      self.users = res.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.favorite-container {
  display: flex;
  align-items: center;
  background-color: #e5e5e5;
  border-radius: 8px;
}
.filter {
  display: inline-block;
  margin-right: 15px;
  padding: 0 10px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background-color: #fff;
  select {
    padding: 10px;
    border: none;
    outline: none;
    background: none;
    font-size: calc(15 / 16) + rem;
  }
}

.user-favorite {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 7px;
  img {
    width: 100%;
    height: 100%;
  }
}
.add-favorite {
  background-color: #fbfbfb;
  color: #b2b2b2;
  border-radius: 100%;
  width: 30px;
  height: 30px;
}
</style>
