// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link } from 'gatsby'
import { Helmet } from 'react-helmet'


import DocsLayout from '../../components/docslayout'
import SEO from '../../components/seo'

import SRTContent from '../../components/content/docs/srt'

const SRT = (props: PageProps) => (
  <DocsLayout title="Working with Subtitle Files">
    <SEO title="Working with Subtitle Files" />

    <Helmet>
      <link rel="stylesheet" href="https://files.stork-search.net/basic.css" />
      <link rel="stylesheet" href="/basic-additions.css" />
      <script src="https://files.stork-search.net/stork.js?2020-12-17"></script>
      <script src="/stork-load.js"></script>
    </Helmet>

    <SRTContent />
  </DocsLayout>
)

export default SRT
