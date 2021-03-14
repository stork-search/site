import { useState, useEffect } from 'react'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import Link from 'next/link'
import '../css/layout.css'
import '../css/prism.css'
import '../css/stork-basic-additions.css'

import MarketingTemplate, {
  Wide as MarketingWide,
} from '../components/templates/marketing'
import DocsTemplate, { Wide as DocsWide } from '../components/templates/docs'
import { Column } from '../components/utils'
import { PageTitle } from '../components/text'
import DocsNote from '../components/docs/docsnote'
import CodeBlock from '../components/docs/codeblock'
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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔎</text></svg>"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://files.stork-search.net/basic.css"
        />
        <script src="https://files.stork-search.net/stork.js"></script>
        <script>stork.initialize()</script>
      </Head>
      <MDXProvider
        components={{
          // wrapper: DebugWrapper,
          Codeblock: CodeBlock,
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
