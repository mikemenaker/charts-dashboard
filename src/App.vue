<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <carousel :tabs="tabs"></carousel>
        <chart-tabs :tabs="tabs"></chart-tabs>
      </div>
    </section>
  </div>
</template>

<script>
import ChartTabs from './components/ChartTabs'
import Carousel from './components/Carousel'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    ChartTabs,
    Carousel
  },
  data: () => ({
    tabs: []
  }),
  async created() {
    const response = await axios.get("https://raw.githubusercontent.com/mikemenaker/charts-dashboard/master/src/data.json")
    this.tabs = response.data.tabs
  }
}
</script>

<style>
</style>
