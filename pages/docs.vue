<template>
  <main>
    <pagetitle>Documentation</pagetitle>

    <modal v-if="modalOpen" v-bind:onClose="modalClosed">
      <p>Default List Item Template String:</p>
      <codeblock v-bind:asset="listItemTemplate" />
    </modal>

    <section>
      <p>
        Stork's aim is to be highly configurable. Search is a very site-specific
        piece of functionality, and it's important that the experience of
        searching feels like it belongs to your site, not to me, the Stork
        library, or anyone else. To that end, it's Stork's goal to let you
        configure how your files are indexed, how results are ordered, and how
        the search interface is displayed.
      </p>

      <p>
        There are two places where you can customize how Stork works: the build
        step, where you create your index file; and the run step, where you load
        the Stork library on your webpage and register your index file. This
        page will guide you through both sets of options and show you how to
        make your search bar your own.
      </p>

      <h1>Build-time options</h1>

      <p>
        Stork precomputes your search results for any given query, meaning that
        each time an index is computed, you're "locking in" the results for any
        possible query. With a Stork setup, you're meant to recompute and
        re-upload a search index every time your content changes, likely as part
        of the build process for your static site. However, Stork's
        configurability lets it be used in man
      </p>

      <h2>Basic Configuration</h2>

      <p>
        The basic Stork configuration defines a list of files to be indexed and
        a filename to which the computed index will be written:
      </p>

      <codeblock v-bind:asset="basicconfig" lang="toml" filename="basic.toml" />

      <p>
        When you run Stork from the command line, you do so from a
        <strong>working directory</strong>, a directory to which all paths in
        the config file are relative. Therefore, if you're in your home
        directory (<code>~</code>), the <code>basic.toml</code> file is located
        in your home directory, and you run:
      </p>

      <pre><code>$ stork --build basic.toml</code></pre>

      <p>
        Stork will index each file in the <code>files</code> array, where the
        filename is specified by the <code>path</code> value, and is relative to
        both the <strong>working directory</strong> and the
        <code>base_directory</code> value. For the example above, Stork will
        index:
      </p>

      <ul>
        <li><code>~/test/federalist/federalist-1.txt</code></li>
        <li><code>~/test/federalist/federalist-2.txt</code></li>
      </ul>

      <p>and will output your index to <code>~/federalist.st</code>.</p>

      <p>
        When viewed on a web page, the search result will link to the file's
        <code>url</code> value, and the title of the document will be displayed
        as the file's <code>title</code> value.
      </p>

      <note>
        The indexer will look at all content in the file and include it in
        search results. As of now, there is no way to filter out HTML tags,
        front matter, or other types of content. You might need to generate
        temporary plain-text versions of the documents you intend to index with
        extraneous content stripped away, and feed those into Stork instead of
        your content as written.
      </note>

      <h2>Advanced Options</h2>

      <p>
        The config file can accept optional options that affect how the index is
        built and formatted, which can change the results for a given query.
        These options are broken into two sets: the
        <strong>input</strong> options and the <strong>output</strong> options:
      </p>

      <h3>Input Options</h3>

      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>surrounding_word_count</code></td>
            <td>Integer</td>
            <td>8</td>
            <td style="width: 450px">
              Describes how many words surrounding each search term will be
              displayed in the results. Also determines what defines a nearby
              word, for the purposes of multi-word queries.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Output Options</h3>

      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>debug</code></td>
            <td>Boolean</td>
            <td>false</td>
            <td style="width: 450px">
              When false, Stork will output a small, binary-encoded index. When
              true, Stork will output a pretty-printed JSON representation of
              the index. This option should only be used for debugging.
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        This example configuration file sets custom values for each possible
        configuration option:
      </p>

      <codeblock
        v-bind:asset="advancedconfig"
        lang="toml"
        filename="everything.toml"
      />

      <h1>Runtime options</h1>

      <p>
        After including the <code>stork.js</code> Javascript file on your page,
        you'll be able to call the <code>stork.register()</code> function to
        register a search index on that page. To properly register an index,
        you'll need, at minimum:
      </p>

      <ul>
        <li>
          An <code>&lt;input&gt;</code> element with the attribute
          <code>data-stork="foo"</code>
        </li>
        <li>
          A <code>&lt;div&gt;</code> element with the attribute
          <code>data-stork="foo-results"</code>
        </li>
      </ul>

      <p>
        Stork will find these elements and attach its functionality to them.
      </p>

      <p>
        The <code>register()</code> function takes two mandatory arguments: the
        index name (foo in the example above), and the URL at which the
        generated index can be found. When the <code>register()</code> method is
        called, the Stork library will download the index from that URL and
        attach it to the correct HTML elements.
      </p>

      <p>
        There is a third, optional argument the <code>register()</code> function
        takes: an options object. This lets you configure some of the display
        and behavior of that Stork index. The available options are as follows:
      </p>

      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>showProgress</code></td>
            <td>Boolean</td>
            <td>true</td>
            <td style="width: 350px">
              When true, Stork will display a progress bar in the input field as
              the index is loading. When false, that progress bar will not be
              rendered.
            </td>
          </tr>
          <tr>
            <td><code>listItemTemplateString</code></td>
            <td>String</td>
            <td>
              <a v-on:click.prevent="modalOpen = true" href="#"
                >Open default value</a
              >
            </td>
            <td style="width: 350px">
              The <a href="#">Handlebars template</a> for the search results
              file listing.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
import pagetitle from '~/components/pagetitle.vue'
import codeblock from '~/components/codeblock.js'
import note from '~/components/note.vue'
import modal from '~/components/modal.vue'

import basicconfig from '~/assets/code/basicconfig.toml.js'
import advancedconfig from '~/assets/code/advancedconfig.toml.js'
import listItemTemplate from '~/assets/code/listItemTemplate.txt.js'

export default {
  components: { pagetitle, codeblock, note, modal },
  data() {
    return {
      basicconfig,
      advancedconfig,
      listItemTemplate,
      modalOpen: false
    }
  },
  methods: {
    modalClosed() {
      this.modalOpen = false
    }
  },
  head: {
    title: 'Documentation'
  }
}
</script>

<style></style>
