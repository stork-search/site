import styled from 'styled-components'
import Footer from '../footer'
import Header from '../header'
import DocsNavigation from '../docs/navigation'
import { Column } from '../utils'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 20rem 50rem 1fr;
  grid-gap: 1em;
  margin: 0 auto;

  --column-width: 42rem;
  --column-margin: 0;
`

const Wide = ({ children }) => {
  return (
    <Column width="100%">{children}</Column>
  )
}

export default (props) => {
  return (
    <>
      <Header />
      <Grid>
        <div />
        <DocsNavigation />
        <div style={{ padding: '2rem 0 5rem 0', flexGrow: 0 }}>
          <main>{props.children}</main>
          {/* CSAT module here? */}
        </div>
      </Grid>
      <Footer />
    </>
  )
}

export { Wide }
