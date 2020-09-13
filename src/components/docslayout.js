/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
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
  font-size: 0.9rem;

  @media (max-width: 62.5em) {
    text-align: left;
    border: none;
    margin: 0;
    margin-bottom: 1em;
    padding: 0;
    font-size: 1rem;
    position: absolute;
    background: white;
    z-index: 20;
    padding: 1em;
    border: 1px solid gray;
    border-radius: 3px;
    box-shadow: rgba(50, 50, 93, 0.44) 0px 10px 20px -5px,
      rgba(0, 0, 0, 0.55) 0px 20px 40px -10px;
  }
`

const DocsVisibilityIcon = styled.p`
  display: none;
  margin: 0;

  @media (max-width: 62.5em) {
    font-size: 1.4rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    svg {
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

const TOCTitle = styled('h2')`
  font-size: 1em;
  text-transform: uppercase;
  margin: 0.1em;

  &:not(:first-child) {
    margin-top: 1.5em;
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
    <DocsLink to="/docs">Welcome</DocsLink>

    <TOCTitle>Getting Started</TOCTitle>
    <DocsLink to="/docs/install">Installation</DocsLink>
    <DocsLink to="/docs/build">Building an Index</DocsLink>
    <DocsLink to="/docs/interface">Embedding the Interface</DocsLink>

    <TOCTitle>Guides</TOCTitle>
    <DocsLink to="/docs/stork-and-netlify">Stork &amp; Netlify</DocsLink>
    <DocsLink to="/docs/languages">Indexing Non-English Content</DocsLink>
    <DocsLink to="/docs/srt">Working with Subtitle Files</DocsLink>

    <TOCTitle>References</TOCTitle>
    <DocsLink to="/docs/config-ref">Configuration Reference</DocsLink>
    <DocsLink to="/docs/js-ref">JavaScript Reference</DocsLink>
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

const HideIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 18 13">
    <g stroke="none">
      <path d="M14.9960938,12.2504883 C15.2119141,12.0283203 15.2055664,11.7045898 14.9960938,11.4951172 L3.95751953,0.456542969 C3.74804688,0.247070312 3.40527344,0.247070312 3.19580078,0.456542969 C2.99267578,0.659667969 2.99267578,1.00878906 3.19580078,1.21191406 L14.2407227,12.2504883 C14.4501953,12.4599609 14.7929688,12.4663086 14.9960938,12.2504883 Z M14.824707,10.1176758 C16.6782227,8.83544922 17.7954102,7.15966797 17.7954102,6.4296875 C17.7954102,5.14111328 14.3740234,0.907226562 9.10546875,0.907226562 C8.02636719,0.907226562 7.0234375,1.09130859 6.109375,1.38964844 L8.01367188,3.29394531 C8.35644531,3.16699219 8.72460938,3.09716797 9.11181641,3.09716797 C10.9589844,3.09716797 12.4633789,4.57617188 12.4633789,6.4296875 C12.4633789,6.82324219 12.3935547,7.19140625 12.2602539,7.53417969 L14.824707,10.1176758 Z M9.10546875,11.9521484 C10.2416992,11.9521484 11.2890625,11.7553711 12.2285156,11.4316406 L10.3115234,9.51464844 C9.94970703,9.6796875 9.53710938,9.76220703 9.11181641,9.76220703 C7.25830078,9.76220703 5.75390625,8.23876953 5.75390625,6.4296875 C5.75390625,5.99804688 5.83642578,5.57910156 6.00146484,5.20458984 L3.48779297,2.69091797 C1.56445312,3.98583984 0.421875,5.69335938 0.421875,6.4296875 C0.421875,7.71191406 3.90673828,11.9521484 9.10546875,11.9521484 Z M11.1494141,6.4296875 C11.1494141,6.38525391 11.1557617,6.34716797 11.1557617,6.30273438 C11.1557617,5.20458984 10.2670898,4.30957031 9.16259766,4.30957031 C9.11816406,4.30957031 9.08007812,4.31591797 9.03564453,4.32226562 L11.1494141,6.4296875 Z M9.03564453,8.39111328 C9.08642578,8.39111328 9.12451172,8.38476562 9.17529297,8.38476562 L7.04882812,6.25830078 C7.04248047,6.30273438 7.04248047,6.35351562 7.04248047,6.39794922 C7.04248047,7.49609375 7.94384766,8.39111328 9.03564453,8.39111328 Z"></path>
    </g>
  </svg>
)

const ShowIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 18 12">
    <g stroke="none">
      <path d="M9.10546875,11.9521484 C14.3803711,11.9521484 17.7954102,7.71191406 17.7954102,6.4296875 C17.7954102,5.14111328 14.3740234,0.907226562 9.10546875,0.907226562 C3.91308594,0.907226562 0.421875,5.14111328 0.421875,6.4296875 C0.421875,7.71191406 3.90673828,11.9521484 9.10546875,11.9521484 Z M9.11181641,9.76220703 C7.25830078,9.76220703 5.76025391,8.23876953 5.75388632,6.4296875 C5.74755859,4.56982422 7.25830078,3.09716797 9.11181641,3.09716797 C10.9589844,3.09716797 12.4633789,4.57617188 12.4633789,6.4296875 C12.4633789,8.23876953 10.9589844,9.76220703 9.11181641,9.76220703 Z M9.10546875,7.75 C9.83544922,7.75 10.4321289,7.15966797 10.4321289,6.43603516 C10.4321289,5.71240234 9.83544922,5.109375 9.10546875,5.109375 C8.37548828,5.109375 7.78515625,5.71240234 7.78515625,6.43603516 C7.78515625,7.15966797 8.37548828,7.75 9.10546875,7.75 Z"></path>
    </g>
  </svg>
)

const DocsLayout = ({ title, children }) => {
  const [docsNavVisible, setDocsNavVisible] = useState(true)
  return (
    <Layout>
      <Wrapper>
        <GridContainer>
          <DocsVisibilityIcon
            onClick={() => {
              setDocsNavVisible(!docsNavVisible)
            }}
          >
            {docsNavVisible ? <HideIcon /> : <ShowIcon />}
            {docsNavVisible ? "Hide Navigation" : "Show Navigation"}
          </DocsVisibilityIcon>
          <div
            style={{
              gridColumn: `2 / span 2`,
              gridRow: `2 / span 2`,
            }}
          >
            {docsNavVisible ? <DocsNav /> : null}
          </div>
          <PageTitle>{title}</PageTitle>
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
