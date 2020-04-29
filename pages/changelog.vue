<template>
  <main>
    <pagetitle>Changelog</pagetitle>

    <section>
      <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>federalist.st size</th>
            <th>stork.wasm size</th>
            <th>stork.js size</th>
            <th>Search duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0.6.0</td>
            <td>1.80 MB</td>
            <td>191.37 kB</td>
            <td>648.65 kB</td>
            <td>0.218 seconds</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h1>0.6.0</h1>
      <p class="subtitle">
        <a href="https://github.com/jameslittle230/stork/releases/v0.5.3"
          >Released 2020-04-05</a
        >
      </p>
      <ul>
        <li>WASM: Deprioritizes stop words in search results</li>
        <li>WASM: Searches for words with the same stem as the query</li>
        <li>WASM: Improves error messaging for corrupt indexes</li>
        <li>Indexer: Adds knowledge of word stems to index</li>
      </ul>
      <h1>0.5.3</h1>
      <p class="subtitle">
        <a href="https://github.com/jameslittle230/stork/releases/v0.5.3"
          >Released 2020-03-28</a
        >
      </p>
      <ul>
        <li>
          Rewrite search algorithm to support multi-word search queries,
          including sensible result ordering and query highlighting.
        </li>
        <li>Tweaks basic.css to give results more room</li>
      </ul>
      <h1>0.5.2</h1>
      <p class="subtitle">
        <a href="https://github.com/jameslittle230/stork/releases/v0.5.2"
          >Released 2020-03-22</a
        >
      </p>
      <ul>
        <li>No code changes, fixes bad version bump</li>
      </ul>
      <h1>0.5.1</h1>
      <p class="subtitle">
        <a href="https://github.com/jameslittle230/stork/releases/v0.5.1"
          >Released 2020-03-22</a
        >
      </p>
      <ul>
        <li>Change .stork-result a selector so colors work</li>
        <li>Implement scoring and sorting</li>
        <li>Update dependencies and CI configuration</li>
      </ul>
    </section>
  </main>
</template>

<script>
import pagetitle from '../components/pagetitle.vue'
export default {
  components: { pagetitle }
}
</script>

<style scoped>
td {
  text-align: center;
}

h1 {
  margin-bottom: 0;
  font-size: 2.6rem;
  line-height: 1;
}

.subtitle {
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1.5em;
}
</style>
