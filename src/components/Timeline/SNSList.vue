<template>
        <v-list two-line >
            <div v-if="slackUrl">
            <v-list-tile @click="onClickSlack(slackUrl)" >
                <v-list-tile-action>
                <img class="icon" src="../../assets/Slack_Mark_Web.png">
                </v-list-tile-action>

                <v-list-tile-content>
                <v-list-tile-title>Slack招待URL</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>
            </div>

            <div v-if="twitterUrl">
            <v-list-tile @click="onClickTwitter(twitterUrl)">
                <v-list-tile-action>
                    <img class="icon" src="../../assets/Twitter_Logo_Blue.png">
                </v-list-tile-action>

                <v-list-tile-content>
                <v-list-tile-title>Twitter</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            </div>

            <div v-if="githubUrl">
                    <v-list-tile @click="onClickGithub(githubUrl)">
                        <v-list-tile-action>
                            <img class="icon" src="../../assets/GitHub-Mark-Light-120px-plus.png">
                        </v-list-tile-action>

                        <v-list-tile-content>
                        <v-list-tile-title>Github</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
            </div>

            <div v-if="otherUrl">
                <v-list-tile @click="onClickGithub(otherUrl)">
                    <v-list-tile-content>
                    <v-list-tile-title>その他のURL</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </div>
        </v-list>
</template>
<script>

export default {
    data : () => ({

    }),
    props : {
        slackUrl :  String , 
        twitterUrl : String , 
        githubUrl : String , 
        otherUrl : String
    },
    methods : {
        onClickSlack : function (url) {
            window.open(url)
        } , 
        onClickTwitter : function(url) {
            window.open(url)
        } , 
        onClickGithub : function(url) {
            window.open(url)
        }
    }
}
</script>

<style scoped>
.link-text {
    text-decoration:none;
    color : white;
}
.icon {
    width : 50px;
    height : 50px;
}
</style>