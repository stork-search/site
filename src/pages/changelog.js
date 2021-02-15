import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { MetaText, PageTitle, StylisticText } from '../components/text'

import { parseISO } from 'date-fns'
import { utcToZonedTime, format } from 'date-fns-tz'

import { releases } from '../lib/github-api-client'
import stats from '../lib/release-stats'
import { Column } from '../components/utils'

export async function getStaticProps() {
  return {
    props: {
      releases: await releases,
      stats,
    },
  }
}

const CenteredTableCell = styled.td`
  text-align: center;
`

const Changelog = ({ stats, releases }) => {
  const [expandedStats, setExpandedStats] = useState(false)

  const showMoreToggle = (isExpanded) => (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        setExpandedStats(!isExpanded)
      }}
    >
      See {isExpanded ? 'less' : 'more'}
    </a>
  )

  return (
    <Column>
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
                <CenteredTableCell>
                  <strong>{row.version}</strong>
                </CenteredTableCell>
                <CenteredTableCell>
                  {(row.indexSize / 1000).toFixed(2)} MB
                </CenteredTableCell>
                <CenteredTableCell>{row.wasmSize} kB</CenteredTableCell>
                <CenteredTableCell>{row.jsSize} kB</CenteredTableCell>
                {row.duration ? (
                  <CenteredTableCell>{row.duration} sec. **</CenteredTableCell>
                ) : row.benchmarks ? (
                  <CenteredTableCell>
                    {row.benchmarks['search::federalist::liberty']} ms.
                  </CenteredTableCell>
                ) : (
                  <CenteredTableCell>— **</CenteredTableCell>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <p>{showMoreToggle(expandedStats)}</p>

        <p>
          *Why this benchmark? Reproduceability, mostly. This test benchmarks
          the speed of the search algorithm by itself, rather than in the WASM
          runtime, removing any non-Stork-algorithm variance that might occur.
          On my computer, according to in-browser performance tests, the browser
          repaints with the search results roughly 10ms after the keypress
          event.
        </p>
        <p>
          **Benchmarks from 1.0.0 and before were run on my personal computer.
          Benchmarks from 1.0.4 and afterwards were run on an AWS EC2 server
          t4.micro instance by running <code>cargo bench</code>; the listed
          benchmark is for the <code>search::federalist::liberty</code>{' '}
          benchmark. Benchmarks in between 1.0.0 and 1.0.4 were found to have
          been invalid.
        </p>
      </div>
      <div>
        <h1>Releases</h1>
        {releases
          .filter((r) => !!r && !!r.publishedAt)
          .map((release) => (
            <div key={release.url}>
              <h2 style={{ marginBottom: 0 }}>{release.tagName}</h2>
              <p style={{ marginTop: 0, marginBottom: '0.4em' }}>
                <StylisticText>
                  <MetaText>
                    <Link href={release.url}>
                      {format(
                        utcToZonedTime(
                          parseISO(release.publishedAt),
                          'America/Los_Angeles'
                        ),
                        'MMM d, y'
                      )}
                    </Link>
                  </MetaText>
                </StylisticText>
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: release.descriptionHTML }}
              />
            </div>
          ))}
      </div>
    </Column>
  )
}

export default Changelog
