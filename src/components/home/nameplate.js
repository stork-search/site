import styled from 'styled-components'
import { Column, VerticalSpacer } from '../utils'
import { PageTitle, StylisticText } from '../text'


const Intro = () => {
  return (
    <Column>
      <PageTitle fontSize="4rem">Stork</PageTitle>
      <StylisticText
        style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          marginBottom: '0.4em',
          letterSpacing: "-0.02em"
        }}
      >
        Impossibly fast web search, made for static&nbsp;sites.
      </StylisticText>
      <StylisticText size="1.2rem" margin="0.6em 0">
        By <a href="https://jameslittle.me">James Little</a>.
      </StylisticText>
    </Column>
  )
}

export default Intro
