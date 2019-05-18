const axios = require('axios')

export default function (title, mainText, needsStr, slackUrl, twitterUrl, githubUrl, otherUrl, completion) {
  axios
    .post('https://asia-northeast1-changeworld.cloudfunctions.net/postRecruit', {
      title: title,
      mainText: mainText,
      needsStr: needsStr,
      slack: slackUrl,
      twitter: twitterUrl,
      github: githubUrl,
      other: otherUrl
    })
    .then(response => {
      completion(response)
    })
}
