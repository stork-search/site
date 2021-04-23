import styled from 'styled-components'
import Footer from '../footer'
import Header from '../header'
import DocsNavigation from '../docs/navigation'
import { brandColor, Column } from '../utils'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 20rem 50rem 1fr;
  grid-gap: 1rem;
  margin: 0 auto;

  --column-width: 42rem;
  --column-margin: 0;

  @media (max-width: 68em) {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }
`

const CsatWrapper = styled.div`
  background: ${brandColor};
  font-size: 0.9rem;
  margin-top: 4rem;
  padding: 1rem;

  button {
    background: #104c3c;
    border-radius: 6px;
    border: none;
    color: white;
    font-weight: bold;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 0.8em;

    &:hover {
      background: #156650;
    }

    &:active {
      transform: translateY(2px);
    }
  }

  textarea {
    border: none;
    background: hsla(0, 0%, 100%, 0.8);
    display: block;
    margin: 0.1rem 0 0.3rem;
    width: 50%;
  }

  p {
    margin: 0.3rem 0;
  }
`

const Wide = ({ children }) => {
  return <Column width="100%">{children}</Column>
}

const Csat = () => (
  <Wide>
    <CsatWrapper>
      <p>
        Was this page helpful? <button>Yes!</button> <button>No</button>
      </p>
      <p>Please let me know if you have any feedback:</p>
      <textarea></textarea>
      <button>Submit →</button>
      <p>
        If you see an issue, please{' '}
        <a href="https://github.com/jameslittle230/stork-site/issues/new">
          file a bug!
        </a>
      </p>
    </CsatWrapper>
  </Wide>
)

export default (props) => {
  return (
    <>
      <Header />
      <Grid>
        <div />
        <DocsNavigation />
        <div style={{ padding: '2rem 0 5rem 0', flexGrow: 0 }}>
          <main>{props.children}</main>
          {/* <Csat /> */}
        </div>
      </Grid>
      <Footer />
    </>
  )
}

export { Wide }
