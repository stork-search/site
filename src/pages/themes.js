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
  margin: 0 -3em;
  border: 1px solid hsla(0, 0%, 0%, 0.1);
`

export const getStaticProps = async (context) => {
  return {
    props: { pageTitle: 'Themes' },
  }
}

const Themes = (props) => {
  return (
    <Column>
      <PageTitle>Themes</PageTitle>
      <Head>
        {/* basic.css is included by _app.js */}
        <link
          rel="stylesheet"
          href="https://files.stork-search.net/releases/v1.4.0/dark.css"
        />
        <link
          rel="stylesheet"
          href="https://files.stork-search.net/releases/v1.4.0/flat.css"
        />
        <link
          rel="stylesheet"
          href="https://files.stork-search.net/releases/v1.4.0/edible.css"
        />
        <link
          rel="stylesheet"
          href="https://files.stork-search.net/releases/v1.4.0/edible-dark.css"
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

      <h2>Basic</h2>
      <CodeBlock
        language="html"
        source={dedent`<link rel="stylesheet" href="https://files.stork-search.net/releases/v1.4.0/basic.css" />
        <div class="stork-wrapper">
          <input data-stork="federalist" class="stork-input" />
          <div data-stork="federalist-output" class="stork-output"></div>
        </div>`}
      />

      <DemoWrapper background="#fff">
        <Stork
          loadedIndexes={props.loadedIndexes}
          addLoadedIndex={props.addLoadedIndex}
          name="federalist"
          placeholder="liberty"
          wrapperClassnames={['stork-wrapper']}
        />
      </DemoWrapper>

      <h2>Dark</h2>
      <CodeBlock
        language="html"
        source={dedent`<link rel="stylesheet" href="https://files.stork-search.net/releases/v1.4.0/dark.css" />
        <div class="stork-wrapper-dark">
          <input data-stork="federalist" class="stork-input" />
          <div data-stork="federalist-output" class="stork-output"></div>
        </div>`}
      />
      <DemoWrapper background="#222">
        <Stork
          loadedIndexes={props.loadedIndexes}
          addLoadedIndex={props.addLoadedIndex}
          name="federalist-2"
          placeholder="liberty"
          wrapperClassnames={['stork-wrapper-dark']}
        />
      </DemoWrapper>
      <h2>Flat</h2>
      <CodeBlock
        language="html"
        source={dedent`<link rel="stylesheet" href="https://files.stork-search.net/releases/v1.4.0/flat.css" />
        <div class="stork-wrapper-flat">
          <input data-stork="federalist" class="stork-input" />
          <div data-stork="federalist-output" class="stork-output"></div>
        </div>`}
      />
      <DemoWrapper background="#fff">
        <Stork
          loadedIndexes={props.loadedIndexes}
          addLoadedIndex={props.addLoadedIndex}
          name="federalist-3"
          placeholder="liberty"
          wrapperClassnames={['stork-wrapper-flat']}
        />
      </DemoWrapper>
      <h2>Edible</h2>
      <p>
        Authored by <a href="https://easrng.net">easrng</a>
      </p>
      <CodeBlock
        language="html"
        source={dedent`<link rel="stylesheet" href="https://files.stork-search.net/releases/v1.4.0/edible.css" />
        <div class="stork-wrapper-edible">
          <input data-stork="federalist" class="stork-input" />
          <div data-stork="federalist-output" class="stork-output"></div>
        </div>`}
      />
      <DemoWrapper background="#fff">
        <Stork
          loadedIndexes={props.loadedIndexes}
          addLoadedIndex={props.addLoadedIndex}
          name="federalist-4"
          placeholder="liberty"
          wrapperClassnames={['stork-wrapper-edible']}
        />
      </DemoWrapper>
      <h2>Edible Dark</h2>
      <p>
        Authored by <a href="https://easrng.net">easrng</a>
      </p>
      <CodeBlock
        language="html"
        source={dedent`<link rel="stylesheet" href="https://files.stork-search.net/releases/v1.4.0/edible-dark.css" />
        <div class="stork-wrapper-edible-dark">
          <input data-stork="federalist" class="stork-input" />
          <div data-stork="federalist-output" class="stork-output"></div>
        </div>`}
      />
      <DemoWrapper background="#222">
        <Stork
          loadedIndexes={props.loadedIndexes}
          addLoadedIndex={props.addLoadedIndex}
          name="federalist-5"
          placeholder="liberty"
          wrapperClassnames={['stork-wrapper-edible-dark']}
        />
      </DemoWrapper>

      <div style={{ height: '12rem' }}></div>
    </Column>
  )
}

export default Themes
