<template>
    <main v-if="tabs.length > 0">
        <agile :speed="750" :timing="'linear'" :infinite="true" :fade="true" :autoplay="true" :pauseOnHover="false">
            <div style="height:100px" class="slide" v-for="tab in tabs" :key="tab.name">
                <h3 class="has-text-centered">{{tab.name}} - {{tab.charts[0].title}}</h3>
                <div class="columns">
                    <div class="column is-4 is-offset-4">
                        <chart :type="tab.charts[0].type" :height="100" :data="tab.charts[0].data" :options="addToOptions(tab.charts[0].options)"></chart>
                    </div>
                </div>
            </div>
        </agile>
    </main>
</template>

<script>
import Chart from 'vue-bulma-chartjs'

export default {
    name: 'carousel',
    components: {
        Chart
    },
    props: {
        tabs: {
            type: Array,
            required: true,
            default: () => ([])
        }
    },
    methods: {
        addToOptions(options) {
            let newOptions = options;
            newOptions.legend = {};
            newOptions.legend.position = 'right';            
            return newOptions;
        }
    }
}
</script>

<style>
.agile__arrow {
    background-color: transparent;
}

.agile__dots {
    margin-top: 30px;
}
</style>