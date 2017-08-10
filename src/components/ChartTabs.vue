<template>
  <tabs animation="slide" :only-fade="false" :selectedIndex="0">
    <tab-pane label="Chart1">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-4">
          <article class="tile is-child box">
            <chart :type="'pie'" :data="data" :options="options"></chart>
          </article>
        </div>
        <div class="tile is-parent is-4">
          <article class="tile is-child box">
            <chart :type="'doughnut'" :data="data" :options="options"></chart>
          </article>
        </div>
      </div>
    </tab-pane>
    <tab-pane label="Chart2">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-4">
          <article class="tile is-child box">
            <chart :type="'doughnut'" :data="data" :options="options"></chart>
          </article>
        </div>
        <div class="tile is-parent is-4">
          <article class="tile is-child box">
            <chart :type="'polarArea'" :data="data" :options="options"></chart>
          </article>
        </div>
      </div>
    </tab-pane>
    <tab-pane label="Chart3" selected>No data</tab-pane>
  </tabs>
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
  data() {
    return {
      data: {
        labels: ['Sleeping', 'Designing', 'Coding', 'Cycling'],
        datasets: [{
          data: [20, 40, 5, 35],
          backgroundColor: [
            '#1fc8db',
            '#fce473',
            '#42afe3',
            '#ed6c63',
            '#97cd76'
          ]
        }]
      },
      options: {
        segmentShowStroke: false
      }
    }
  }
}
</script>

<style>

</style>
