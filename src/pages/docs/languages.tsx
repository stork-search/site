import React from 'react'
import { PageProps, Link } from 'gatsby'

import DocsLayout from '../../components/docslayout'
import DocsNote from '../../components/docsnote'
import SEO from '../../components/seo'

import Languages from '../../components/content/docs/languages'

const Docs = (props: PageProps) => (
  <DocsLayout title="Indexing Non-English Content">
    <SEO title="Indexing Non-English Content" />
    <Languages />
  </DocsLayout>
)

export default Docs
