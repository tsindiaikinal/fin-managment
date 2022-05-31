<template>
  <div class="profile">
    <div class="profile__img">
      <img src="../assets/avatar.jpg" alt="avatar" />
    </div>
    <div class="profile__about">
      <span class="profile__user">{{ username }}</span>
      <span class="profile__user">{{ company }}</span>
    </div>
    <div class="profile__btns">
      <fin-button class="profile__btn">
        <mdicon name="tune" size="16" />
      </fin-button>
      <fin-button class="profile__btn">
        <mdicon name="help-circle-outline" size="16" />
      </fin-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "Geis",
      avatar: "../assets/avatar.jpg",
      company: "Techconnect",
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 25px;

  border-radius: 8px;
  background-color: #eee;
  &__about {
    padding: 5px 10px;
  }
  &__img {
    width: 40px;
    height: 40px;
    img {
      width: 100%;

      border-radius: 100%;
    }
  }

  &__user {
    display: inline-block;

    width: 100%;
    margin: 3px 0;

    text-align: left;
  }

  &__btn {
    border-radius: 100%;
    padding: 7px;
    &:hover {
      color: #1cb3e0;
      background-color: #fff;
    }
  }
}
</style>
