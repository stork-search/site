import styled from 'styled-components'
import Head from 'next/head'

import Stork from '../components/stork'
import { Column } from '../components/utils'
import { PageTitle } from '../components/text'
import CodeBlock from '../components/codeblock'
import { useEffect } from 'react'
import dedent from 'dedent-js'

const DemoWrapper = styled.div`
  background-color: ${(props) => props.background};
  padding: 3em 3em 16em;
  margin: 0 -3em 8em;
  border: 1px solid hsla(0, 0%, 0%, 0.1);
`

export const getStaticProps = async (context) => {
  return {
    props: { pageTitle: 'Themes' },
  }
}

const Demo = ({ theme, placeOnDark, storkProps, children }) => {
  const themeClassNameSuffix = theme == 'basic' ? '' : `-${theme}`
  const registrationName = `federalist-${theme}`

  const titleCase = (str) =>
    str
      .split('-')
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(' ')

  return (
    <>
      <h2>{titleCase(theme)}</h2>
      {children}
      <CodeBlock
        language="html"
        source={dedent`<link rel="stylesheet" href="https://files.stork-search.net/releases/v1.4.1/${theme}.css" />
        <div class="stork-wrapper${themeClassNameSuffix}">
          <input data-stork="${registrationName}" class="stork-input" />
          <div data-stork="${registrationName}-output" class="stork-output"></div>
        </div>`}
      />

      <DemoWrapper background={placeOnDark ? '#222' : '#fff'}>
        <Stork
          loadedIndexes={storkProps.loadedIndexes}
          addLoadedIndex={storkProps.addLoadedIndex}
          name={registrationName}
          placeholder="liberty"
          wrapperClassnames={[`stork-wrapper${themeClassNameSuffix}`]}
        />
        {/* 
        TODO: Fix Stork so that it re-renders the progress bar on reattachment.  
        <button
          onClick={() => {
            if (window && window.stork) {
              window.stork.attach(registrationName)
          }}
        >
          Reload
        </button> */}
      </DemoWrapper>
    </>
  )
}

const Themes = (props) => {
  const storkProps = {
    loadedIndexes: props.loadedIndexes,
    addLoadedIndex: props.addLoadedIndex,
  }

  return (
    <Column>
      <PageTitle>Themes</PageTitle>
      <Head>
        {/* basic.css is included by _app.js */}
        <link
          rel="stylesheet"
          href="https://files.stork-search.net/releases/v1.4.1/dark.css"
        />
        <link
          rel="stylesheet"
          href="https://files.stork-search.net/releases/v1.4.1/flat.css"
        />
        <link
          rel="stylesheet"
          href="https://files.stork-search.net/releases/v1.4.1/edible.css"
        />
        <link
          rel="stylesheet"
          href="https://files.stork-search.net/releases/v1.4.1/edible-dark.css"
        />
        <style>{`.stork-results { max-height: 10rem; }`}</style>
      </Head>
      <p>
        Stork is completely customizable: if you want to write your own CSS to
        seamlessly integrate the search interface within your site, you can do
        so. Stork also comes with several "batteries-included" themes, which you
        can use freely by adding a single CSS file.
      </p>
      <p>
        To use a first-party theme, include the specified CSS file somewhere in
        your <code>{`<head>`}</code> tag, then wrap the input and output
        elements with a div of the specified class.
      </p>

      <Demo theme="basic" storkProps={storkProps} />

      <Demo theme="dark" placeOnDark storkProps={storkProps} />

      <Demo theme="flat" storkProps={storkProps} />

      <Demo theme="edible" storkProps={storkProps}>
        <p>
          Authored by <a href="https://easrng.net">easrng</a>.
        </p>
      </Demo>

      <Demo theme="edible-dark" placeOnDark storkProps={storkProps}>
        <p>
          Authored by <a href="https://easrng.net">easrng</a>.
        </p>
      </Demo>

      <div style={{ height: '12rem' }}></div>
    </Column>
  )
}

export default Themes
