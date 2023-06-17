import styled from 'styled-components'
import { Column, VerticalSpacer } from '../utils'
import { PageTitle, StylisticText } from '../text'
import Link from 'next/link'

const Logo = () => <InnerLogo />

const InnerLogo = styled.div`
  width: 13rem;
  height: 13rem;
  background: url('logo.svg') bottom right / 100% 100% no-repeat;
  margin-top: -4rem;
  margin-right: 2rem;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 40rem) {
    width: 10rem;
    height: 10rem;
    margin-top: 0;
  }

  @media (max-width: 30rem) {
    display: none;
    margin: 0.5em;
  }
`

const Intro = () => {
  return (
    <Column>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <Logo />
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
