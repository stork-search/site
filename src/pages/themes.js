import styled from 'styled-components'
import Head from 'next/head'

import Stork from '../components/stork'
import { Column } from '../components/utils'
import { PageTitle } from '../components/text'
import Codeblock from '../components/docs/codeblock'
import { useEffect } from 'react'

const DemoWrapper = styled.div`
  background-color: ${(props) => props.background};
  padding: 3em 3em 16em;
  margin: 0 -3em;
  border: 1px solid hsla(0, 0%, 0%, 0.1);
`

export const getStaticProps = async (context) => {
  return {
    props: { pageTitle: "Themes" },
  }
}

const Themes = (props) => {
  return (
    <Column>
      <PageTitle>Themes</PageTitle>

      <Head>
        <link rel="stylesheet" href="https://files.stork-search.net/dark.css" />
        <style>
          {`
      .stork-results {
        max-height: 10rem;
        }
      `}
        </style>
      </Head>

      <p>
        If you want to customize Stork to fit in seamlessly with your site, you
        can write your own CSS to style Stork's generated HTML. If that sounds
        like too much work, you can use one of the themes here.
      </p>

      <p>
        To use a Stork theme, include the specified CSS file somewhere in your{' '}
        <code>{`<head>`}</code> tag.
      </p>

      <h2>Basic</h2>

      <Codeblock filename="" lang="html">
        {`<link rel="stylesheet" href="https://files.stork-search.net/basic.css" />`}
      </Codeblock>

      <DemoWrapper background="#fff">
        <Stork
          loadedIndexes={props.loadedIndexes}
          addLoadedIndex={props.addLoadedIndex}
          name="federalist"
          placeholder="liberty"
          wrapperClassnames={['stork-wrapper-basic']}
          inputStyles={{ fontSize: '1.3em' }}
        />
      </DemoWrapper>

      <h2>Dark</h2>

      <Codeblock filename="" lang="html">
        {`<link rel="stylesheet" href="https://files.stork-search.net/dark.css" />`}
      </Codeblock>

      <DemoWrapper background="#222">
        <Stork
          loadedIndexes={props.loadedIndexes}
          addLoadedIndex={props.addLoadedIndex}
          name="federalist-2"
          placeholder="liberty"
          wrapperClassnames={['stork-wrapper-dark']}
          inputStyles={{ fontSize: '1.3em' }}
        />
      </DemoWrapper>

      <div style={{ height: '12rem' }}></div>
    </Column>
  )
}

export default Themes
