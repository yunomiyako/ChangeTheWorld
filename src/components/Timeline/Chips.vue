<template>
    <div>
        <v-chip 
        v-for="chip in validChips" :key="chip">{{chip}}</v-chip>
    </div>
</template>
<script>

export default {
    data : () => ({

    }),
    props : {
        chips : {
            type : Array , 
            require  : false,
        default : () => ([])}
    },
    methods : {

    } , 
    computed: {
        validChips: function () {
            return this.chips.filter(function (chip) {
                return chip != ""
            }
            )
        }
    }
}
</script>

<style scoped>

</style>