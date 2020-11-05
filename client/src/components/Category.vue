<template>
    <div class="col-3 d-flex flex-column category-body">
        <div class="border rounded text-white"
            :class="`bg-${categoryDetail.color}`">
                <div id="title">
                    <h5>{{categoryDetail.title}}</h5>
                </div>
            
        </div>
        <div class="border rounded">
            <div id="content" class="content-tab overflow-auto">
                <Card
                    @changePage="changePage">
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './Card'
export default {
    name: 'Category',
    components: {
        Card
    },
    props: ['categoryDetail'],
    methods: {
        changePage(name) {
            this.$emit('changePage', name)
        }
    }

}
</script>

<style>

</style>