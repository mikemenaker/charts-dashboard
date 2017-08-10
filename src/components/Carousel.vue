<template>
    <main>
        <agile>
            <div class="slide">
                <h3>Chart 1</h3>
                <div class="columns">
                    <div class="column is-4 is-offset-4">                        
                            <chart :type="'pie'" :height="100" :data="data" :options="options"></chart>                        
                    </div>
                </div>
            </div>            
            <div class="slide">
                <h3>Chart 2</h3>
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