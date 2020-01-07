/* eslint-disable */

export default ({ app }, inject) => {
  /*
   ** Only run on client-side and only in production mode
   */
  if (process.env.NODE_ENV !== 'production') {
    console.log("Matomo suppressed -- we're not in production.")
    return
  }

  var _paq = window._paq || []
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView'])
  _paq.push(['enableLinkTracking'])
  _paq.push(['enableHeartBeatTimer'])
  ;(function() {
    var u = 'https://analytics.jameslittle.me/'
    _paq.push(['setTrackerUrl', u + 'matomo.php'])
    _paq.push(['setSiteId', '5'])
    var d = document,
      g = d.createElement('script'),
      s = d.getElementsByTagName('script')[0]
    g.type = 'text/javascript'
    g.async = true
    g.defer = true
    g.src = u + 'matomo.js'
    s.parentNode.insertBefore(g, s)
  })()

  app.router.afterEach((to, from) => {
    _paq.push(['trackPageView'])
  })
}
