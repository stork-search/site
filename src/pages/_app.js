import { useContext, useState } from 'react'
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

  return (
    <ThemeAwareWrapper nameplateHidden={pageProps.nameplateHidden}>
      <Head>
        <link
          rel="stylesheet"
          href="https://files.stork-search.net/basic.css"
        />
        <script src="/stork-1.1.0-rc1.js"></script>
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
