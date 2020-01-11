<template>
  <main>
    <indexintro />
    <demo />
    <section>
      <p>
        Stork is two things. First, it's a indexer: it turns your
        loosely-structured content and builds a search index from that content.
        Second, it's a Javascript + WebAssembly frontend for that index; Stork's
        Javascript library will download the index and use it to display the
        optimal search results immediately to your user, as they type. The
        precomputed index and WebAssembly frontend module make the entire Stork
        engine very good, and very fast.
      </p>
    </section>

    <stats />

    <section>
      <h1>Getting Started</h1>
      <p>
        The demo above uses some custom CSS, but can generally be recreated with
        the following HTML:
      </p>

      <codeblock v-bind:asset="demo1" lang="html" filename="index.html" />

      <p>
        Stork is a fully hosted library: your script tag should point to the
        full url:
        <code>https://files.stork-search.net/stork.js</code>.
      </p>

      <p>
        The hosted script registers the global variable
        <code>stork</code>, which can cause conflicts if you're trying to use
        that variable name for something else.
      </p>

      <h2>Step 1: Include the HTML</h2>

      <p>
        Stork hooks into existing HTML that you include on your page. Each Stork
        instance has to have an
        <strong>input</strong> and an <strong>output</strong>; those two
        elements should be placed in a wrapper, though the wrapper is optional.
      </p>

      <p>
        The input must be an <code>&lt;input&gt;</code> element, and must have
        the <code>data-stork="federalist"</code> attribute, where
        <code>federalist</code> is the name with which you register that search
        instance. (This way, you can have multiple, independent search boxes on
        a page, all pointing to different instances.) It doesn't have to be
        <code>federalist</code> -- you can change it to whatever you want.
      </p>

      <p>
        The output should be an empty
        <code>&lt;div&gt;</code> tag with the attribute
        <code>data-stork="federalist-output"</code>. Again, here, you can change
        <code>federalist</code> to whatever you want.
      </p>

      <p>
        The classes in the example above (<code>stork-wrapper</code>,
        <code>stork-input</code>, and <code>stork-output</code>) are for the
        theme's CSS file. Most Stork themes assume the format above; the theme's
        documentation will tell you if it requires something different. You can
        also design your own theme, at which point the styling and class names
        are up to you.
      </p>

      <h2>Step 2: Include the Javascript</h2>

      <p>
        You need to include
        <code>stork.js</code> by embedding the following script in your HTML,
        right above the closing <code>&lt;/body&gt;</code> tag:
      </p>

      <codeblock v-bind:asset="scripttag" lang="html" />

      <p>
        This will load the Stork WebAssembly blob and create the Stork object,
        which will allow for registering and configuring indices.
      </p>

      <p>After this script tag, you should register at least one index:</p>

      <pre><code class="lang-js">stork.register("federalist", "http://files.stork-search.net/federalist.st");</code></pre>

      <p>
        This registers the pregenerated index stored at
        <code>http://files.stork-search.net/federalist.st</code> under the name
        <code>federalist</code>. The <code>register</code> method can also
        accept a configuration object as a third parameter; the different
        configuration options are explained later in the docs.
      </p>

      <h1>Generating an Index</h1>

      <p>
        You probably don't want to add an interface to your own website that
        lets you search through the Federalist papers. Here's how to make your
        search bar yours.
      </p>

      <p>
        A search index is built from files on your computer, and can be created
        entirely asynchronously from the search operation istelf. When creating
        a search index, you create a configuration file that defines a list of
        documents on disk and includes some metadata about those documents. When
        you run the Stork command line application, Stork will build its search
        index based on the contents of those files and the specified metadata.
      </p>
      <p>
        To begin, you need a configuration file that describes, among other
        things, that list of files. Configuration files are formatted as
        <a href="https://github.com/toml-lang/toml">TOML</a> files.
      </p>

      <codeblock v-bind:asset="config" lang="toml" filename="config.toml" />

      <p>
        This TOML file describes the base directory of all your documents, then
        lists out each document along with the web URL at which that document
        will be found, along with that document's title. The title is used for
        display purposes, the url is the href of the search result listing, and
        the path is the document's location on your filesystem.
      </p>

      <p>To build an index from a TOML configuration file, run:</p>

      <pre><code class="lang-bash">$ stork --build federalist.toml</code></pre>

      <p>
        This will create a new file at <code>federalist.st</code>, as specified
        by the <code>output.filename</code> value in the configuration file.
      </p>

      <p>
        This file is your search index, and contains the displayed results for
        the query your user inputs. The file should be uploaded to a public
        place, and its url should be passed into the
        <code>stork.register()</code> function.
      </p>

      <p>
        You might want to test your generated index from the command line. You
        can use the same command line tool used to build the index to search
        through a given index:
      </p>

      <pre><code class="lang-bash">$ stork --search federalist.st liberty</code></pre>

      <p>
        which will search the index at
        <code>federalist.st</code> for all entries with the word
        <code>liberty</code> in them. To search for a multi-word query, put the
        query argument in quotes.
      </p>
    </section>
    <docslink />
  </main>
</template>

<script>
import indexintro from '~/components/indexintro.vue'
import stats from '~/components/stats.vue'
import demo from '~/components/demo.vue'
import docslink from '~/components/docslink.vue'
import codeblock from '~/components/codeblock.js'

import demo1 from '~/assets/code/demo-1.html.js'
import scripttag from '~/assets/code/script-tag.html.js'
import config from '~/assets/code/config.toml.js'

export default {
  components: { indexintro, stats, demo, docslink, codeblock },
  data() {
    return {
      demo1,
      scripttag,
      config
    }
  },
  head: {
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/prismjs@1.17.1/prism.min.js' }
    ],
    link: [{ rel: 'stylesheet', href: '/stork-prism.css' }]
  }
}
</script>
