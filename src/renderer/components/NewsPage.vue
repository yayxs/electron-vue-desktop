<template>
  <div>
      我是新闻页面
      <button @click="handleNodeJsFs">使用fs 模块读取package.json</button>
  </div>
</template>

<script>
const fs = require('fs')
export default {
  data() {
    return {};
  },
  methods: {
    handleNodeJsFs(){
      // 默认是异步读取
      fs.readFile('package.json',(err,data)=>{
        if(err){
          console.log(err)
          return
        }
        console.log(data.toString())
      })
    }
  },
  mounted() {},
};
</script>
<style scoped lang="scss"></style>
