<template>
  <section class="top-bar">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/docs">Documentation</nuxt-link>
    <nuxt-link to="/themes">Themes</nuxt-link>
    <nuxt-link to="/integrations">Integrations</nuxt-link>
    <!-- <nuxt-link to="/contributing">Contributing</nuxt-link> -->
    <nuxt-link to="/changelog">Changelog</nuxt-link>
    <nuxt-link to="/roadmap">Roadmap</nuxt-link>
  </section>
</template>

<style lang="scss" scoped>
@import '~assets/main.scss';

section {
  background-color: $accent-color;
  padding-top: 1em;
  padding-bottom: 1em;
}

a {
  margin-right: 1em;
}
</style>
