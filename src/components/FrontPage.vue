<template>
  <div class="hello">
    <FrontMessage
    />

    <v-dialog 
    v-model="dialog" 
    fullscreen 
    max-width="600px">
      <CreateNewRecruit
      @closeWindow="onClickButton"
      @reloadRequest="reloadRequest"
      />
    </v-dialog>

    <Timeline
      :requestReload="requestReload"
      @finishReload="finishReload"
    />

    <AddButton
      class="right-corner float"
      :on="dialog"
      @onClickButton="onClickButton"
    />
  </div>
</template>

<script>
import FrontMessage from './FrontMessage.vue'
import Timeline from './Timeline/Timeline.vue'
import CreateNewRecruit from './Form/CreateNewRecruit.vue'
import AddButton from './SubComponents/addButton.vue'
export default {
  data: () => ({
      dialog: false , 
      requestReload : false
  }) , 
  methods : {
    onClickButton : function() {
      this.dialog = !this.dialog
    } , 
    reloadRequest : function() {
      this.requestReload = true
    } , 
    finishReload : function() {
      this.requestReload = false
    }
  } , 
  components : {AddButton, CreateNewRecruit, Timeline, FrontMessage}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .right-corner {
    position: fixed ; 
    right : 10px ; 
    bottom : 10px;
  }

  .float { 
    z-index: 203;
  }
</style>
