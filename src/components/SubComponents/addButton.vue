<template>
    <v-btn fab dark color="indigo" @click="onClickButton">
      <v-icon dark v-if="!on">add</v-icon>
      <v-icon dark v-else>close</v-icon>
    </v-btn>
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
