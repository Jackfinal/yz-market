<template>
    <div class="class-nav">
        <div id="scroll-nav" style="height: 100%;">
            <ul class="nav" id="scroll-nav-content" style="height: 540px; transform: translate3d(0px, 0px, 0px);">
                <li class="category-name js-category-name"
                    :class="{active:index===topIndex}"
                    :data-cid="list.id"
                    v-for="(list,index) in topLists"
                    @click="getSubList(index,list.id)"
                >{{list.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import mixin from '../../../modules/js/mixin.js'
    export default {
        name: "left-nav",
        computed:{
            topLists(){ return this.$store.state.topLists },
            topIndex(){ return this.$store.state.topIndex },
        },
        methods:{
            getSubList(index,id) {
                this.$emit('getSubList',index,id)
            },
        },
        mixins: [mixin],
    }
</script>

<style scoped>

</style>