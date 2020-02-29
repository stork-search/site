<template>
  <div class="page-wrap">
    <topbar />
    <nuxt />
    <myfooter />
  </div>
</template>

<script>
import topbar from '~/components/topbar.vue'
import myfooter from '~/components/footer.vue'
export default {
  components: { topbar, myfooter },
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk
        ? `${titleChunk} - Stork`
        : 'Stork: Impossibly Fast Web Search'
    },
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Inconsolata:400,700&display=swap'
      }
    ],
    script: [
      {
        hid: 'analytics',
        innerHTML: `var _paq = window._paq || [];
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="https://analytics.jameslittle.me/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '5']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `,
        type: 'text/javascript',
        body: true
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      analytics: ['innerHTML']
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';
</style>
