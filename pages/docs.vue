<template>
  <main>
    <pagetitle>Documentation</pagetitle>

    <!--  -->

    <div class="toc-wrapper">
      <ul class="toc">
        <!-- <li>
          <button
            v-on:click="currentlyOpenTab = OVERVIEW_TAB"
            v-bind:class="{ active: currentlyOpenTab === OVERVIEW_TAB }"
          >
            Overview
          </button>
        </li> -->
        <li>
          <button
            v-on:click="currentlyOpenTab = INSTALLATION_TAB"
            v-bind:class="{ active: currentlyOpenTab === INSTALLATION_TAB }"
          >
            Installation
          </button>
        </li>
        <li>
          <button
            v-on:click="currentlyOpenTab = BUILD_TAB"
            v-bind:class="{ active: currentlyOpenTab === BUILD_TAB }"
          >
            Building an Index
          </button>
        </li>
        <li>
          <button
            v-on:click="currentlyOpenTab = FRONTEND_TAB"
            v-bind:class="{ active: currentlyOpenTab === FRONTEND_TAB }"
          >
            Embedding the Interface
          </button>
        </li>
      </ul>
    </div>

    <!-- <overview v-if="currentlyOpenTab === OVERVIEW_TAB" /> -->
    <installation v-if="currentlyOpenTab === INSTALLATION_TAB" />
    <build v-if="currentlyOpenTab === BUILD_TAB" />
    <frontend v-if="currentlyOpenTab === FRONTEND_TAB" />
  </main>
</template>

<script>
import pagetitle from '~/components/pagetitle.vue'

// import overview from '~/components/docs/overview.vue'
import build from '~/components/docs/build.vue'
import frontend from '~/components/docs/frontend.vue'
import installation from '~/components/docs/installation.vue'

export default {
  components: {
    pagetitle,
    // overview,
    build,
    frontend,
    installation
  },
  data() {
    return {
      OVERVIEW_TAB: 1,
      BUILD_TAB: 2,
      FRONTEND_TAB: 3,
      INSTALLATION_TAB: 4,

      currentlyOpenTab: 4
    }
  },
  head: {
    title: 'Documentation'
  }
}
</script>

<style>
.toc-wrapper {
  padding-left: calc(50% - 650px / 2);
}
.toc {
  position: absolute;
  transform: translateX(-108%);
  text-align: right;
  list-style-type: none;
  /* height: 100%; */
  margin-top: 2em;
  border-right: 1px solid gray;
  padding-right: 1em;
}

.toc button {
  border: none;
  background: none;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0.3em 0.6em;
  margin-bottom: 0.4em;
}

.toc button:hover {
  cursor: pointer;
}

.toc button.active {
  background: hsla(103, 24%, 77%, 1);
}

@media screen and (max-width: 1200px) {
  .toc-wrapper {
    padding: 0;
  }

  .toc {
    position: static;
    transform: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0 calc(50% - 650px / 2);
    /* justify-content: space-between; */
    margin: 0;
    margin-top: 1em;
  }

  .toc li {
    margin-right: 1em;
  }
}
</style>
