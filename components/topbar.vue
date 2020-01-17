<template>
  <section class="top-bar">
    <a href="/">Home</a>
    <a href="/docs">Documentation</a>
    <a href="/themes">Themes</a>
    <a href="/integrations">Integrations</a>
    <a href="/changelog">Changelog</a>
    <a href="/roadmap">Roadmap</a>
  </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/main.scss';

section {
  background-color: $accent-color;
  padding-top: 1em;
  padding-bottom: 1em;
}

a {
  margin-right: 1em;
}
</style>
