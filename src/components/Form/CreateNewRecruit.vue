<template>
<div class="white-background">
  <v-form
        class="pa-3 pt-4"
      >
        <v-text-field
          v-model="title"
          box
          :rules="[rules.required]"
          :error="!title && requiredError"
          color="deep-purple"
          label="タイトル"
          counter=30
          style="min-height: 96px"
        ></v-text-field>

        <v-textarea
          v-model="mainText"
          :rules="[rules.required]"
          :error="!mainText && requiredError"
          auto-grow
          box
          rows="3"
          color="deep-purple"
          counter=200
          label="詳しい説明"
        ></v-textarea>

        <v-text-field
          v-model="needsStr"
          box
          color="deep-purple"
          label="必要な人材(カンマ区切り)"
          style="min-height: 96px"
          hint="例) エンジニア , デザイナー , 出資者"
        ></v-text-field>

        <v-text-field
          v-model="slackUrl"
          label="Slack招待URL(任意)"
        />

        <v-text-field
          v-model="twitterUrl"
          label="Twitter URL(任意)"
        ></v-text-field>


        <v-text-field
          v-model="githubUrl"
          label="Github URL(任意)"
        ></v-text-field>

        <v-text-field
          v-model="otherUrl"
          label="その他URL(任意)"
        ></v-text-field>


        <v-btn @click="submit">送信</v-btn>
      </v-form>
</div>
</template>

<script>
import PostRecruit from "../../api/PostRecruit"
import Vue from 'vue';
var bus = new Vue(); // 『イベントバス』のためのインスタンス
export default {
  data : () => ({
    title : "" , 
    mainText : "" , 
    needsStr : "" , 
    slackUrl : "" , 
    twitterUrl : "" , 
    githubUrl : "" , 
    otherUrl : "" , 
    requiredError : false , 
    rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'
          )
    }
  }) , 
  methods : {
      submit : function() {
        if(!this.title || !this.mainText) {
          this.requiredError  = true
          console.log(!this.title && this.requiredError)
          console.log(!this.mainText && this.requiredError)
          return 
        }
        PostRecruit(
          this.title , 
          this.mainText , 
          this.needsStr , 
          this.slackUrl , 
          this.twitterUrl , 
          this.githubUrl , 
          this.otherUrl,
          () => {
            this.$emit("reloadRequest")
          }
        )
        this.$emit("closeWindow")
      }
  }
}
</script>


<style scoped>
.icon {
    width : 50px;
    height : 50px;
}

.white-background{
  background: white;
}
</style>