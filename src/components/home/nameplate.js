import styled from 'styled-components'
import { Column, VerticalSpacer } from '../utils'
import { PageTitle, StylisticText } from '../text'
import Link from 'next/link'

const Logo = () => (
  <a href="/sticker">
    <InnerLogo />
  </a>
)

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

  &:hover {
    cursor: pointer;
    -webkit-filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.4));
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.4));

    &:after {
      content: 'Buy a sticker!';
      display: block;
      background: hsla(0, 0%, 98%, 1);
      border: 1px solid #444;
      position: bottom;
      text-align: center;
      font-size: 0.8rem;
      padding: 0.2rem 0.6rem;
      border-radius: 0.2rem;
      margin-left: 2rem;
    }
  }

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
