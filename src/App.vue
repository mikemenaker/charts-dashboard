<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <carousel :charts="charts"></carousel>
        <chart-tabs :charts="charts"></chart-tabs>
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
    charts: []
  }),
  async created() {
    const response = await axios.get("https://raw.githubusercontent.com/mikemenaker/charts-dashboard/master/src/data.json")
    this.charts = response.data.charts
  }
}
</script>

<style>

</style>
