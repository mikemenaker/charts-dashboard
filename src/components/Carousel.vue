<template>
    <main v-if="dataItems.length > 0">
        <agile :autoplay="true" :fade="true">
            <div class="slide" v-for="dataItem in dataItems" :key="dataItem.name" style="height:50px;">                
                <div class="tile ">
                    <div class="tile is-parent">
                        <article class="tile is-child is-5" >
                            &nbsp;
                        </article>
                        <article class="tile is-child is-2" >
                            <h4 class="has-text-centered">{{ dataItem.title }} </h4>
                            <data-item :is-card="false" :item="dataItem"></data-item>
                        </article>
                        <article class="tile is-child is-5" >
                            &nbsp;
                        </article>
                    </div>
                </div>              
            </div>
        </agile>
    </main>
</template>

<script>
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