import { useState, useEffect } from 'react'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import '../css/layout.css'
import '../css/prism.css'
import '../css/stork-basic-additions.css'

import React from 'react'

import MarketingTemplate, {
  Wide as MarketingWide,
} from '../components/templates/marketing'
import DocsTemplate, { Wide as DocsWide } from '../components/templates/docs'
import { Column } from '../components/utils'
import { PageTitle } from '../components/text'
import DocsNote from '../components/docs/docsnote'
import CodeBlock from '../components/codeblock'
import { init } from '../matomo.ts'

const DebugWrappedComponent = ({ debug, children, mdxType }) => {
  return (
    <div style={{ outline: '1px solid red' }}>
      <div
        style={{
          position: 'absolute',
          fontSize: '0.7rem',
          right: 0,
          top: 0,
          background: 'red',
          color: 'white',
          zIndex: 10,
          padding: '0.5em 1em',
        }}
      >
        {mdxType}
      </div>
      <>
        {React.Children.map(children, (child) => {
          return child
        })}
      </>
    </div>
  )
}

const DebugWrapper = ({ children, ...props }) => {
  return (
    <>
      {React.Children.map(children, (child) => (
        <DebugWrappedComponent mdxType={child.props.mdxType}>
          {child}
        </DebugWrappedComponent>
      ))}
    </>
  )
}

const templates = {
  default: {
    wrapper: MarketingTemplate,
    wide: MarketingWide,
  },
  docs: {
    wrapper: DocsTemplate,
    wide: DocsWide,
  },
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const template = pageProps.template
    ? templates[pageProps.template]
    : templates['default']
  const ThemeAwareWrapper = template.wrapper
  const ThemeAwareWide = template.wide

  const [loadedIndexes, setLoadedIndexes] = useState([])
  const addLoadedIndex = (name) =>
    setLoadedIndexes(loadedIndexes.concat([name]))

  pageProps = {
    loadedIndexes,
    addLoadedIndex,
    ...pageProps,
  }

  const matomo = {
    url: 'https://analytics.jameslittle.me',
    siteId: 5,
  }

  useEffect(() => {
    init(matomo)
  })

  return (
    <ThemeAwareWrapper nameplateHidden={pageProps.nameplateHidden}>
      <Head>
        <title>
          {pageProps.pageTitle ? `${pageProps.pageTitle} • ` : ''}Stork Search -
          Impossibly Fast Web Search
        </title>

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta
          property="og:title"
          content={`${
            pageProps.pageTitle ? `${pageProps.pageTitle} • ` : ''
          }Stork Search`}
        />
        <meta
          property="og:description"
          content="Impossibly fast web search, built for static sites."
        />
        <meta property="og:image" content="/og-banner.png" />
        <meta
          property="og:url"
          content={`https://stork-search.net${router.pathname}`}
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:site_name" content="Stork Search" />
        <meta
          name="twitter:image:alt"
          content="The Stork Logo, a happy bird holding a magnifying glass"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://files.stork-search.net/releases/v1.4.0/basic.css"
        />
        <script src="https://files.stork-search.net/releases/v1.3.0/stork.js"></script>
        <script>stork.initialize()</script>
      </Head>
      <MDXProvider
        components={{
          // wrapper: DebugWrapper,
          CodeBlock: CodeBlock,
          DocsNote: DocsNote,
          a: Link,
          Wide: ThemeAwareWide,
          p: ({ children }) => (
            <Column>
              <p>{children}</p>
            </Column>
          ),
          h1: ({ children }) => (
            <Column>
              <PageTitle>{children}</PageTitle>
            </Column>
          ),
          h2: ({ children }) => (
            <Column>
              <h2>{children}</h2>
            </Column>
          ),
          h3: ({ children }) => (
            <Column>
              <h3>{children}</h3>
            </Column>
          ),
          pre: ({ children }) => (
            <Column>
              <pre>{children}</pre>
            </Column>
          ),
          ul: ({ children }) => (
            <Column>
              <ul>{children}</ul>
            </Column>
          ),
          ol: ({ children }) => (
            <Column>
              <ol>{children}</ol>
            </Column>
          ),
        }}
      >
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeAwareWrapper>
  )
}

export default MyApp
