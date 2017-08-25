<template>
  <div v-if="dataset">
    <div v-if="isCard" class="card">
      <header class="card-header">
        <p class="card-header-title">{{ item.title }}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <chartjs-bar v-if="item.type == 'bar'" :labels="labels" :option="options2"  :data="dataset" :bind="true"></chartjs-bar>
          <chartjs-doughnut v-else-if="item.type == 'doughnut'" :option="options" :scalesdisplay="false" :labels="labels" :data="dataset" :bind="true"></chartjs-doughnut>
          <chartjs-line v-else-if="item.type == 'line'" :labels="labels" :option="options2"  :data="dataset" :bind="true"></chartjs-line>
          <chartjs-polar-area v-else-if="item.type == 'polar-area'" :scalesdisplay="false" :option="options"  :labels="labels" :data="dataset" :bind="true"></chartjs-polar-area>
          <chartjs-horizontal-bar v-else-if="item.type == 'horizontal-bar'" :labels="labels" :option="options2"  :data="dataset" :bind="true"></chartjs-horizontal-bar>
          <chartjs-pie v-else-if="item.type == 'pie'" :scalesdisplay="false" :labels="labels" :option="options"  :data="dataset" :bind="true"></chartjs-pie>
          <chartjs-radar v-else-if="item.type == 'radar'" :scalesdisplay="false" :labels="labels" :option="options2"  :data="dataset" :bind="true"></chartjs-radar>
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
          <chartjs-bar v-if="item.type == 'bar'" :labels="labels" :option="options2" :data="dataset" :bind="true"></chartjs-bar>
          <chartjs-doughnut v-else-if="item.type == 'doughnut'" :option="options" :scalesdisplay="false" :labels="labels" :data="dataset" :bind="true"></chartjs-doughnut>
          <chartjs-line v-else-if="item.type == 'line'" :labels="labels" :option="options2"  :data="dataset" :bind="true"></chartjs-line>
          <chartjs-polar-area v-else-if="item.type == 'polar-area'" :option="options" :scalesdisplay="false" :labels="labels" :data="dataset" :bind="true"></chartjs-polar-area>
          <chartjs-horizontal-bar v-else-if="item.type == 'horizontal-bar'" :option="options2"  :labels="labels" :data="dataset" :bind="true"></chartjs-horizontal-bar>
          <chartjs-pie v-else-if="item.type == 'pie'" :scalesdisplay="false" :option="options"  :labels="labels" :data="dataset" :bind="true"></chartjs-pie>
          <chartjs-radar v-else-if="item.type == 'radar'" :scalesdisplay="false" :option="options2"  :labels="labels" :data="dataset" :bind="true"></chartjs-radar>
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

export default {
  name: 'data-item',
  data() {
    return { dataset: null, labels: null, lastUpdate: null, options: { "legend": { "position": "right" } }, options2: { "legend": { "display": false } } }
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
    this.labels = this.item.labels; // if labels

    this.updateData();
    const vm = this;
    setInterval(() => {
      vm.updateData();
    }, this.item.updateInterval * 1000);
  },
  methods: {
    updateData() {
      if (this.labels != null) {
      let newData = [];      
        this.labels.forEach(label => newData.push(Math.floor((Math.random() * 100) + 1)));      
      this.dataset = newData;
      } else {
        this.dataset = Math.floor((Math.random() * 100) + 1);
        this.item.description = "Request per hour for last 24 hours";
      }

      const d = new Date();
      this.lastUpdate = d.toUTCString();
    }
  }
}
</script>

<style>

</style>