<template>
  <section>
    <p>
      Stork precomputes your search results for any given query, meaning that
      each time an index is computed, you're "locking in" the results for any
      possible query. With a Stork setup, you're meant to recompute and
      re-upload a search index every time your content changes, likely as part
      of the build process for your static site.
    </p>

    <h2>Basic Configuration</h2>

    <p>
      The basic Stork configuration defines a list of files to be indexed and a
      filename to which the computed index will be written. Stork requires a
      <a href="https://github.com/toml-lang/toml">toml</a> configuration file to
      know which files should be indexed.
    </p>

    <codeblock v-bind:asset="basicconfig" lang="toml" filename="basic.toml" />

    <p>
      When you run Stork from the command line, you do so from a
      <strong>working directory</strong>, a directory to which all paths in the
      config file are relative. Therefore, if you're in your home directory
      (<code>~</code>), the <code>basic.toml</code> file is located in your home
      directory, and you run:
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
      <code>url</code> value, and the title of the document will be displayed as
      the file's <code>title</code> value.
    </p>

    <note>
      The indexer will look at all content in the file and include it in search
      results. As of now, there is no way to filter out HTML tags, front matter,
      or other types of content. You might need to generate temporary plain-text
      versions of the documents you intend to index with extraneous content
      stripped away, and feed those into Stork instead of your content as
      written.
    </note>

    <h2>Advanced Options</h2>

    <p>
      The config file can accept optional options that affect how the index is
      built and formatted, which can change the results for a given query. These
      options are broken into two sets: the
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
          <td><code>base_directory</code></td>
          <td>String</td>
          <td>No default</td>
          <td>
            The directory to which each file path is relative. This file path
            must also be relative to the working directory.
          </td>
        </tr>

        <tr>
          <td><code>surrounding_word_count</code></td>
          <td>Integer</td>
          <td>8</td>
          <td style="width: 400px">
            Describes how many words surrounding each search term will be
            displayed in the results. Also determines what defines a nearby
            word, for the purposes of multi-word queries.
          </td>
        </tr>

        <tr>
          <td><code>files</code></td>
          <td>Array of File objects</td>
          <td>Empty Array</td>
          <td>
            The list of file objects Stork will index. (See the file object
            description below.)
          </td>
        </tr>
      </tbody>
    </table>

    <h3>The File Object</h3>

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
          <td><code>path</code></td>
          <td>String</td>
          <td>No default</td>
          <td>
            The path to the file on disk, relative to the working directory and
            the base directory.
          </td>
        </tr>

        <tr>
          <td><code>url</code></td>
          <td>String</td>
          <td>No default</td>
          <td style="width: 400px">
            The location this search result links to online; this value
            eventually becomes the <code>href</code> of the search result link.
          </td>
        </tr>

        <tr>
          <td><code>title</code></td>
          <td>String</td>
          <td>No default</td>
          <td>
            The document title. Used mainly for display purposes, but search
            queries with words in the title are given a boost.
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
          <td style="width: 400px">
            When false, Stork will output a small, binary-encoded index. When
            true, Stork will output a pretty-printed JSON representation of the
            index. This option should only be used for debugging.
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
  </section>
</template>

<script>
import note from '~/components/note.vue'
import codeblock from '~/components/codeblock.js'
import basicconfig from '~/assets/code/basicconfig.toml.js'
import advancedconfig from '~/assets/code/advancedconfig.toml.js'

export default {
  components: {
    note,
    codeblock
  },
  data() {
    return {
      basicconfig,
      advancedconfig
    }
  }
}
</script>

<style></style>
