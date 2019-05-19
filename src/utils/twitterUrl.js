export default function (message) {
  const baseUrl = 'https://twitter.com/share?'
  const refBaseUrl = ''
  const refUrl = refBaseUrl
  const text = message
  return baseUrl + 'url=' + refUrl + '&' + 'hashtags=ChangeTheWorld&text=' + text
}
