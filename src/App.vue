<template>
  <div id="app">
    <carousel></carousel>    
    <chart-tabs></chart-tabs>
  </div>
</template>

<script>
import ChartTabs from './components/ChartTabs'
import Carousel from './components/Carousel'

export default {
  name: 'app',
  components: {
    ChartTabs,
    Carousel
  }
}
</script>

<style>
</style>
