import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import { parseISO, format } from 'date-fns'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Demo from '../components/demo'
import {
  accentColor,
  Wrapper,
  Column,
  Popout,
  Title,
  Subtitle,
} from '../components/utils'

import AboveFold from '../components/content/index/above-fold'
import Quickstart from '../components/content/index/quickstart'

const Intro = () => {
  return (
    <Wrapper>
      <Column>
        <div>
          <Title fontSize={`4rem`}>Stork</Title>
          <Title fontSize={`1.8rem`}>
            Impossibly fast web search, made for static&nbsp;sites.
          </Title>
          <p style={{ margin: `0.6em 0` }}>
            By <a href="https://jameslittle.me">James Little</a>.
          </p>
        </div>
      </Column>
    </Wrapper>
  )
}

const Released = styled.p`
  font-size: 1.1em;
  color: #434343;
  font-weight: bold;
  line-height: 17px;
`

const CTA = styled.p`
  padding-right: 0.5em;
  font-weight: bold;
  font-size: 1.4em;
`

export const query = graphql`
  query HomeStatsQuery {
    github {
      repository(name: "stork", owner: "jameslittle230") {
        releases(first: 3, orderBy: { field: CREATED_AT, direction: DESC }) {
          nodes {
            publishedAt
            tagName
          }
        }
      }
    }
  }
`

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  @media (max-width: 35rem) {
    flex-direction: column;
    align-items: start;
  }
`

const Stats = ({ release }) => {
  return (
    <Wrapper background={accentColor}>
      <Column>
        <StatsWrapper>
          <div>
            <Subtitle>Latest version:</Subtitle>
            <Title fontSize={`3.5rem`}>{release.tagName}</Title>
            <Released>
              Released on {format(parseISO(release.publishedAt), 'MMM d, y')}
            </Released>
          </div>
          <CTA>
            <a href="https://github.com/jameslittle230/stork">
              View on Github →
            </a>
          </CTA>
        </StatsWrapper>
      </Column>
    </Wrapper>
  )
}

const DocsLink = () => {
  return (
    <Wrapper rhythm="large" background="hsla(0, 0%, 0%, 0.1)">
      <Column>
        <Title>
          Next: <Link to="/docs/">Read the Docs →</Link>
        </Title>
      </Column>
    </Wrapper>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Demo />
    <Wrapper>
      <Column>
        <AboveFold />
      </Column>
    </Wrapper>
    <Stats
      release={
        data.github.repository.releases.nodes.filter(
          (r) => !!r && !!r.publishedAt
        )[0]
      }
    />
    <Wrapper>
      <Popout>
        <Quickstart />
      </Popout>
    </Wrapper>
    <DocsLink />
  </Layout>
)

export default IndexPage
