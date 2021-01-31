import Footer from '../footer'
import Header from '../header'
import { Column } from '../utils'

const Block = ({ width, alignLeft, children, ...props }) => (
  <div
    // weird CSS variables thing going on here so that nested columns still work
    css={`
      ${width ? `--column-width: ${width};` : ''}
      width: 90vw;
      max-width: var(--column-width, 42rem);
      margin: 0 auto;
    `}
    {...props}
  >
    {children}
  </div>
)

const Wide = ({ children }) => {
  return <Block width="50rem">{children}</Block>
}

const FullWidth = ({ background, children, padding, ...props }) => (
  <div
    css={`
      background-color: ${background};
    `}
  >
    <VerticalSpacer padding={padding} {...props}>
      {children}
    </VerticalSpacer>
  </div>
)

const Marketing = ({ nameplateHidden, ...props }) => {
  return (
    <>
      <Header nameplateHidden={nameplateHidden} />
      <main style={{ padding: '1.5rem 0 5rem 0' }}>{props.children}</main>
      <Footer />
    </>
  )
}

export default Marketing

export { Block, Wide, FullWidth }
