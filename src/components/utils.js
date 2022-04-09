import styled from 'styled-components'

const brandColor = 'hsla(103, 24%, 77%, 1)'
const buttonColor = '#104c3c'
const buttonHoverColor = '#156650'
const grayBackground = 'hsla(0, 0%, 0%, 0.1)'

const Column = ({ width, alignLeft, children, ...props }) => (
  <div
    // weird CSS variables thing going on here so that nested columns still work
    css={`
      ${width ? `--column-width: ${width};` : ''}
      max-width: var(--column-width, 42rem);
      width: 100%;
      margin: var(--column-margin, 0 auto);
    `}
    {...props}
  >
    {children}
  </div>
)

const VerticalSpacerWrapper = styled.div`
  padding: ${(props) => props.padding || '1em'} 0;
  margin: 2em 0 2em;
`

const VerticalSpacer = ({ children, padding, ...props }) => {
  return (
    <VerticalSpacerWrapper padding={padding} {...props}>
      <Column>{children}</Column>
    </VerticalSpacerWrapper>
  )
}

const FullWidth = ({ background, children, padding, ...props }) => (
  <div
    css={`
      background-color: ${background};
      padding: 0 2.5%;
    `}
  >
    <VerticalSpacer padding={padding} {...props}>
      {children}
    </VerticalSpacer>
  </div>
)

const StorkButton = styled.button`
  background: ${buttonColor};
  border-radius: 6px;
  border: none;
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background: ${buttonHoverColor};
  }

  &:active {
    transform: translateY(2px);
  }
`

export {
  brandColor,
  buttonColor,
  buttonHoverColor,
  grayBackground,
  StorkButton,
  FullWidth,
  VerticalSpacer,
  Column,
}
