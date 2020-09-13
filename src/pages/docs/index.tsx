// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link } from 'gatsby'

import DocsLayout from '../../components/docslayout'
import DocsNote from '../../components/docsnote'
import SEO from '../../components/seo'

const Docs = (props: PageProps) => (
  <DocsLayout title="Welcome to Stork.">
    <SEO title="Welcome to Stork" />
    <div>
      <p>Get started or learn more using the navigation links:</p>
      <h2>Getting started</h2>
      <ul>
        <li>
          <Link to="/docs/install">Installation</Link>
        </li>
        <li>
          <Link to="/docs/build">Building an index</Link>
        </li>
        <li>
          <Link to="/docs/interface">
            Embedding the interface on your web page
          </Link>
        </li>
      </ul>
      <h2>Guides</h2>
      <ul>
        <li>
          <Link to="/docs/stork-and-netlify">
            Building an index automatically with Netlify
          </Link>
        </li>
        <li>
          <Link to="/docs/srt">
            Indexing and creating links from SRT subtitle files
          </Link>
        </li>
        <li>
          <Link to="/docs/languages">
            Indexing content in different languages
          </Link>
        </li>
      </ul>
      <h2>References</h2>
      <ul>
        <li>
          <Link to="/docs/config-ref">Configuration File Reference</Link>
        </li>
        <li>
          <Link to="/docs/js-ref">Javascript API Reference</Link>
        </li>
      </ul>
    </div>
  </DocsLayout>
)

export default Docs
