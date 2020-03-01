<template>
  <section>
    <modal v-if="modalOpen" v-bind:onClose="modalClosed">
      <p>Default List Item Template String:</p>
      <codeblock v-bind:asset="listItemTemplate" lang="html" />
    </modal>

    <p>To begin, load the Stork JS bundle from the Stork CDN:</p>

    <codeblock v-bind:asset="scripttag" lang="html" class-list="normal-width" />

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

    <pre><code class="lang-html">&lt;input data-stork="foo" /&gt;
&lt;div data-stork="foo-results"&gt;&lt;/div&gt;</code></pre>

    <p>
      The <code>register()</code> function takes two mandatory arguments: the
      index name (foo in the example above), and the URL at which the generated
      index can be found. When the <code>register()</code> method is called, the
      Stork library will download the index from that URL and attach it to the
      correct HTML elements.
    </p>

    <pre><code class="lang-html">&lt;script>stork.register("foo", "https://your-url.com/index-file", {});&lt;/script&gt;</code></pre>

    <p>
      There is a third, optional argument the <code>register()</code> function
      takes: an options object. This lets you configure some of the display and
      behavior of that Stork index. The available options are as follows:
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
            The
            <a href="https://handlebarsjs.com/">Handlebars template</a> for the
            search results file listing.
          </td>
        </tr>
        <tr>
          <td><code>printIndexInfo</code></td>
          <td>Boolean</td>
          <td>false</td>
          <td style="width: 350px">
            If this is set to true, Stork will print information about the
            search index to the console when it has successfully loaded.
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import modal from '~/components/modal.vue'
import codeblock from '~/components/codeblock.js'
import listItemTemplate from '~/assets/code/listItemTemplate.txt.js'
import scripttag from '~/assets/code/script-tag.html.js'

export default {
  components: { modal, codeblock },
  data() {
    return {
      modalOpen: false,
      listItemTemplate,
      scripttag
    }
  },
  methods: {
    modalClosed() {
      this.modalOpen = false
    }
  }
}
</script>

<style></style>
