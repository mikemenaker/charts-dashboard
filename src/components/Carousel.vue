<template>
    <main v-if="dataItems.length > 0">
        <agile :speed="750" :timing="'linear'" :infinite="true" :autoplay="true" :pauseOnHover="false">
            <div class="slide" v-for="dataItem in dataItems" :key="dataItem.name">
                <div class="columns">
                    <div class="column is-4 is-offset-4">
                        <data-item :is-card="false" :item="dataItem"></data-item>
                    </div>
                </div>
            </div>
        </agile>
    </main>
</template>

<script>
// limit chart size
import DataItem from '../components/DataItem'

export default {
    name: 'carousel',
    components: {
        DataItem
    },
    props: {
        dataItems: {
            type: Array,
            required: true,
            default: () => ([])
        }
    },
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