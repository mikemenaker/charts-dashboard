<template>
  <div v-if="tabs.length > 0">
    <tabs animation="slide" :only-fade="false">
      <tab-pane v-for="tab in tabs" :label="tab.name" :key="tab.name">
        <p v-if="tab.description" style="margin-left:10px">{{tab.description}}</p>
        <div class="tile " style="flex-wrap: wrap;">
          <div v-for="dataItem in tab.data" class="tile is-parent is-4" :key="dataItem.title">
            <article class="tile is-child">
              <data-item :item="dataItem"></data-item>
            </article>
          </div>
        </div>
      </tab-pane>
    </tabs>
  </div>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'
import DataItem from '../components/DataItem'

export default {
  name: 'data-tabs',
  components: {
    Tabs,
    TabPane,
    DataItem
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
