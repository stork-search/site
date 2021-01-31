import React, { useContext } from 'react'
import { MDXProvider } from '@mdx-js/react'
import Link from 'next/link'
import styled from 'styled-components'
import './layout.css'
import './prism.css'

import MarketingTemplate, {
  Wide as MarketingWide,
  Block as MarketingBlock,
  FullWidth as MarketingFull,
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

  return (
    <ThemeAwareWrapper nameplateHidden={pageProps.nameplateHidden}>
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
    // </TemplateContext.provider>
  )
}

export default MyApp
