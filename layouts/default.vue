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
  components: { topbar, myfooter }
}
</script>

<style lang="scss">
@import '~assets/main.scss';
</style>
