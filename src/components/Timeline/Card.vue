<template>
  <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="400"
    @click="onClickCard"
  >
    <v-card-title>
      <span class="title font-weight-light">{{title}}</span>
    </v-card-title>

    <transition name="bounce">
        <div v-if="detailed">
            <v-card-text class="headline font-weight-bold">
            {{mainText}}
            </v-card-text>

            <Chips
            :chips="chips"
            />
                
            <SNSList
            v-if="sns.slack || sns.twitter || sns.github || sns.other"
            :slackUrl="sns.slack"
            :twitterUrl="sns.twitter"
            :githubUrl ="sns.github"
            :otherUrl="sns.other"
            />
        </div>
    </transition>
  </v-card>
</template>
<script>
import SNSList from './SNSList.vue'
import CardDetail from './CardDetail.vue'
import Chips from './Chips.vue'

export default {
    data : () => ({
        detailed : false
    }),
    props : {
        title : String , 
        mainText : String , 
        chips : Array , 
        sns : Object
    },
    methods : {
        onClickCard : function(){
            this.detailed = true
        }
    } , 
    components : {Chips, CardDetail, SNSList}
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity : 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>