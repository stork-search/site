import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { FullWidth, grayBackground, Column, VerticalSpacer } from '../utils'
import { MetaText } from '../text'

const Demo = () => (
  <FullWidth background={grayBackground}>
    {/* // <Helmet>
    //   <link rel="stylesheet" href="https://files.stork-search.net/basic.css" />
    //   <link rel="stylesheet" href="/basic-additions.css" />
    //   <script src="https://files.stork-search.net/stork.js?2020-12-17"></script>
    //   <script src="/stork-load.js"></script>
    // </Helmet> */}
    <MetaText>
      Search the{' '}
      <a href="https://www.youtube.com/watch?v=DPgE7PNzXag">
        Federalist Papers
      </a>
      *:
    </MetaText>
    <div className="stork-wrapper" style={{ zIndex: 10 }}>
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
    <p style={{ fontSize: '0.8em' }}>*Well, just the first twenty.</p>
  </FullWidth>
)

export default Demo
