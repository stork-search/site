<template>
  <main>
    <indexintro />
    <demo />
    <section>
      <p>
        Stork is two things. First, it's an indexer: it turns your
        loosely-structured content and builds a search index from that content.
        Second, it's a Javascript + WebAssembly frontend for that index; Stork
        will download the index, search through it, and display the best results
        immediately to your user, as they type. The precomputed index and
        WebAssembly frontend module make the entire Stork engine very good, and
        very fast.
      </p>
    </section>

    <stats />

    <section>
      <h1>Getting Started</h1>
      The demo above uses some custom CSS, but can generally be recreated with
      the following HTML (the
      <a href="#">demo page</a>
      shows this minimal example without any other surrounding code):
      <pre
        data-filename="index.html"
      ><code class="lang-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot; /&gt;
    &lt;title&gt;Federalist Search&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://files.stork-search.net/basic.css&quot; /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class=&quot;stork-wrapper&quot;&gt;
      &lt;input data-stork=&quot;federalist&quot; class=&quot;stork-input&quot; /&gt;
      &lt;div data-stork=&quot;federalist-output&quot; class=&quot;stork-output&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;script src=&quot;https://files.stork-search.net/stork.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
      stork.register(&quot;federalist&quot;, &quot;https://files.stork-search.net/federalist.st&quot;);
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>

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
        <code>data-stork="federalist-results"</code>. Again, here, you can
        change <code>federalist</code> to whatever you want. Stork will
        overwrite the contents of this element.
      </p>
      <p>
        The classes in the example above (
        <code>stork-input</code>, <code>stork-results</code>) are for the theme.
        Most Stork themes assume the format above; the theme's documentation
        will tell you if it requires something different. You can also design
        your own theme, at which point the styling and class names are up to
        you.
      </p>
      <h2>Step 2: Include the Javascript</h2>
      <p>
        You need to include
        <code>stork.js</code> by embedding the following script in your HTML,
        right above the closing <code>&lt;/body&gt;</code> tag:
      </p>

      <pre><code class="lang-html">&lt;script src=&quot;https://files.stork-search.net/stork.js&quot;&gt;&lt;/script&gt;</code></pre>

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
      <pre data-filename="stork-config.toml"><code class="lang-toml">[input]
base_directory = "test/federalist"
files = [
    {path = "federalist-1.txt", url = "/federalist-1/", title = "Introduction"},
    {path = "federalist-2.txt", url = "/federalist-2/", title = "Concerning Dangers from Foreign Force and Influence"},
    {path = "federalist-3.txt", url = "/federalist-3/", title = "Concerning Dangers from Foreign Force and Influence 2"},
    {path = "federalist-4.txt", url = "/federalist-4/", title = "Concerning Dangers from Foreign Force and Influence 3"},
    {path = "federalist-5.txt", url = "/federalist-5/", title = "Concerning Dangers from Foreign Force and Influence 4"},
    {path = "federalist-6.txt", url = "/federalist-6/", title = "Concerning Dangers from Dissensions Between the States"},
    {path = "federalist-7.txt", url = "/federalist-7/", title = "Concerning Dangers from Dissensions Between the States 2"},
    {path = "federalist-8.txt", url = "/federalist-8/", title = "The Consequences of Hostilities Between the States"},
    {path = "federalist-9.txt", url = "/federalist-9/", title = "The Union as a Safeguard Against Domestic Faction and Insurrection"},
    {path = "federalist-10.txt", url = "/federalist-10/", title = "The Union as a Safeguard Against Domestic Faction and Insurrection 2"}
]

[output]
filename = "federalist.st"</code></pre>
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
        This will create an index file at <code>federalist.st</code>; this index
        file should be uploaded to a public place and referenced in your page's
        Javascript when you register a search index. If you want to search
        through an index from the command line, you can use the same
        <code>stork</code> command line tool:
      </p>

      <pre><code class="lang-bash">$ stork --search federalist.st liberty</code></pre>

      <p>
        which will search the index at
        <code>federalist.st</code> for all entries with the word
        <code>liberty</code> in them.
      </p>
    </section>
    <script>
      stork.register(
        'federalist',
        'https://files.stork-search.net/federalist.st'
      )
    </script>
  </main>
</template>

<script>
import indexintro from '~/components/indexintro.vue'
import stats from '~/components/stats.vue'
import demo from '~/components/demo.vue'
export default {
  components: { indexintro, stats, demo },
  head: {
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/prismjs@1.17.1/prism.min.js' },
      { src: 'https://files.stork-search.net/stork.js' },
      {
        innerhtml: `stork.register('federalist', 'https://files.stork-search.net/federalist.st')`,
        type: 'text/javascript',
        body: true
      }
    ],
    link: [
      { rel: 'stylesheet', href: '/stork-prism.css' },
      { rel: 'stylesheet', href: 'https://files.stork-search.net/basic.css' }
    ]
  }
}
</script>
