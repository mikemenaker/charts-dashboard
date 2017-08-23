<template>
    <main v-if="tabs.length > 0">
        <agile :speed="750" :timing="'linear'" :infinite="true" :autoplay="true" :pauseOnHover="false">
            <div style="height:100px" class="slide" v-for="tab in tabs" :key="tab.name">
                <h3 class="has-text-centered">{{tab.name}} - {{tab.charts[0].title}}</h3>
                <div class="columns">
                    <div class="column is-4 is-offset-4">                        
                       <dyna-chart :type="tab.charts[0].type" :dataSource="tab.charts[0].dataSource" :root-data="tab.charts[0].data" :options="tab.charts[0].options"></dyna-chart>
                    </div>
                </div>
            </div>
        </agile>
    </main>
</template>

<script>
import DynaChart from '../components/DynamicChart'

export default {
    name: 'carousel',
    components: {
        DynaChart
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
    margin-top: 125px;
}
</style>