<template>
  <section class="footer">
    <!-- <p><b>Stork</b></p> -->
    <p>&copy; 2019–{{ year }}</p>
    <p>
      Stork is built and shepherded by
      <a href="https://jameslittle.me">James Little</a>, who's really excited
      that you're checking it out. If you have any questions or comments, feel
      free to <a href="https://twitter.com/jameslittle230">get in touch</a> or
      <a href="https://github.com/jameslittle230/stork"
        >open an issue on Github.</a
      >
    </p>
  </section>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/main.scss';
section {
  background-color: $accent-color;
}
</style>
