<template>
  <div id="app" class="app-container">
    <main-container>
      <router-view />
    </main-container>
    <right-container>
      <dash-board></dash-board>
    </right-container>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2e2e2e;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
