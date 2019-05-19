<template>
    <button @click="onClickButton" class="circle-button">
      <v-icon dark v-if="!on">add</v-icon>
      <v-icon dark v-else>close</v-icon>
    </button>
</template>

<script>
export default {
  props : {
    on : Boolean
  } , 
  methods : {
      onClickButton : function(){
          this.$emit("onClickButton")
      }
  }
}
</script>

<style scoped>
.circle-button {
  background: blue;
  width : 60px; 
  height : 60px;
  border-radius: 50%;
  background-color: rgb(63, 81, 181);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px
}
</style>
