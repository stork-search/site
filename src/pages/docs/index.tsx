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
    <li><Link to="/docs/install">Installation</Link></li>
    <li><Link to="/docs/build">Building an index</Link></li>
    <li><Link to="/docs/interface">Embedding the interface on your web page</Link></li>
    </ul>
    <h2>Guides (Coming soon!)</h2>
    <ul>
    <li>Indexing and creating links from SRT subtitle files</li>
    <li>Indexing content in different languages</li>
    </ul>
    <h2>References</h2>
    <ul>
    <li><Link to="/docs/config-ref">Configuration File Reference</Link></li>
    <li>Javascript API Configuration Reference</li>
    </ul>
    </div>

  </DocsLayout>
)

export default Docs
