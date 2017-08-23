<template>
  <div v-if="tabs.length > 0">
    <tabs animation="slide" :only-fade="false">
      <tab-pane v-for="tab in tabs" :label="tab.name" :key="tab.name">
        <div class="tile " style="flex-wrap: wrap;">
          <div v-for="chart in tab.charts" class="tile is-parent is-4" :key="chart.title">
            <article class="tile is-child">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">{{chart.title}}</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <dyna-chart :type="chart.type" :dataSource="chart.dataSource" :root-data="chart.data" :options="chart.options"></dyna-chart>
                  </div>
                </div>
                <footer class="card-footer">
                  Last updated on 1/3/17 1:33
                </footer>
              </div>
            </article>
          </div>
        </div>
      </tab-pane>
    </tabs>
  </div>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'
import DynaChart from '../components/DynamicChart'

export default {
  name: 'chart-tabs',
  components: {
    Tabs,
    TabPane,
    DynaChart
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

</style>
