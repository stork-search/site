import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const TOC = styled.ul`
  list-style-type: none;
  padding: 0;
  padding-bottom: 5rem;
  font-size: 0.9rem;
  flex-shrink: 0;
`;

const StyledLink = styled(Link)`
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
    background: var(--brand-color);
  }

  @media (max-width: 73em) {
    padding-right: 7em;
  }
`;

const TOCTitle = styled("h2")`
  font-size: 0.85em;
  padding: 0 2rem;
  text-transform: uppercase;
  color: hsla(0, 0%, 0%, 0.6);
  margin: 2.5rem 0 0.75rem;
`;

const DocsLink = ({ href, children }: { href: string; children: any }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <li style={{ width: "100%" }}>
      <StyledLink className={isActive ? "active" : undefined} href={href}>
        {children}
      </StyledLink>
    </li>
  );
};

export const DocsNavigation = () => (
  <TOC>
    <TOCTitle>Getting Started</TOCTitle>
    <DocsLink href="/docs/install">Install Stork</DocsLink>
    <DocsLink href="/docs/build">Build an Index</DocsLink>
    <DocsLink href="/docs/interface">Build a Search Interface</DocsLink>

    <TOCTitle>Going Further</TOCTitle>
    {/* <DocsLink href="/docs/advanced-js">Advanced Javascript Usage</DocsLink> */}
    <DocsLink href="/docs/languages">Indexing Non-English Content</DocsLink>
    <DocsLink href="/docs/html">Parsing HTML and Markdown</DocsLink>
    <DocsLink href="/docs/self-hosting">Self-hosting Stork</DocsLink>
    {/* <DocsLink href="/docs/stork-and-netlify">
      Building a Search Index in CI
    </DocsLink> */}
    <DocsLink href="/docs/srt">Working with Subtitle Files</DocsLink>

    <TOCTitle>API Reference</TOCTitle>
    <DocsLink href="/docs/config-ref">Configuration File Reference</DocsLink>
    <DocsLink href="/docs/js-ref">JavaScript API Reference</DocsLink>
  </TOC>
);
