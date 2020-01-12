<template>
  <section class="stats">
    <div class="flex">
      <p>Latest version: <strong>0.4.0</strong></p>
      <p>Latest index protocol: <strong>1.0.0</strong></p>
      <p>Javascript library last updated: <strong>2020-01-12</strong></p>
    </div>
    <p class="github-cta">
      Check out the latest release
      <a href="https://github.com/jameslittle230/stork">on Github</a>
    </p>
  </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/main.scss';

section {
  background-color: $accent-color;
}

.flex {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 750px) {
  .flex {
    display: block;
  }

  .flex p {
    margin-bottom: 2em;
  }
}

p {
  line-height: 1;
  margin: 1.4em 0;
}

strong {
  display: block;
  font-size: 2.2em;
}

@media screen and (max-width: 500px) {
  strong {
    font-size: 1.7em;
  }
}

.github-cta {
  font-size: 1.3em;
}
</style>
