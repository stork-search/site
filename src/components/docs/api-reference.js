import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const Option = styled.div`
  padding: 0.7em 0;
  margin: 0.7em 0;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.2);
`

const KeyElement = styled.span`
  font-size: 1.4rem;
  font-family: var(--mono-font-family);
  font-weight: bold;
`

const Type = styled.span`
  color: hsla(0, 0%, 0%, 0.8);
`

const RequiredWrapper = styled.span`
  color: #b1590b;
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
`

const Default = styled.span`
  color: gray;
  text-transform: uppercase;
  font-size: 0.8em;

  & > span {
    font-weight: bold;
  }
`

const Required = () => <RequiredWrapper>Required</RequiredWrapper>

const ApiReferenceTable = ({ options }) => (
  <>
    {options.map((option) => (
      <Option>
        <p style={{ margin: 0 }}>
          <KeyElement>{option.key}</KeyElement> •{' '}
          <Type>
            <ReactMarkdown
              disallowedTypes={['paragraph']}
              unwrapDisallowed={true}
            >
              {option.type}
            </ReactMarkdown>
          </Type>
        </p>
        <p style={{ margin: 0, marginBottom: '0.45em', lineHeight: 1 }}>
          {option.required ? (
            <Required />
          ) : option.default ? (
            <Default>
              Default: <span>{option.default}</span>
            </Default>
          ) : null}
        </p>
        <p style={{ margin: 0 }}>
          <ReactMarkdown
            disallowedTypes={['paragraph']}
            unwrapDisallowed={true}
          >
            {option.description}
          </ReactMarkdown>
        </p>
      </Option>
    ))}
  </>
)

export default ApiReferenceTable
