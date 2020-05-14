import React from "react"
import styled from "styled-components"

const pageWidth = `650px`
const accentColor = `hsla(103, 24%, 77%, 1)`

const rhythms = {
  small: {
    top: `1em`,
    bottom: `1em`,
  },
  default: {
    top: `1.7em`,
    bottom: `1.9em`,
  },
  large: {
    top: `3.2em`,
    bottom: `3.5em`,
  },
}

const Title = styled.h1`
  line-height: 1;
  margin: 0.1em 0;
  letter-spacing: -0.02em;
  font-size: ${props => props.fontSize || "2.2em"};
`

const Subtitle = styled.p`
  text-transform: uppercase;
  color: hsla(0, 0%, 0%, 0.8);
  font-weight: bold;
  letter-spacing: 0.05em;
  font-size: 0.8em;
  margin: 0.25em 0;
`

const PageTitle = styled(Title).attrs(props => ({
  fontSize: "3em",
}))`
  margin-top: 0.5em;
  margin-bottom: 0.8em;
`

const Wrapper = styled.div`
  background-color: ${props => props.background || "none"};

  ${props => {
    let rhythmObject = rhythms[props.rhythm]
    let defaultRhythm = rhythms["default"]
    if (rhythmObject) {
      return `padding-top: ${rhythmObject.top}; padding-bottom: ${rhythmObject.bottom}`
    } else {
      return `padding-top: ${defaultRhythm.top}; padding-bottom: ${defaultRhythm.bottom}`
    }
  }};
`

const SimpleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr ${pageWidth} 1fr;
  grid-auto-flow: column;
  grid-auto-rows: auto;

  & > * {
    grid-column: 2 / span 1;
  }
`

const PopoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4em ${pageWidth} 4em 1fr;
  grid-auto-flow: column;
  grid-auto-rows: auto;

  & > * {
    grid-column: 3 / span 1;
  }

  & > .popout {
    grid-column: 2 / span 3;
  }
`

const Column = ({ children }) => {
  return (
    <>
      <SimpleGrid>{children}</SimpleGrid>
    </>
  )
}

const Popout = ({ children }) => {
  return (
    <>
      <PopoutGrid>{children}</PopoutGrid>
    </>
  )
}

export {
  pageWidth,
  accentColor,
  Wrapper,
  Column,
  Popout,
  Title,
  Subtitle,
  PageTitle,
}
