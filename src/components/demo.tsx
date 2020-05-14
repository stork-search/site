import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { Wrapper, Column, Subtitle } from './utils'

const Demo = () => (
  <Wrapper background="hsla(0, 0%, 0%, 0.1)">
    <Helmet>
      <link rel="stylesheet" href="https://files.stork-search.net/basic.css" />
      <style>{`
        .stork-result a:link {
          font-weight: 400;
        }
      `}</style>
      <script src="https://files.stork-search.net/stork.js"></script>
      <script>{`
        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function load() {
          while(typeof stork === "undefined") {
            await sleep(10);
          }
          
          stork.register(
            'federalist',
            'https://files.stork-search.net/federalist.st'
          );
        }

        load();
      `}</script>
    </Helmet>
    <Column>
      <div>
        <Subtitle>
          Search the{' '}
          <a href="https://www.youtube.com/watch?v=DPgE7PNzXag">
            Federalist Papers
          </a>
          *:
        </Subtitle>
        <div className="stork-wrapper" style={{ zIndex: 10 }}>
          <input
            data-stork="federalist"
            className="stork-input"
            placeholder="liberty"
            style={{ fontSize: '1.3em', width: '100%', padding: '0.5em 0.8em' }}
          />
          <div data-stork="federalist-output" className="stork-output"></div>
        </div>
        <p style={{ fontSize: '0.8em' }}>*Well, just the first twenty.</p>
      </div>
    </Column>
  </Wrapper>
)

export default Demo
