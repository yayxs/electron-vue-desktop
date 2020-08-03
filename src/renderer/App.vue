<template>
  <div id="app">
    <section>
      <router-link to='home'>首页</router-link>
      <router-link to='news'>新闻</router-link>

    </section>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'electron-vue-desktop'
  }
</script>

<style>
  /* CSS */
</style>
