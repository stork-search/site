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
      pageTitle: 'Changelog',
      releases: await releases,
      stats,
    },
  }
}

const CenteredTableCell = styled.td`
  text-align: center;
`

const ReleaseHeading = styled.h2`
  border-top: 2px solid #bbb;
  margin-top: 0.75em;
  padding-top: 0.75em;
  margin-bottom: 0;
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
      <h1>Release Statistics</h1>
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
              <th>stork.wasm size</th>
              <th>stork.js size</th>
              <th>federalist.st size</th>
              <th>Search duration*</th>
              <th>Build duration*</th>
            </tr>
          </thead>
          <tbody>
            {stats
              .slice(0, expandedStats ? stats.length : 5)
              .map(({ version, stats }) => (
                <tr key={version}>
                  <CenteredTableCell>
                    <strong>{version}</strong>
                  </CenteredTableCell>

                  {[
                    stats['stork.wasm']
                      ? `${stats['stork.wasm'].toFixed(2)} KB`
                      : '-',

                    stats['stork.wasm']
                      ? `${stats['stork.js'].toFixed(2)} KB`
                      : '-',

                    stats['federalist.st']
                      ? `${(stats['federalist.st'] / 1000).toFixed(3)} MB`
                      : '-',

                    stats['search/federalist/liberty']
                      ? `${stats['search/federalist/liberty'].toFixed(2)} ms.`
                      : '-',

                    stats['build/federalist']
                      ? `${stats['build/federalist'].toFixed(2)} ms.`
                      : '-',
                  ].map((string) => (
                    <CenteredTableCell>{string}</CenteredTableCell>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>

        {stats.length > 5 && <p>{showMoreToggle(expandedStats)}</p>}

        <p style={{ lineHeight: 1 }}>
          <small>
            Benchmarks run on an AWS EC2 t4.medium instance running Ubuntu
            20.04, initiated from the <code>scripts/generate-stats.py</code>{' '}
            script.
          </small>
        </p>
      </div>
      <div className="releases">
        <h1>Releases</h1>
        {releases
          .filter((r) => !!r && !!r.publishedAt)
          .map((release) => (
            <div key={release.url}>
              <ReleaseHeading>{release.tagName}</ReleaseHeading>
              <div style={{ marginTop: 0, marginBottom: '0.4em' }}>
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
              </div>
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
