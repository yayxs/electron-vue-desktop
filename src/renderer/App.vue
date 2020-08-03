<template>
  <div id="app">
    <my-header></my-header>
    <section>
      <router-link to='home'>首页</router-link>
      <router-link to='news'>新闻</router-link>

    </section>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
  export default {
    name: 'electron-vue-desktop',
    components:{
      MyHeader
    }
  }
</script>

<style>
  /* CSS */
</style>
