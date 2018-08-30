<template>
  <div id="app">
    <tab>
      <tab-panel name="验证码登录">
        这是验证码登录的内容
      </tab-panel>
      <tab-panel name="密码登录">
        这是密码登录的内容
      </tab-panel>
    </tab>
  </div>
</template>

<script>
import tab from './components/tab.vue'
import tabPanel from './components/tab-panel.vue'

export default {
  name: 'app',
  components: {
    tab,
    tabPanel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
