<template>
  <div v-if="charts.length > 0">
    <tabs animation="slide" :only-fade="false">
      <tab-pane v-for="chart in charts" :label="chart.title" :key="chart.title">
        <div class="tile is-ancestor">
          <div class="tile is-parent is-4">
            <article class="tile is-child box">
              <chart :type="chart.type" :data="chart.data" :options="chart.options"></chart>
            </article>
          </div>
        </div>
      </tab-pane>      
    </tabs>
  </div>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'
import Chart from 'vue-bulma-chartjs'

export default {
  name: 'chart-tabs',
  components: {
    Tabs,
    TabPane,
    Chart
  },
  props: {
    charts: {
      type: Array,
      required: true,
      default: () => ([])
    }
  }
}
</script>

<style>

</style>
