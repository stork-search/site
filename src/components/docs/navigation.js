import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { brandColor } from '../utils'

const TOC = styled.ul`
  list-style-type: none;
  padding: 0;
  padding-bottom: 5rem;
  border-right: 1px solid gray;
  margin: 0 2em 0 0;
  font-size: 0.9rem;
  flex-shrink: 0;

  @media (max-width: 68rem) {
    text-align: left;
    border: none;
    margin: 1em 0;
    overflow-y: auto;
    max-height: 30vh;
    padding-bottom: 0;
    border: 1px solid hsla(0, 0%, 0%, 0.1);
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

const nav = () => {
  return (
    <TOC>
      <TOCTitle>Getting Started</TOCTitle>
      <DocsLink href="/docs/install">Installation</DocsLink>
      <DocsLink href="/docs/build">Building an Index</DocsLink>
      <DocsLink href="/docs/interface">
        Using the Stork Search Interface
      </DocsLink>
      <DocsLink href="/docs/advanced-js">Building your own Interface</DocsLink>

      <TOCTitle>Going Further</TOCTitle>
      <DocsLink href="/docs/languages">Indexing Non-English Content</DocsLink>
      <DocsLink href="/docs/srt">Working with Subtitle Files</DocsLink>
      <DocsLink href="/docs/html">Parsing HTML and Markdown</DocsLink>

      <TOCTitle>Guides</TOCTitle>
      <DocsLink href="/docs/stork-and-netlify">Building a Search Index on every Netlify Deploy</DocsLink>
      <DocsLink href="/docs/stork-and-nextjs">Lazy-loading the Stork UI on a Next.js site</DocsLink>
      <DocsLink href="/docs/self-hosting">Self-hosting Stork</DocsLink>

      <TOCTitle>References</TOCTitle>
      <DocsLink href="/docs/config-ref">Index Configuration Reference</DocsLink>
      <DocsLink href="/docs/js-ref">JavaScript Reference</DocsLink>
    </TOC>
  )
}

export default nav
