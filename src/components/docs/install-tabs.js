import { useState } from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { brandColor } from '../utils'
import CodeBlock from '../codeblock'

const borderColor = 'hsla(0, 0%, 70%, 1)'
const borderRadius = '8px'

const Tabs = styled.div`
  display: flex;
  width: 100%;
`

const Tab = styled.div`
  flex: 1 1 100%;
  border: 1px solid ${borderColor};
  padding: 1em;
  text-align: center;
  cursor: pointer;

  &:not(:last-of-type) {
    border-right: none;
  }

  &:first-of-type {
    border-radius: ${borderRadius} 0 0 0;
  }

  &:last-of-type {
    border-radius: 0 ${borderRadius} 0 0;
  }

  &.active {
    font-weight: bold;
    background: ${brandColor};
  }
`

const TabContents = styled.div`
  border: 1px solid ${borderColor};
  border-top: none;
  padding: 1em;

  &:not(.active) {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`

const installTabs = ({ latestRelease }) => {
  const version = latestRelease.tagName || 'latest'
  const [activeTab, setActiveTab] = useState('macOS')

  const tabs = ['macOS', 'Ubuntu', 'Amazon Linux', 'Cross-platform']

  const contents = {
    macOS: (
      <>
        <ReactMarkdown>
          **Option 1:** Install with [Homebrew](https://brew.sh):
        </ReactMarkdown>
        <CodeBlock source={`$ brew install stork-search/stork-tap/stork`} />
        <ReactMarkdown>
          **Option 2:** Download a pre-compiled binary (Intel only):
        </ReactMarkdown>

        <CodeBlock
          source={`$ wget https://files.stork-search.net/releases/${version}/stork-macos-10-15
$ chmod +x stork-macos-10-15`}
        />
        <ReactMarkdown>
          **Option 3:** If you have the Rust toolchain installed, use Cargo:
        </ReactMarkdown>
        <CodeBlock source={`$ cargo install stork-search --locked`} />
        <ReactMarkdown>
          The `--locked` flag is required; discussed further in [issue
          #188](https://github.com/jameslittle230/stork/issues/188)
        </ReactMarkdown>
      </>
    ),
    Ubuntu: (
      <>
        <ReactMarkdown>
          **Option 1:** Download a pre-compiled binary:
        </ReactMarkdown>

        <CodeBlock
          source={`$ wget https://files.stork-search.net/releases/${version}/stork-ubuntu-20-04
$ chmod +x stork-ubuntu-20-04`}
          annotations={[
            {
              line: 1,
              token: 0,
              characters: { start: 54, end: 72 },
              content: (
                <span>
                  Alternatively, use <code>stork-ubuntu-16-04</code> for a
                  binary that works on Ubuntu 16.04.
                </span>
              ),
            },
          ]}
        />

        <ReactMarkdown>
          **Option 2:** If you have the Rust toolchain installed, use Cargo:
        </ReactMarkdown>

        <CodeBlock source={`$ cargo install stork-search --locked`} />

        <ReactMarkdown>
          The `--locked` flag is required; discussed further in [issue
          #188](https://github.com/jameslittle230/stork/issues/188)
        </ReactMarkdown>
      </>
    ),
    'Amazon Linux': (
      <>
        <ReactMarkdown>
          **Option 1:** Download a pre-compiled binary:
        </ReactMarkdown>

        <CodeBlock
          source={`$ wget https://files.stork-search.net/releases/${version}/stork-amazon-linux
$ chmod +x stork-amazon-linux`}
        />

        <ReactMarkdown>
          **Option 2:** Build from source. Note that Stork cannot be built with
          the `web-scraping` feature on Amazon Linux because of OpenSSL
          incompatibilities.
        </ReactMarkdown>
      </>
    ),
    'Cross-platform': (
      <>
        <ReactMarkdown>
          Install the Rust toolchain and install Stork with Cargo:
        </ReactMarkdown>
        <CodeBlock source={`$ cargo install stork-search --locked`} />
        <ReactMarkdown>
          The `--locked` flag is required; discussed further in [issue
          #188](https://github.com/jameslittle230/stork/issues/188)
        </ReactMarkdown>
      </>
    ),
  }

  return (
    <div>
      <Tabs>
        {tabs.map((tab) => (
          <Tab
            key={tab}
            onClick={() => {
              setActiveTab(tab)
            }}
            className={tab === activeTab ? 'active' : ''}
          >
            {tab}
          </Tab>
        ))}
      </Tabs>

      {Object.keys(contents).map((key) => (
        <TabContents key={key} className={key === activeTab ? 'active' : ''}>
          {contents[key]}
        </TabContents>
      ))}
    </div>
  )
}

export default installTabs
