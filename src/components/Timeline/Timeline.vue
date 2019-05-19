<template>
    <div class="timeline">
        <Card 
        v-for="item in items" :key="item.uid"
        :title="item.title"
        :mainText="item.mainText"
        :chips="item.chips"
        :sns="item.sns"
        class="card-margin"
        />
    </div>
</template>

<script>
import { PropType } from 'vue'
import Card from './Card.vue'
import TimelineListRequest from "../../api/TimelineListRequest.js"

export default {
    data : () => ({
        items : []
    }),
    props : {
        requestReload : Boolean
    } , 
    mounted : function() {
        this.reload()
    },
    methods : {
        onClickButton : function(){
            this.$emit("onClickButton")
        } , 
        reload : function() {
            console.log("reload")
            TimelineListRequest((data) => {
                this.items = data
                this.$emit("finishReload")
            })
        }
    } , 
    watch : {
        requestReload : function(val) {
            if(val) {
                this.reload()
            }
        }
    },
    components : {Card}
}
</script>

<style scoped>
 .card-margin{
     margin-top : 20px;
 }
 .timeline {
 }
</style>
