import React from "react";

import Link from "next/link";
import styled from "styled-components";
import { Row } from "./layout/grid";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Nameplate = styled(Link)`
  font-size: 1.3rem;
  line-height: 1rem;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = ({
  nameplateHidden = false,
}: {
  nameplateHidden?: boolean;
}) => (
  <>
    <Row background="alert">
      This is the site for the beta version of Stork Search.{" "}
      <a href="https://stork-search.net">Take me back to stable!</a>
    </Row>
    <Row background="accent">
      <Flex>
        {nameplateHidden ? (
          <span>&nbsp;</span>
        ) : (
          <Nameplate href="/">Stork Search</Nameplate>
        )}
        <Navigation />
      </Flex>
    </Row>
  </>
);

const Navigation = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot" delayDuration={0}>
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item asChild>
          <NavigationMenu.Link href="/docs/install">Docs</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item asChild>
          <NavigationMenu.Link href="/themes">Themes</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item asChild className="NavigationMenuTrigger">
          <NavigationMenu.Link
            href="https://github.com/jameslittle230/stork"
            className="NavigationMenuTrigger"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Ecosystem
          </NavigationMenu.Trigger>
          <NavigationMenu.Content asChild className="NavigationMenuContent">
            <ul className="List one">
              <a href="/changelog">Releases</a>
              {/* <a href="#">@stork/indexer (NPM)</a>
              <a href="#">@stork/react (NPM)</a> */}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Community
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent" asChild>
            <ul className="List two">
              <a href="https://ko-fi.com/jameslittle230">Donate</a>
              <a href="https://github.com/jameslittle230/stork">Contribute</a>
              <a href="/chat">Discord</a>
              <a href="/sticker">Buy a sticker</a>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {/* <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator> */}
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};
