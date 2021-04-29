import styled from 'styled-components'
import { Column, VerticalSpacer } from '../utils'
import { PageTitle, StylisticText } from '../text'

const Intro = () => {
  return (
    <Column>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <div
          style={{
            width: '13rem',
            height: '13rem',
            background: 'url(\'/logo.svg\') bottom right / 100% 100% no-repeat',
            marginTop: '-4rem',
            marginRight: '2rem',
            flexShrink: 0
          }}
        ></div>
        <div>
          <PageTitle fontSize="4rem">Stork</PageTitle>
          <StylisticText
            style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              marginBottom: '0.4em',
              letterSpacing: '-0.02em',
            }}
          >
            Impossibly fast web search, made for static&nbsp;sites.
          </StylisticText>
          <StylisticText size="1.2rem" margin="0.6em 0">
            By <a href="https://jameslittle.me">James Little</a>.
          </StylisticText>
        </div>
      </div>
    </Column>
  )
}

export default Intro
