import { useState } from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { brandColor } from '../utils'

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

  const tabs = ['macOS', 'Ubuntu', 'Cross-platform']

  const contents = {
    macOS: `
**Option 1:** Install with [Homebrew](https://brew.sh):

\`\`\`
$ brew install stork-search/stork-tap/stork
\`\`\`

**Option 2:** Download a pre-compiled binary (Intel only):

\`\`\`
$ wget https://files.stork-search.net/releases/${version}/stork-macos-10-15
$ chmod +x stork-macos-10-15
\`\`\`

**Option 3:** If you have the Rust toolchain installed, use Cargo:

\`\`\`
$ cargo install stork-search
\`\`\`
    `,
    Ubuntu: `
**Option 1:** Download a pre-compiled binary:

\`\`\`
$ wget https://files.stork-search.net/releases/${version}/stork-ubuntu-20-04
$ chmod +x stork-ubuntu-20-04
\`\`\`

**Option 2:** If you have the Rust toolchain installed, use Cargo:

\`\`\`
$ cargo install stork-search
\`\`\``,
    'Cross-platform': `
Install the Rust toolchain and install Stork with Cargo:

\`\`\`
$ cargo install stork-search
\`\`\`
    `,
  }

  return (
    <div>
      <Tabs>
        {tabs.map((tab) => (
          <Tab
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
        <TabContents className={key === activeTab ? 'active' : ''}>
          <ReactMarkdown>{contents[key]}</ReactMarkdown>
        </TabContents>
      ))}
    </div>
  )
}

export default installTabs
