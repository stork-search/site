<template>
  <section class="stats">
    <div class="flex">
      <p>Latest version: <strong>0.2.0</strong></p>
      <p>Latest index protocol: <strong>1.0.0</strong></p>
      <p>Javascript library last updated: <strong>2020-01-04</strong></p>
    </div>
    <p class="github-cta">
      Check out the latest release
      <a href="https://github.com/jameslittle230/stork">on Github</a>
    </p>
  </section>
</template>

<style lang="scss" scoped>
@import '~assets/main.scss';

section {
  background-color: $accent-color;
}

.flex {
  display: flex;
  justify-content: space-between;
}

p {
  line-height: 1;
  margin: 1.4em 0;
}

strong {
  display: block;
  font-size: 2.2em;
}

.github-cta {
  font-size: 1.3em;
}
</style>
