import styled from 'styled-components'

const brandColor = 'hsla(103, 24%, 77%, 1)'
const grayBackground = 'hsla(0, 0%, 0%, 0.1)'

const Column = ({ width, alignLeft, children, ...props }) => (
  <div
    // weird CSS variables thing going on here so that nested columns still work
    css={`
      ${width ? `--column-width: ${width};` : ''}
      max-width: var(--column-width, 42rem);
      margin: var(--column-margin, 0 auto);
    `} 
    {...props}
  >
    {children}
  </div>
)

const VerticalSpacer = ({ children, padding, ...props }) => {
  const Wrapper = styled.div`
    padding: ${padding || "1em"} 0;
    margin: 2em 0 2em;
  `

  return (
    <Wrapper {...props}>
      <Column>{children}</Column>
    </Wrapper>
  )
}

const FullWidth = ({ background, children, padding, ...props }) => (
  <div
    css={`
      background-color: ${background};
    `}
  >
    <VerticalSpacer padding={padding} {...props}>{children}</VerticalSpacer>
  </div>
)

export { brandColor, grayBackground, FullWidth, VerticalSpacer, Column }
