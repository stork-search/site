// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link } from 'gatsby'

import DocsLayout from '../../components/docslayout'
import DocsNote from '../../components/docsnote'
import SEO from '../../components/seo'

import Install from '../../components/content/docs/install'

const Docs = (props: PageProps) => (
  <DocsLayout title="Installation">
    <SEO title="Install" />
    <Install />
  </DocsLayout>
)

export default Docs
