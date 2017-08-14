<template>
    <main v-if="charts.length > 0">
        <agile>
            <div class="slide" v-for="chart in charts"  :key="chart.title">
                <h3>{{chart.title}}</h3>
                <div class="columns">
                    <div class="column is-4 is-offset-4">
                        <chart :type="chart.type" :height="100" :data="chart.data" :options="chart.options"></chart>
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