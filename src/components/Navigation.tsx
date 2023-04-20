import * as React from "react";
import * as NM from "@radix-ui/react-navigation-menu";
import styled, { keyframes } from "styled-components";

const Root = styled(NM.Root)``;
const Item = styled(NM.Item)``;

const List = styled(NM.List)`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 1rem;
  justify-content: flex-end;
`;

const Trigger = styled(NM.Trigger)`
  border: none;
  background: none;
  padding: 0;
  color: var(--color-link);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

const enterFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(80%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const enterFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-80%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const exitToLeft = keyframes`
from {
  opacity: 1;
  transform: translateX(0);
}
to {
  opacity: 0;
  transform: translateX(-80%);
}
`;

const exitToRight = keyframes`
from {
  opacity: 1;
  transform: translateX(0);
}
to {
  opacity: 0;
  transform: translateX(80%);
}
`;

const Content = styled(NM.Content)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: max-content;
  animation-duration: 250ms;
  animation-timing-function: ease;
  position: absolute;

  &[data-motion="from-start"] {
    animation-name: ${enterFromLeft};
  }

  &[data-motion="from-end"] {
    animation-name: ${enterFromRight};
  }

  &[data-motion="to-start"] {
    animation-name: ${exitToLeft};
  }

  &[data-motion="to-end"] {
    animation-name: ${exitToRight};
  }
`;

const Link = styled(NM.Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: var(--color-link) !important;
  }
`;

const Indicator = styled(NM.Indicator)`
  transition: width, transform 250ms ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const ViewportPosition = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  right: 5em;
  perspective: 2000px;
  z-index: 100;
`;

const Viewport = styled(NM.Viewport)`
  position: relative;
  transform-origin: top center;
  margin-top: 10px;
  background: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  height: var(--radix-navigation-menu-viewport-height);
  width: var(--radix-navigation-menu-viewport-width);
  transition: width, height, 300ms ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &[data-state="visible"] {
    animation: fadeIn 200ms ease;
  }

  &[data-state="hidden"] {
    animation: fadeOut 200ms ease;
  }
`;

const Arrow = styled.div`
  position: relative;
  top: 5px;
  background-color: white;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-top-left-radius: 2px;
`;

export const Navigation = () => {
  return (
    <Root delayDuration={0}>
      <List>
        <Item>
          <Link href="/docs/install">Docs</Link>
        </Item>
        <Item>
          <Link href="/themes">Themes</Link>
        </Item>
        <Item>
          <Trigger>Ecosystem</Trigger>
          <Content>
            <Link href="/docs/install">Changelog</Link>

            <Link href="/">Crate</Link>
            <Link href="/">@stork-search/indexer</Link>
            <Link href="/">@stork-search/ui</Link>
            <Link href="/">@stork-search/react</Link>
          </Content>
        </Item>
        <Item>
          <Trigger>Community</Trigger>
          <Content>
            <Link href="/docs/install">Donate via Ko-Fi</Link>
            <Link href="/docs/install">Github Discussions</Link>
            <Link href="/docs/install">Discord</Link>
            <Link href="/docs/install">Buy a Sticker</Link>
          </Content>
        </Item>
        <Item>
          <Link href="/themes">Github</Link>
        </Item>

        <Indicator>
          <Arrow />
        </Indicator>
      </List>

      <ViewportPosition>
        <Viewport />
      </ViewportPosition>
    </Root>
  );
};
