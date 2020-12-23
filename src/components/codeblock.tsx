import React from "react"
import styled from "styled-components"
import Highlight, { defaultProps } from "prism-react-renderer"
import "./prism.css"
import "./layout.css"

export const FilenameBlock = styled.div`
  padding: 0.5em 1em;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: black;
  color: white;
`

export const CodeBlockCodeTag = styled.code`
  display: block;
  padding: 0.5em 1em;
`

const Codeblock = ({ filename, lang, children }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={children}
      language={lang}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div>
          {filename ? <FilenameBlock>{filename}</FilenameBlock> : ""}
          <pre className={className} style={{ marginTop: `0` }}>
            <CodeBlockCodeTag>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </CodeBlockCodeTag>
          </pre>
        </div>
      )}
    </Highlight>
  )
}

export default Codeblock