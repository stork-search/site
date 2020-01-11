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
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';
</style>
