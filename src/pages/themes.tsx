// Gatsby supports TypeScript natively!
import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import PageLayout from '../components/pagelayout'
import { PageTitle } from '../components/utils'
import SEO from '../components/seo'

import Codeblock from '../components/codeblock'

const DemoWrapper = styled.div`
background-color:  ${props => props.background};
padding: 3em 3em 16em;
margin: 0 -3em;
border: 1px solid hsla(0, 0%, 0%, 0.1);
`

const Changelog = ({ data }) => (
  <PageLayout>
    <SEO title="Themes" />
    <PageTitle>Themes</PageTitle>

    <Helmet>
      <link rel="stylesheet" href="https://files.stork-search.net/basic.css" />
      <link rel="stylesheet" href="/basic-additions.css" />
      <link rel="stylesheet" href="https://files.stork-search.net/dark.css" />
      <script src="https://files.stork-search.net/stork.js?2020-12-17"></script>
      <script src="/stork-load.js"></script>
      <style>{`
      .stork-results {
        max-height: 10rem;
        }
      `}
      </style>
    </Helmet>

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
      <div className="stork-wrapper-basic" style={{ zIndex: 10 }}>
        <input
          data-stork="federalist"
          className="stork-input"
          placeholder="liberty"
          style={{ fontSize: '1.3em', width: '100%', padding: '0.5em 0.8em' }}
        />
        <div data-stork="federalist-output" className="stork-output">
          {' '}
        </div>
      </div>
      </DemoWrapper>

    <h2>Dark</h2>

    <Codeblock filename="" lang="html">
      {`<link rel="stylesheet" href="https://files.stork-search.net/dark.css" />`}
    </Codeblock>

    <DemoWrapper background="#222">
      <div className="stork-wrapper-dark" style={{ zIndex: 10 }}>
        <input
          data-stork="federalist-2"
          className="stork-input"
          placeholder="liberty"
          style={{ fontSize: '1.3em', width: '100%', padding: '0.5em 0.8em' }}
        />
        <div data-stork="federalist-2-output" className="stork-output">
          {' '}
        </div>
      </div>
    </DemoWrapper>

    <div style={{height: "12rem"}}></div>
  </PageLayout>
)

export default Changelog
