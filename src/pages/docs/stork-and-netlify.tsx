import React from 'react'
import { PageProps, Link } from 'gatsby'

import DocsLayout from '../../components/docslayout'
import DocsNote from '../../components/docsnote'
import SEO from '../../components/seo'

import Netlify from '../../components/content/docs/netlify'

const Docs = (props: PageProps) => (
  <DocsLayout title="Using Stork with Netlify">
    <SEO title="Stork and Netlify" />
    <Netlify />
  </DocsLayout>
)

export default Docs
