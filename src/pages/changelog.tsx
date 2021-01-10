// Gatsby supports TypeScript natively!
import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import PageLayout from '../components/pagelayout'
import { PageTitle } from '../components/utils'
import SEO from '../components/seo'

import { parseISO } from 'date-fns'
import { utcToZonedTime, format } from 'date-fns-tz'

export const query = graphql`
  query ChangelogQuery {
    github {
      repository(name: "stork", owner: "jameslittle230") {
        releases(first: 20, orderBy: { field: CREATED_AT, direction: DESC }) {
          nodes {
            descriptionHTML
            publishedAt
            tagName
            url
          }
        }
      }
    }
  }
`

const stats = [
  {
    version: '1.0.4',
    indexSize: 1125.46,
    wasmSize: 484.57,
    jsSize: 92.24,
  },
  {
    version: '1.0.3',
    indexSize: 1110.0,
    wasmSize: 591.97,
    jsSize: 94.75,
  },
  {
    version: '1.0.2',
    indexSize: 1110.0,
    wasmSize: 591.97,
    jsSize: 94.75,
  },
  {
    version: '1.0.1',
    indexSize: 1110.0,
    wasmSize: 591.97,
    jsSize: 94.75,
  },
  {
    version: '1.0.0',
    indexSize: 1110.0,
    wasmSize: 591.97,
    jsSize: 94.75,
    duration: 0.367,
  },
  {
    version: '0.7.4',
    indexSize: 1110.0,
    wasmSize: 578.84,
    jsSize: 73.05,
    duration: 0.354,
  },
  {
    version: '0.7.3',
    indexSize: 1140.0,
    wasmSize: 578.36,
    jsSize: 73.05,
    duration: 0.363,
  },
  {
    version: '0.7.2',
    indexSize: 1140.0,
    wasmSize: 578.36,
    jsSize: 73.05,
    duration: 0.353,
  },
  {
    version: '0.7.1',
    indexSize: 1140.0,
    wasmSize: 674.7,
    jsSize: 73.05,
    duration: 0.365,
  },
  {
    version: '0.7.0',
    indexSize: 1140.0,
    wasmSize: 684.82,
    jsSize: 9.07,
    duration: 0.383,
  },
  {
    version: '0.6.0',
    indexSize: 1800.0,
    wasmSize: 191.37,
    jsSize: 648.65,
    duration: 0.218,
  },
]

const CenteredTableCell = styled.td`
  text-align: center;
`

const Changelog = ({ data }) => {
  const [expandedStats, setExpandedStats] = useState(false)

  return (
    <PageLayout>
      <SEO title="Changelog" />
      <PageTitle>Changelog</PageTitle>
      <h1>Stats for numbers-type people</h1>
      <p>
        All file sizes are pre-compression. All files that come from
        files.stork-search.net are gzipped; you should compress your search
        index before serving it.
      </p>
      <div>
        <table>
          <thead>
            <tr>
              <th>Version</th>
              <th>federalist.st size</th>
              <th>stork.wasm size</th>
              <th>stork.js size</th>
              <th>Search duration*</th>
            </tr>
          </thead>
          <tbody>
            {stats.slice(0, expandedStats ? stats.length : 5).map((row) => (
              <tr key={row.version}>
                <CenteredTableCell>{row.version}</CenteredTableCell>
                <CenteredTableCell>{row.indexSize / 1000} MB</CenteredTableCell>
                <CenteredTableCell>{row.wasmSize} kB</CenteredTableCell>
                <CenteredTableCell>{row.jsSize} kB</CenteredTableCell>
                {row.duration ? (
                  <CenteredTableCell>{row.duration} sec.</CenteredTableCell>
                ) : (
                  <CenteredTableCell>—</CenteredTableCell>
                )}
              </tr>
            ))}
          </tbody>
        </table>

                <p>{expandedStats ? <a href="#" onClick={(e) => {
                  e.preventDefault();
                  setExpandedStats(false);
                }}>See less</a> : <a href="#" onClick={(e) => {
                  e.preventDefault();
                  setExpandedStats(true);
                }}>See more</a>}</p>

        <p style={{ fontSize: '0.8em', marginTop: '1.5em' }}>
          *Benchmarks from 1.0.0 and before were run on my personal computer.
          Benchmarks from 1.0.4 and afterwards were run on an AWS EC2 server
          with the benchmarks added to the repository. Benchmarks in between
          1.0.0 and 1.0.4 were found to have been invalid.
        </p>
      </div>
      <div>
        <h1>Releases</h1>
        {data.github.repository.releases.nodes
          .filter((r) => !!r && !!r.publishedAt)
          .map((release) => (
            <div key={release.url}>
              <h2 style={{ marginBottom: 0 }}>{release.tagName}</h2>
              <p style={{ marginBottom: '0.4em' }}>
                <a
                  style={{ fontSize: '0.9em', textTransform: 'uppercase' }}
                  href={release.url}
                >
                  {format(
                    utcToZonedTime(
                      parseISO(release.publishedAt),
                      'America/Los_Angeles'
                    ),
                    'MMM d, y'
                  )}
                </a>
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: release.descriptionHTML }}
              />
            </div>
          ))}
      </div>
    </PageLayout>
  )
}

export default Changelog
