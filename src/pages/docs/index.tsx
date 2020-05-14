// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import DocsLayout from "../../components/docslayout"
import DocsNote from "../../components/docsnote"

import Install from "../../components/content/docs/install"

const Docs = (props: PageProps) => (
  <DocsLayout title="Installation">
    <Install />
  </DocsLayout>
)

export default Docs
