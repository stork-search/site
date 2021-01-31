import styled from 'styled-components'
import { format, parseISO } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { MetaText } from '../text'

import { FullWidth, brandColor } from '../utils'
import { StylisticText } from '../text'

const Released = styled.p`
  font-size: 1.1em;
  color: #434343;
  font-weight: bold;
  line-height: 17px;
  margin: 0;
  margin-top: 0.4em;
`

const CTA = styled.p`
  padding-right: 0.5em;
  font-weight: bold;
  font-size: 1.4em;
  margin: 0;
  margin-top: 0.5em;
`

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  @media (max-width: 35rem) {
    flex-direction: column;
    align-items: start;
  }
`

const Stats = ({release}) => {
  const dateString = format(
    utcToZonedTime(
      parseISO(release.publishedAt || '2021-01-28'),
      'America/Los_Angeles'
    ),
    'MMM d, y'
  )

  return (
    <FullWidth background={brandColor} style={{ padding: '2em 0' }}>
      <StatsWrapper>
        <div>
          <MetaText>Latest version:</MetaText>
          <StylisticText style={{ fontWeight: 'bold', fontSize: '3.6rem' }}>
            {release.tagName || 'No Data'}
          </StylisticText>
          <Released>Released on {dateString}</Released>
        </div>
        <CTA>
          <a href="https://github.com/jameslittle230/stork">View on Github →</a>
        </CTA>
      </StatsWrapper>
    </FullWidth>
  )
}

export default Stats
