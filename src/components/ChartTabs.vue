<template>
  <tabs animation="slide" :only-fade="false">
    <tab-pane label="Pictures">Pictures Tab</tab-pane>
    <tab-pane label="Music">Music Tab</tab-pane>
    <tab-pane label="Videos" selected>Video Tab</tab-pane>
    <tab-pane label="Documents" disabled>Document Tab</tab-pane>
  </tabs>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'

export default {
  name: 'chart-tabs',
  components: {
    Tabs,
    TabPane
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
