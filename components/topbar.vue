<template>
  <header>
    <section class="warning">
      Stork is in beta. Please adjust your expectations accordingly.
    </section>
    <section class="top-bar">
      <a href="/">Home</a>
      <a href="/docs">Documentation</a>
      <!-- <a href="/themes">Themes</a>
    <a href="/integrations">Integrations</a> -->
      <a href="/changelog">Changelog</a>
      <a href="/roadmap">Roadmap</a>
    </section>
  </header>
</template>

<style lang="scss" scoped>
@import '~assets/scss/main.scss';

section {
  background-color: $accent-color;
  padding-top: 1em;
  padding-bottom: 1em;
}

.warning {
  text-align: center;
  font-size: 0.8em;
  background-color: #e9e777;
  font-weight: bold;
}

a {
  margin-right: 1em;
}
</style>
