import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  brandColor,
  buttonColor,
  buttonHoverColor,
  StorkButton,
} from '../utils'

const join = (sep, ...args) => {
  args.filter((a) => !!a).join(sep)
}

const TOCWrapper = styled.div`
  border-right: 1px solid gray;
  margin: 0 2em 0 0;
  flex-shrink: 0;
  position: relative;
`

const TOC = styled.ul`
  list-style-type: none;
  padding: 0;
  padding-bottom: 5rem;
  font-size: 0.9rem;
  flex-shrink: 0;

  @media (max-width: 65em) {
    position: fixed;
    right: 0;
    top: 0;
    margin: 0;
    padding-top: 2em;
    padding-bottom: 8em;
    z-index: 20;
    background: white;
    height: 100vh;
    overflow-y: scroll;
    border: 1px solid #a8a8a8;
    transition: transform 0.2s ease;
    transform: translateX(${(props) => (props.visible ? '0%' : '100%')});
  }
`

const StyledLink = (props) => {
  const router = useRouter()
  const activeClass = router.pathname === props.href
  return (
    <Link href={props.href} passHref>
      <StyledLinkWrapper className={activeClass ? 'active' : ''}>
        {props.children}
      </StyledLinkWrapper>
    </Link>
  )
}

const StyledLinkWrapper = styled.a`
  display: block;
  width: 100%;
  border-bottom: 1px solid hsla(0, 0%, 80%);
  padding: 0.6rem 2rem;
  font-size: 1em;
  text-decoration: none;
  line-height: 1.3;
  color: currentColor;

  &:link {
    color: currentColor; // override :(
    font-weight: normal;
  }

  &:hover {
    background: hsla(0, 0%, 90%);
  }

  &:link.active,
  &:hover.active {
    font-weight: bold;
    background: ${brandColor};
  }

  @media (max-width: 65em) {
    padding-right: 7em;
  }
`

const TOCTitle = styled('h2')`
  font-size: 0.85em;
  padding: 0 2rem;
  text-transform: uppercase;
  color: hsla(0, 0%, 0%, 0.6);
  margin: 2.5rem 0 0.75rem;
`

const DocsLink = ({ href, children }) => {
  return (
    <li style={{ width: '100%' }}>
      <StyledLink href={href}>{children}</StyledLink>
    </li>
  )
}

const MobileNavToggleButton = styled(StorkButton)`
  position: fixed;
  right: 25px;
  bottom: 25px;
  z-index: 30;

  transition: box-shadow 0.2s ease;

  box-shadow: 1.1px 1.1px 5.3px rgba(0, 0, 0, 0.065),
    2.5px 2.5px 12.6px rgba(0, 0, 0, 0.093),
    4.8px 4.8px 23.8px rgba(0, 0, 0, 0.115),
    8.5px 8.5px 42.4px rgba(0, 0, 0, 0.137),
    15.9px 15.9px 79.4px rgba(0, 0, 0, 0.165),
    38px 38px 190px rgba(0, 0, 0, 0.23)
      ${(props) => (props.pressed ? `, inset 0 0 12px rgb(0 0 0 / 45%)` : ``)};

  &:hover {
    background: ${buttonHoverColor};
  }

  padding: 1em;
  border-radius: 10px;
  color: white;
  font-weight: bold;

  @media (min-width: 65em) {
    display: none;
  }
`

const nav = ({ className }) => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false)
  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible)
  }

  return (
    <TOCWrapper>
      <MobileNavToggleButton
        pressed={mobileNavVisible}
        onClick={toggleMobileNav}
      >
        Navigate
      </MobileNavToggleButton>
      <TOC visible={mobileNavVisible}>
        <TOCTitle>Getting Started</TOCTitle>
        <DocsLink href="/docs/install">Installation</DocsLink>
        <DocsLink href="/docs/build">Building an Index</DocsLink>
        <DocsLink href="/docs/interface">Building a Search Interface</DocsLink>

        <TOCTitle>Going Further</TOCTitle>
        <DocsLink href="/docs/advanced-js">Advanced Javascript Usage</DocsLink>
        {/* <DocsLink href="/docs/advanced-cli">Advanced Command Line Usage</DocsLink> */}
        <DocsLink href="/docs/languages">Indexing Non-English Content</DocsLink>
        <DocsLink href="/docs/html">Parsing HTML and Markdown</DocsLink>
        {/* <DocsLink href="/docs/web-content">Indexing Content from the Web</DocsLink> */}
        <DocsLink href="/docs/self-hosting">Self-hosting Stork</DocsLink>
        <DocsLink href="/docs/stork-and-netlify">
          Building a Search Index in CI
        </DocsLink>
        {/* <DocsLink href="/docs/stork-and-nextjs">Lazy-loading the Stork UI on a Next.js site</DocsLink> */}
        <DocsLink href="/docs/srt">Working with Subtitle Files</DocsLink>

        <TOCTitle>References</TOCTitle>
        <DocsLink href="/docs/config-ref">
          Index Configuration Reference
        </DocsLink>
        <DocsLink href="/docs/js-ref">JavaScript API Reference</DocsLink>
      </TOC>
    </TOCWrapper>
  )
}

export default nav
