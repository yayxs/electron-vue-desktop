<template>
  <div class="home">
    <aside class="left_aside"></aside>
    <main class="main_container"></main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="scss" scoped>
.home{
  display: flex;
  .left_aside{
    width: 300px;
    height: 100vh;
    border: 1px solid red;
  }
  .main_container{
    flex: 1;
  }
}
</style>
