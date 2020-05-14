// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import DocsLayout from "../../components/docslayout"
import SEO from "../../components/seo"

import BuildContents from "../../components/content/docs/build"

const Docs = (props: PageProps) => (
  <DocsLayout title="Building an Index">
    <BuildContents />
  </DocsLayout>
)

export default Docs
