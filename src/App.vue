<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img src="https://vuejs.org/images/logo.png" alt="Vue.js: The Progressive JavaScript Framework" height="28"> -
          <img src="http://jgthms.com/web-design-in-4-minutes/bulma.png" alt="Bulma: a modern CSS framework based on Flexbox" height="28"> -
          <img src="http://www.chartjs.org/img/chartjs-logo.svg" alt="Chart.jsSimple yet flexible JavaScript charting for designers & developers" height="28">
        </a>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Docs
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item" href="https://vuejs.org/">
            Vue.js
          </a>
          <a class="navbar-item" href="http://bulma.io/">
            Bulma
          </a>
          <a class="navbar-item" href="http://www.chartjs.org/">
            Chart.js
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            This site is based on these technologies
          </div>
        </div>
      </div>
      <a class="navbar-item" href="https://github.com/mikemenaker/charts-dashboard" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fa fa-github"></i>
        </span>
      </a>
    </nav>
    <section class="section">
      <div class="container">
        <carousel v-if="carousel" :dataItems="carousel"></carousel>
        <data-tabs :tabs="tabs"></data-tabs>
      </div>
    </section>
  </div>
</template>

<script>
import DataTabs from './components/DataTabs'
import Carousel from './components/Carousel'
import fetch from './data/fetch';

export default {
  name: 'app',
  components: {
    DataTabs,
    Carousel
  },
  data: () => ({
    tabs: [],
    carousel: null
  }),
  async created() {
    const config = await fetch.getConfig();    
    this.tabs = config.tabs;
    if (config.hasOwnProperty("carousel")) {
      this.carousel = config.carousel;
    }
  }
}
</script>

<style lang="scss">
@import '~animate.css';

.navbar {
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
}
</style>
