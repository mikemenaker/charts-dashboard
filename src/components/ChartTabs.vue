<template>
  <div style="background-color: whitesmoke;" v-if="tabs.length > 0">
    <tabs animation="slide" :only-fade="false">
      <tab-pane v-for="tab in tabs" :label="tab.name" :key="tab.name">
        <div class="tile is-ancestor" >
          <div v-for="chart in tab.charts" class="tile is-parent is-4" :key="chart.title">
            <article class="tile is-child box">
              <h4 class="title">{{chart.title}}</h4>
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
    tabs: {
      type: Array,
      required: true,
      default: () => ([])
    }
  }
}
</script>

<style>
.tab-list {
  background-color: white;
}
</style>
