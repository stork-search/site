<template>
  <main>
    <pagetitle>Roadmap</pagetitle>

    <section>
      <p>
        <strong>Stork is still a beta project.</strong> There are aspects of the
        project where it's fallen short of the design decisions, where it seems
        broken, and where it seems like it should be able to do more. While it's
        in beta (and likely beyond), I'm going to list out the project roadmap
        and expected features on this page to keep me accountable for how Stork
        evolves.
      </p>

      <h2>
        Overarching goals:
      </h2>

      <ul>
        <li>Reduce index size and keep WebAssembly bundle size low</li>
        <li>Keep search fast (responsive on a per-keystroke basis)</li>
        <li>Keep the API easy to get started and easy to configure</li>
        <li>
          Build out configuration options so that search behavior can fit
          different types of content
        </li>
      </ul>

      <h1>1.0.0</h1>

      <ul>
        <li>Keyboard shortcuts on JS</li>
        <li>Support the SRT file format</li>
        <li>Callbacks in JS for different user events</li>
        <li>Sorting the results by relevance <em>Added in 0.5.3</em></li>
        <li>Sensible handling of multi-word queries <em>Added in 0.5.3</em></li>
        <li>Different options for indexing behavior</li>
        <li>
          Different options for allowed input, like files with frontmatter, or
          lists of files
        </li>
      </ul>

      <h1>1.1.0</h1>

      <ul>
        <li>
          Write and publish some themes: first-party stylesheets that change the
          UI of the search interface
        </li>
        <li>
          Write and publish some integrations with other projects, e.g. various
          static site generators, Wordpress, etc.
        </li>
        <li>Convert JS code to Typescript</li>
      </ul>

      <p>
        More specific bugs and features are listed on the project's
        <a href="https://github.com/jameslittle230/stork/issues"
          >Github Issues page</a
        >. Feel free to submit a feature request there.
      </p>
    </section>
  </main>
</template>

<script>
import pagetitle from '../components/pagetitle.vue'
export default {
  components: { pagetitle }
}
</script>
