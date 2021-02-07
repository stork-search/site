import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FullWidth, brandColor, VerticalSpacer } from './utils'
// import { accentColor, Wrapper, Column, Title } from './utils'

const NameplateLink = ({ href, ...props }) => (
  <Link href={href} passHref>
    <a
      css={`
        text-decoration: none;
        color: currentColor !important;
        font-size: 1.4em;

        &:hover {
          text-decoration: underline;
        }

        &.active {
          display: none;
        }
      `}
      {...props}
    />
  </Link>
)

const HeaderLink = ({ href, ...props }) => (
  <Link href={href} passHref>
    <a
      css={`
        line-height: 1;
        margin-left: 1em;
        font-size: 1em;

        @media (max-width: 35rem) {
          margin-left: 0.5em;
          margin-right: 0.5em;
        }

        @media (max-width: 25rem) {
          display: block;
          margin: 0.5em;
        }
      `}
      {...props}
    />
  </Link>
)

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 35rem) {
    display: block;
    text-align: center;
  }
`

const Header = ({ nameplateHidden }) => {
  return (
    <FullWidth
      background={brandColor}
      style={{ marginTop: 0, marginBottom: 0 }}
    >
      <Flex>
        {nameplateHidden === true ? (
          <span></span>
        ) : (
          <NameplateLink href="/">Stork Search</NameplateLink>
        )}
        <div>
          <HeaderLink href="/docs/install">Documentation</HeaderLink>
          <HeaderLink href="/themes">Themes</HeaderLink>
          <HeaderLink href="/changelog">Changelog</HeaderLink>
          <HeaderLink href="/roadmap">Roadmap</HeaderLink>
        </div>
      </Flex>
    </FullWidth>
  )
}

export default Header
