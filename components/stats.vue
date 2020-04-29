<template>
  <section class="stats">
    <div class="flex space-between bottom">
      <div class="col" style="margin-right: 2rem">
        <p class="latest-version">Latest version:</p>
        <p class="version">0.6.0</p>
        <p class="released">Released on 2020-04-28</p>
      </div>

      <div class="col">
        <a href="https://github.com/jameslittle230/stork" class="cta"
          >View on Github →</a
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/main.scss';

section {
  background-color: $accent-color;
}

p {
  margin: 0;
}

.flex {
  display: flex;
}

.space-between {
  justify-content: space-between;
}

.center {
  align-items: center;
}

.bottom {
  align-items: end;
}
@media screen and (max-width: 750px) {
  .flex {
    display: block;
  }
}

.latest-version {
  text-transform: uppercase;
  color: hsla(0, 0%, 0%, 50%);
  font-weight: bold;
  letter-spacing: 0.05em;
  font-size: 0.8em;
}

.version {
  font-size: 3.5em;
  color: #000000;
  font-weight: bold;
  letter-spacing: -1.75px;
  line-height: 1;
  margin-bottom: 0.1em;
}

.released {
  font-size: 1.1em;
  color: #434343;
  font-weight: bold;
  line-height: 17px;
}

.cta {
  padding-right: 0.5em;
  font-weight: bold;
  font-size: 1.4em;
}
</style>
