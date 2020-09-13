// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link } from 'gatsby'

import DocsLayout from '../../components/docslayout'
import SEO from '../../components/seo'
import Codeblock from '../../components/codeblock'
import InterfaceContent from '../../components/content/docs/interface'

const Docs = (props: PageProps) => (
  <DocsLayout title="Embedding the Interface">
    <SEO title="Interface" />
    <InterfaceContent />
  </DocsLayout>
)

export default Docs
