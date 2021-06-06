import React, { Fragment } from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { Column } from './utils'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

const FilenameBlock = styled.div`
  padding: 0.5em 1em;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: black;
  color: white;
`

const CodeBlockCodeTag = styled.code`
  display: block;
  padding: 0.5em 1em;
`

const Line = styled.div`
  display: table-row;
`

const LineNumber = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  display: table-cell;
  width: 100%;
  background: ${(props) =>
    props.highlighted ? 'hsla(0, 0%, 100%, 0.2)' : 'none'};
`

const getAnnotation = (annotations, lineIndex, tokenIndex) => {
  return annotations
    ? annotations.filter(
        (a) =>
          a.line === lineIndex + 1 &&
          ((a.tokens &&
            tokenIndex >= a.tokens.start &&
            tokenIndex <= a.tokens.end) ||
            tokenIndex === a.token)
      )[0]
    : null
}

const Popover = ({ children }) => (
  <Tooltip
    interactive={true}
    arrow={true}
    duration={250}
    html={annotation.content}
  >
    <span
      style={{
        background: 'hsla(0, 0%, 100%, 0.2)',
        padding: '0.1em 0.5em',
        margin: '0 0.1em',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {children}
    </span>
  </Tooltip>
)

const CodeBlock = ({
  source,
  partial,
  highlight,
  showLineNumbers,
  language,
  title,
  annotations,
  // tippy,
  children,
}) => {
  if (children) {
    throw new Error("The `CodeBlock` component shouldn't have children.")
  }

  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={source}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        // The number of whitespace characters at the start of the first visible line.
        const dedent = tokens[partial ? partial.start - 1 : 0][0].content.match(
          /^\s*/
        )[0].length

        return (
          <Column>
            {title ? <FilenameBlock>{title}</FilenameBlock> : null}
            <pre className={className} style={{ marginTop: `0` }}>
              <CodeBlockCodeTag>
                {tokens

                  // If we want to display part of the whole snippet,
                  // filter out the unwanted lines.
                  // @TODO: Dedent
                  .filter((_line, i) =>
                    partial
                      ? i + 1 >= partial.start && i + 1 <= partial.end
                      : true
                  )

                  .map((line, i) => (
                    <Line key={i} {...getLineProps({ line, key: i })}>
                      {showLineNumbers ? (
                        <LineNumber>{i + 1}</LineNumber>
                      ) : null}
                      <LineContent
                        highlighted={highlight && highlight.includes(i + 1)}
                      >
                        {line.map((token, key) => {
                          const annotation = getAnnotation(annotations, i, key)
                          const PopoverContainer = (props) =>
                            annotation ? (
                              <Popover annotation={annotation} {...props} />
                            ) : (
                              <Fragment {...props} />
                            )

                          return (
                            <PopoverContainer>
                              <span {...getTokenProps({ token, key })}>
                                {/* Dedent from first token. Presumably if the first token in the first line has 
                                whitespace, we should remove that amount of leading whitespace from the first 
                                token of every other line. */}
                                {key === 0
                                  ? token.content.slice(dedent)
                                  : token.content}
                              </span>
                            </PopoverContainer>
                          )
                        })}
                      </LineContent>
                    </Line>
                  ))}
              </CodeBlockCodeTag>
            </pre>
          </Column>
        )
      }}
    </Highlight>
  )
}

export default CodeBlock
