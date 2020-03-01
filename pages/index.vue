<template>
  <div>
    <indexintro />
    <demo />
    <section>
      <p>
        Stork is two things that work in tandem to put a beautiful, fast, and
        accurate search interface on your static site. First, it&#8217;s a
        program that indexes your content and writes that index to disk. Second,
        it&#8217;s a Javascript library that downloads that index, hooks into a
        search input, and displays optimal search results immediately to your
        user, as they type.
      </p>

      <p>
        Stork is built with Rust, and the Javascript library uses WebAssembly
        behind the scenes. It&#8217;s built with content creators in mind, in
        that it requires little-to-no code to get started and can be extended
        deeply. It&#8217;s perfect for JAMstack sites and personal blogs, but
        can be used wherever you need a search interface.
      </p>
    </section>

    <stats />
    <main>
      <section>
        <h1>Getting Started</h1>

        <p>
          To begin, let's first embed the Federalist Paper search box in the
          demo above in a web page. Once that's working, we'll generate a new
          index with custom content and feed that into the search box.
        </p>

        <h2>Step 1: Include the HTML</h2>

        <p>
          The demo above uses some custom CSS, but can generally be recreated
          with the following HTML:
        </p>

        <codeblock v-bind:asset="demo1" lang="html" filename="index.html" />

        <p>
          Putting that code in a new HTML page will get you a copy of the demo.
        </p>

        <note>
          Stork is a fully hosted library, and can't be downloaded from NPM yet.
          Your script tag should point to the full url (served behind a
          Cloudfront CDN):
          <code>https://files.stork-search.net/stork.js</code>. This also means
          that the hosted script registers the global variable
          <code>stork</code>, which can cause conflicts if you're trying to use
          that variable name for something else.
        </note>

        <p>
          Stork hooks into existing HTML that you include on your page. Each
          Stork instance has to have an
          <strong>input element</strong> and an <strong>output element</strong>,
          and generally Stork themes will ask you to put the input and output in
          a <strong>wrapper element</strong>.
        </p>

        <p>
          The input must be an
          <code>&lt;input data-stork="federalist"&gt;</code> element. The must
          be an empty
          <code>&lt;div data-stork="federalist-output"&gt;&lt;/div&gt;</code>
          element.
        </p>

        <p>
          Here, <code>federalist</code> is the name with which you register that
          search instance. (By registering a search instance under a certain
          name, you can have multiple, independent search boxes on a page, all
          pointing to different indices.) It doesn't have to be
          <code>federalist</code> -- you can change it to whatever you want.
        </p>

        <p></p>

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

        <p>
          After this script tag, you should register a search instance by
          associating a downloadable index to a name, which should match up with
          the <code>data-stork</code> elements elsewhere on the page.
        </p>

        <pre><code class="lang-js">stork.register("federalist", "http://files.stork-search.net/federalist.st");</code></pre>

        <p>
          Earlier, I generated a search index for the contents of the first
          twenty Federalist Papers and uploaded it to the above URL. Including
          the above code will download that index when your web page loads and
          hook it into the <code>federalist</code> input and output elements.
        </p>

        <p>
          After you include the boilerplate HTML and register the search index,
          your search field should have the same functionality as the one above,
          though it might be a bit uglier. You can include the
          <code>basic</code> theme CSS to make it slightly nicer. Put this
          before your <code>&lt;/head&gt;</code> tag, if you haven't already:
        </p>

        <pre><code class="lang-html">&lt;link rel="stylesheet" href="https://files.stork-search.net/basic.css" /&gt;</code></pre>

        <p>
          Play around with the search field you created. Try to type in multiple
          words. Search for a typo and see what happens. Once you get bored,
          keep reading: we'll generate a new index so you can search through
          your own content.
        </p>

        <h1>Generating an Index</h1>

        <p>
          You probably don't want to add an interface to your own website that
          lets you search through the Federalist papers. Here's how to make your
          search bar yours.
        </p>

        <p>
          A search index is built from files on your computer. When creating a
          search index, you create a <strong>configuration file</strong> that
          defines a list of documents on disk and includes some metadata about
          those documents. When you run the Stork command line application,
          Stork will build its search index based on the contents of those files
          and the specified metadata.
        </p>
        <p>
          To begin, you need a configuration file that describes, among other
          things, that list of files. Configuration files are formatted as
          <a href="https://github.com/toml-lang/toml">TOML</a> files.
        </p>

        <codeblock v-bind:asset="config" lang="toml" filename="config.toml" />

        <p>
          This TOML file describes the base directory of all your documents,
          then lists out:
        </p>

        <ul>
          <li>
            The path on disk where that file can be found, in relation to the
            base directory
          </li>
          <li>The URL to where that search result will link</li>
          <li>The title of the document</li>
        </ul>

        <p>
          To build an index from a TOML configuration file, first
          <a href="/docs#installation">install the Stork binary</a> (Homebrew
          instructions provided for MacOS, but you can also build from source if
          you want):
        </p>

        <pre><code class="lang-bash">$ brew install jameslittle230/stork-tap/stork</code></pre>

        <p>Then run the command with the <code>--build</code> flag:</p>

        <pre><code class="lang-bash">$ stork --build federalist.toml</code></pre>

        <p>
          This will create a new file at <code>federalist.st</code>, as
          specified by the <code>output.filename</code> value in the
          configuration file.
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

        <pre><code class="lang-bash">$ stork --search federalist.st "liberty"</code></pre>

        <p>
          which will search the index at
          <code>federalist.st</code> for all entries with the word
          <code>liberty</code> in them.
        </p>

        <p>
          Once the index is uploaded, you can change the URL in your
          Javascript's <code>stork.register()</code> call to point to your index
          instead of the Federalist Papers index. The search field will no
          longer search through the Federalist Papers, it will search through
          the content you indexed instead.
        </p>

        <p>
          Continue to the docs to learn about configuration and customization.
        </p>
      </section>
    </main>
    <docslink />
  </div>
</template>

<script>
import indexintro from '~/components/indexintro.vue'
import stats from '~/components/stats.vue'
import demo from '~/components/demo.vue'
import docslink from '~/components/docslink.vue'
import codeblock from '~/components/codeblock.js'
import note from '~/components/note.vue'

import demo1 from '~/assets/code/demo-1.html.js'
import scripttag from '~/assets/code/script-tag.html.js'
import config from '~/assets/code/config.toml.js'

export default {
  components: { indexintro, stats, demo, docslink, codeblock, note },
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
