import styled from 'styled-components'
import { Column } from '../utils'
import { MetaText } from '../text'

const DocsNoteWrapper = styled.div`
  display: flex;
  background-color: rgb(204, 242, 188);
  --code-background-color: rgb(157, 224, 130);
  border: 1px solid hsla(0, 0%, 0%, 0.2);
  border-radius: 3px;
  padding: 1em;
  font-size: 0.9em;

  p {
    margin: 0
  }
`

const AlertIconWrapper = styled.span`
  display: block;
  font-size: 2.5rem;
  line-height: 3rem;
  color: hsla(0, 0%, 100%, 0.8);
  background: hsla(0, 0%, 0%, 0.2);
  font-weight: bold;
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  text-align: center;
  margin-right: 1rem;
  margin-top: 1rem;
  border-radius: 50%;
`

const AlertIcon = () => <AlertIconWrapper>!</AlertIconWrapper>

const DocsNote = ({ children }) => {
  return (
    <Column>
      <DocsNoteWrapper>
        <AlertIcon></AlertIcon>
        <div>
          <MetaText>Note:</MetaText>
          {children}
        </div>
      </DocsNoteWrapper>
    </Column>
  )
}

export default DocsNote
