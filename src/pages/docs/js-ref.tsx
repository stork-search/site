// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link } from 'gatsby'

import DocsLayout from '../../components/docslayout'
import SEO from '../../components/seo'

const Docs = (props: PageProps) => (
  <DocsLayout title="Javascript API Reference">
    <SEO title="JS API Reference" />
    <div>
      <p>
        Just getting started?{' '}
        <Link to="/docs/interface">
          Learn how to embed the search interface on your site.
        </Link>
      </p>
      <p>
        The <code>stork</code> object exposed by the Stork Javascript library
        has one method: <code>stork.register()</code>. This method takes three
        parameters, though only the first two are required:
      </p>
      <pre>
        <code>stork.register(name, url, options)</code>
      </pre>
      <ul>
        <li>
          The <strong>name</strong> parameter is a string that defines which
          elements in your HTML the Stork library should hook into.
        </li>
        <li>
          The <strong>url</strong> parameter is a string that contains the URL
          of your index file.
        </li>
        <li>
          The <strong>options</strong> parameter is an optional object whose
          available configuration keys are defined below. None of the keys are
          required.
        </li>
      </ul>
    </div>

    <h3>Registration Options</h3>
    <div className="popout">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Type</th>
            <th>Default</th>
            <th style={{ width: '400px' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>showProgress</code>
            </td>
            <td>Boolean</td>
            <td>
              <code>true</code>
            </td>
            <td>
              When true, Stork will display a progress bar in the input field as
              the index is loading. When false, that progress bar will not be
              rendered.
            </td>
          </tr>

          <tr>
            <td>
              <code>printIndexInfo</code>
            </td>
            <td>Boolean</td>
            <td>
              <code>false</code>
            </td>
            <td>
              If this is set to true, Stork will print information about the
              search index to the console when it has successfully loaded.
            </td>
          </tr>

          <tr>
            <td>
              <code>showScores</code>
            </td>
            <td>Boolean</td>
            <td>
              <code>false</code>
            </td>
            <td>
              If this is set to true, Stork will display the scores it computes
              for each result and excerpt, used for result ordering.
            </td>
          </tr>

          <tr>
            <td>
              <code>onQueryUpdate</code>
            </td>
            <td>Function</td>
            <td>
              <code>undefined</code>
            </td>
            <td>
              A callback function that will be called every time the search
              query updates and new results are displayed. This function is
              called with two arguments: the string typed into the search field,
              and an array of <strong>Result</strong> objects.
            </td>
          </tr>

          <tr>
            <td>
              <code>onResultSelected</code>
            </td>
            <td>Function</td>
            <td>
              <code>undefined</code>
            </td>
            <td>
              A callback function that will be called every time the search
              query updates and new results are displayed.
              <br />
              This function is called with two arguments: the string typed into
              the search field, and the <strong>Result</strong> object the user
              selected. If you return a Promise from this function, Stork will{' '}
              <code>await</code> that promise before changing the window
              location.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>The Result Object</h3>
    <div className="popout">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Type</th>
            <th style={{ width: '450px' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>entry</code>
            </td>
            <td>An <strong>Entry</strong> object</td>
            <td>
              The file represented by the result.
            </td>
          </tr>

          <tr>
            <td>
              <code>excerpts</code>
            </td>
            <td>Array of <strong>Excerpt</strong> objects</td>
            <td>
              Each excerpt visible to the user in the search interface.
            </td>
          </tr>

          <tr>
            <td>
              <code>score</code>
            </td>
            <td>Number</td>
            <td>
              The "relevance" score Stork computed for the given entry. Used for result ordering for a given query.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>The Entry Object</h3>
    <div className="popout">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Type</th>
            <th style={{ width: '450px' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>title</code>
            </td>
            <td>String</td>
            <td>
              The title of the document
            </td>
          </tr>

          <tr>
            <td>
              <code>url</code>
            </td>
            <td>String</td>
            <td>
              The URL to where the search result links
            </td>
          </tr>

          <tr>
            <td>
              <code>fields</code>
            </td>
            <td>Object</td>
            <td>
              A set of key-value pairs passed through from the file object in the <Link to="/docs/config-ref">Configuration File</Link>. Can be used to pass arbitrary string-based metadata from the index at build time to the JS environment at runtime.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>The Excerpt Object</h3>
    <div className="popout">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Type</th>
            <th style={{ width: '450px' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>text</code>
            </td>
            <td>String</td>
            <td>
              The excerpt that contains the given search query. Usually displayed in a list.
            </td>
          </tr>

          <tr>
            <td>
              <code>score</code>
            </td>
            <td>Number</td>
            <td>
            The "relevance" score Stork computed for the given entry. Used for excerpt ordering within all excerpts in a given result.
            </td>
          </tr>

          <tr>
            <td>
              <code>fields</code>
            </td>
            <td>Object</td>
            <td>
              A set of key-value pairs passed through from the file object in the <Link to="/docs/config-ref">Configuration File</Link>. Can be used to pass arbitrary string-based metadata from the index at build time to the JS environment at runtime.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DocsLayout>
)

export default Docs
