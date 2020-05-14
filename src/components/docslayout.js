/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
// import PropTypes from "prop-types"

import Layout from './layout'
import { pageWidth, PageTitle, Wrapper } from './utils'

const TOC = styled.ul`
  text-align: right;
  list-style-type: none;
  border-right: 1px solid gray;
  margin: 0;
  margin-right: 1em;
  padding: 0;
  padding-right: 1em;

  @media (max-width: 62.5em) {
    text-align: left;
    border: none;
    margin: 0;
    margin-bottom: 1em;
    padding: 0;
    display: flex;

    & > * {
      margin-right: 0.5em;
    }
  }
`

const StyledLink = styled(Link)`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0.3em 0.6em;
  margin-bottom: 0.4em;
  text-decoration: none;
  line-height: 2.4;
  color: currentColor !important;
  font-weight: normal !important;

  &.active {
    background: hsla(103, 24%, 77%, 1);
  }
`

const DocsLink = ({ to, children }) => {
  return (
    <li>
      <StyledLink to={to} activeClassName="active">
        {children}
      </StyledLink>
    </li>
  )
}

const DocsNav = () => (
  <TOC>
    <DocsLink to="/docs">Installation</DocsLink>
    <DocsLink to="/docs/build">Building an Index</DocsLink>
    {/* <DocsLink to="/docs/srt">SRT Subtitle Files</DocsLink> */}
    <DocsLink to="/docs/config-ref">Configuration Reference</DocsLink>
    <DocsLink to="/docs/interface">Embedding the Interface</DocsLink>
  </TOC>
)

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 12em 4em ${pageWidth} 4em 12em 1fr;
  grid-auto-flow: column;
  grid-auto-rows: auto;

  & > * {
    grid-column: 4 / span 1;
  }

  & > .popout {
    grid-column: 3 / span 3;
  }

  @media (max-width: 62.5em) {
    display: block;
    padding: 0 1em;
  }
`

const DocsLayout = ({ title, children }) => {
  return (
    <Layout>
      <Wrapper>
        <GridContainer>
          <PageTitle>{title}</PageTitle>
          <div
            style={{
              gridColumn: `2 / span 2`,
              gridRow: `2 / span 2`,
            }}
          >
            <DocsNav />
          </div>
          {children}
        </GridContainer>
      </Wrapper>
    </Layout>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default DocsLayout
