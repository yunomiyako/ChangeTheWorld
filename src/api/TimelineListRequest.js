const axios = require('axios')

export default function (completion) {
  axios
    .get('https://asia-northeast1-changeworld.cloudfunctions.net/fetchTimeLine')
    .then(response => {
      let data = response.data
      completion(data)
    })
}
