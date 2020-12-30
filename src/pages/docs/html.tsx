// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link } from 'gatsby'
import { Helmet } from 'react-helmet'


import DocsLayout from '../../components/docslayout'
import SEO from '../../components/seo'

import HTMLContent from '../../components/content/docs/html'

const SRT = (props: PageProps) => (
  <DocsLayout title="Working with HTML and Markdown Files">
    <SEO title="Working with HTML and Markdown Files" />
    <HTMLContent />
  </DocsLayout>
)

export default SRT
