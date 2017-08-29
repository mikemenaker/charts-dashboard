<template>
  <div v-if="dataset">
    <div v-if="isCard" class="card">
      <header class="card-header">
        <p class="card-header-title">{{ item.title }}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <chartjs-bar v-if="item.type == 'bar'" :labels="item.labels" :option="options2" :data="dataset" :bind="true"></chartjs-bar>
          <chartjs-doughnut v-else-if="item.type == 'doughnut'" :option="options" :scalesdisplay="false" :labels="item.labels" :data="dataset" :bind="true"></chartjs-doughnut>
          <chartjs-line v-else-if="item.type == 'line'" :labels="item.labels" :option="options2" :data="dataset" :bind="true"></chartjs-line>
          <chartjs-polar-area v-else-if="item.type == 'polar-area'" :scalesdisplay="false" :option="options" :labels="item.labels" :data="dataset" :bind="true"></chartjs-polar-area>
          <chartjs-horizontal-bar v-else-if="item.type == 'horizontal-bar'" :labels="item.labels" :option="options2" :data="dataset" :bind="true"></chartjs-horizontal-bar>
          <chartjs-pie v-else-if="item.type == 'pie'" :scalesdisplay="false" :labels="item.labels" :option="options" :data="dataset" :bind="true"></chartjs-pie>
          <chartjs-radar v-else-if="item.type == 'radar'" :scalesdisplay="false" :labels="item.labels" :option="options2" :data="dataset" :bind="true"></chartjs-radar>
          <div v-else-if="item.type == 'text'">
            <p class="title has-text-centered">
              {{ dataset }}
            </p>
            <p class="subtitle">
              {{ item.description }}
            </p>
          </div>
          <data-table v-else-if="item.type == 'table'" :data="dataset"></data-table>
        </div>
      </div>
      <footer class="card-footer">
        <small v-if="item.description" class="card-footer-item">{{ item.description }}</small>
        <small class="card-footer-item">Last updated on {{ lastUpdate }}</small>
      </footer>
    </div>
    <div v-else>
      <chartjs-bar v-if="item.type == 'bar'" :labels="item.labels" :option="options2" :data="dataset" :bind="true"></chartjs-bar>
      <chartjs-doughnut v-else-if="item.type == 'doughnut'" :option="options" :scalesdisplay="false" :labels="item.labels" :data="dataset" :bind="true"></chartjs-doughnut>
      <chartjs-line v-else-if="item.type == 'line'" :labels="item.labels" :option="options2" :data="dataset" :bind="true"></chartjs-line>
      <chartjs-polar-area v-else-if="item.type == 'polar-area'" :option="options" :scalesdisplay="false" :labels="item.labels" :data="dataset" :bind="true"></chartjs-polar-area>
      <chartjs-horizontal-bar v-else-if="item.type == 'horizontal-bar'" :option="options2" :labels="item.labels" :data="dataset" :bind="true"></chartjs-horizontal-bar>
      <chartjs-pie v-else-if="item.type == 'pie'" :scalesdisplay="false" :option="options" :labels="item.labels" :data="dataset" :bind="true"></chartjs-pie>
      <chartjs-radar v-else-if="item.type == 'radar'" :scalesdisplay="false" :option="options2" :labels="item.labels" :data="dataset" :bind="true"></chartjs-radar>
      <div v-else-if="item.type == 'text'">
        <p class="title has-text-centered">
          {{ dataset }}
        </p>
        <p class="subtitle">
          {{ item.description }}
        </p>
      </div>
      <data-table v-else-if="item.type == 'table'" :data="dataset"></data-table>
    </div>
  </div>
</template>

<script>
import fetch from '../data/fetch';

export default {
  name: 'data-item',
  data() {
    return {
      dataset: null,      
      lastUpdate: null,
      options: { "legend": { "position": "right" } },
      options2: { "legend": { "display": false } }
    }
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    isCard: {
      type: Boolean,
      default: true
    }
  },
  created() {    
    this.fetchData();
    const vm = this;    
    setInterval(vm.fetchData, this.item.updateInterval * 1000);      
  },

  methods: {
    fetchData() {
      this.dataset = fetch.getData(this.item.type, this.item.dataSource, this.item.labels);      
      this.lastUpdate = new Date().toUTCString();
    }
  }
}
</script>

<style>
th.active {
    color: #0275d8;
  }

  th.active .arrow {
    opacity: 1;
  }

  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid black;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid black;
  }
</style>