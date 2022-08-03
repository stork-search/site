import styled from 'styled-components'

const StylisticTextWrapper = styled.div`
  line-height: 1;
  margin: 0;
`

const StylisticText = ({ children, style }) => {
  return (
    <StylisticTextWrapper style={{ ...style }}>{children}</StylisticTextWrapper>
  )
}

const PageTitle = styled.h1`
  font-size: ${(props) => props.fontSize || '2.8rem'};
  line-height: 1;
  margin: 0;
  letter-spacing: -0.03em;
`

const MetaText = styled.p`
  text-transform: uppercase;
  color: hsla(0, 0%, 0%, 0.8);
  font-weight: bold;
  letter-spacing: 0.05em;
  font-size: 0.8em;
  margin: 0.25em 0;
`

export default null

export { StylisticText, PageTitle, MetaText }
