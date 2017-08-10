<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <carousel></carousel>
        <chart-tabs></chart-tabs>
      </div>
    </section>
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
