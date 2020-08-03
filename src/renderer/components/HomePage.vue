<template>
  <div>
    我是首页
    <button @click="sendMsgToMainPro">向主进程广播数据</button>
    <a href="http://www.baidu.com" @click.prevent="openBaiDu($event)">打开百度</a>
    <button @click="nodeJsClick">使用NodeJS</button>
    <el-button type="primary" @click="handleClick">按钮</el-button>
    
  </div>
</template>

<script>
const path = require("path");
export default {
  data() {
    return {};
  },
  methods: {
    sendMsgToMainPro() {
      this.$electron.ipcRenderer.send("to-main", "我是渲染进程中的数据");
    },
    openBaiDu(e){
        console.log(e)
        const { srcElement:{href} } = e
        this.$electron.shell.openExternal(href);
    },
    nodeJsClick(){
        let dir = path.join('/aaa','xxx') // \aaa\xxx
        console.log(dir)
    },
    handleClick(){
        console.log(`点击`)
    }
  },
  mounted() {},
};
</script>
<style scoped lang="scss"></style>
