<template>
  <section class="demo">
    <p class="subtitle">
      Search through the
      <a href="https://www.youtube.com/watch?v=DPgE7PNzXag"
        >Federalist Papers</a
      >
      (except just the first twenty):
    </p>
    <div class="stork-wrapper">
      <input
        data-stork="federalist"
        class="stork-input"
        placeholder="liberty"
      />
      <div data-stork="federalist-output" class="stork-output"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: hsla(0, 0%, 0%, 0.1);
}

.subtitle {
  text-transform: uppercase;
  color: hsla(0, 0%, 0%, 50%);
  font-weight: bold;
  letter-spacing: 0.05em;
  font-size: 0.8em;
}

input {
  font-size: 1.3em;
  width: 100%;
  padding: 0.5em 0.8em;
  // border-radius: 2em;
  // border: 1px solid hsla(0, 0%, 0%, 90%);
}

.stork-wrapper {
  z-index: 10;
}
</style>

<script>
export default {
  head: {
    script: [
      { src: 'https://files.stork-search.net/stork.js' },
      {
        hid: 'storkreg',
        innerHTML: `stork.register('federalist', 'https://files.stork-search.net/federalist.st')`,
        type: 'text/javascript',
        body: true
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      storkreg: ['innerHTML']
    },
    link: [
      { rel: 'stylesheet', href: 'https://files.stork-search.net/basic.css' }
    ]
  }
}
</script>
