// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import DocsLayout from "../../components/docslayout"
import SEO from "../../components/seo"
import Codeblock from "../../components/codeblock"
import InterfaceContent from "../../components/content/docs/interface"
const Docs = (props: PageProps) => (
  <DocsLayout title="Embedding the Interface">
    <InterfaceContent />

    <div className="popout">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Type</th>
            <th>Default</th>
            <th style={{width: "400px"}}>Description</th>
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
        </tbody>
      </table>
    </div>
  </DocsLayout>
)

export default Docs
