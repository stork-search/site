import React from "react";

import Link from "next/link";
import styled from "styled-components";
import { Row } from "./layout/grid";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

const RowPaddingContainer = styled.div`
  --row-padding: 0.75rem;
`;
const NavigationContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;

  & > * {
    align-self: center;
  }
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
  <RowPaddingContainer>
    <Row background="alert">
      This is the site for the beta version of Stork Search.{" "}
      <a href="https://stork-search.net">Take me back to stable!</a>
    </Row>
    <Row background="accent">
      <NavigationContainer>
        {nameplateHidden ? (
          <span>&nbsp;</span>
        ) : (
          <div>
            <Nameplate href="/">Stork Search</Nameplate>
          </div>
        )}
        <Navigation />
      </NavigationContainer>
    </Row>
  </RowPaddingContainer>
);

import classNames from "classnames";

const Navigation = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot" delayDuration={0}>
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="NavigationMenuLink"
            href="/docs/install"
          >
            Docs
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="/themes">
            Themes
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Ecosystem <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              {/* @ts-ignore */}
              <ListItem href="/changelog" title="Changelog">
                Stork releases and product updates
              </ListItem>
              {/* <ListItem
                href="https://icons.radix-ui.com/"
                title="@stork-search/ui"
              >
                NPM package for embedding the search UI on your webpage (Browser
                only)
              </ListItem>
              <ListItem
                href="https://icons.radix-ui.com/"
                title="@stork-search/index"
              >
                NPM package for building search indexes (Server only)
              </ListItem>
              <ListItem
                href="https://icons.radix-ui.com/"
                title="@stork-search/react"
              >
                (Experimental) NPM package for embedding the search UI in your
                React app
              </ListItem> */}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Community <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two tight">
              <ListItem
                title="Donate"
                href="https://ko-fi.com/jameslittle230"
              />
              <ListItem
                title="Forum"
                href="https://github.com/jameslittle230/stork/discussions"
              />
              <ListItem title="Discord" href="/chat" />
              <ListItem title="Buy a sticker" href="/sticker" />
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="NavigationMenuLink"
            href="https://github.com/jameslittle230/stork"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

// @ts-ignore
// eslint-disable-next-line react/display-name
const ListItem = React.forwardRef(
  // @ts-ignore
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          {children && <p className="ListItemText">{children}</p>}
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

// const Navigation = () => {
//   return (
//     <NavigationMenu.Root className="NavigationMenuRoot" delayDuration={0}>
//       <NavigationMenu.List className="NavigationMenuList">
//         <NavigationMenu.Item asChild>
//           <NavigationMenu.Link href="/docs/install">Docs</NavigationMenu.Link>
//         </NavigationMenu.Item>
//         <NavigationMenu.Item asChild>
//           <NavigationMenu.Link href="/themes">Themes</NavigationMenu.Link>
//         </NavigationMenu.Item>
//         <NavigationMenu.Item asChild className="NavigationMenuTrigger">
//           <NavigationMenu.Link
//             href="https://github.com/jameslittle230/stork"
//             className="NavigationMenuTrigger"
//           >
//             Github
//           </NavigationMenu.Link>
//         </NavigationMenu.Item>
//         <NavigationMenu.Item>
//           <NavigationMenu.Trigger className="NavigationMenuTrigger">
//             Ecosystem
//           </NavigationMenu.Trigger>
//           <NavigationMenu.Content asChild className="NavigationMenuContent">
//             <ul className="List one">
//               <Link href="/changelog">Changelog</Link>
//               <Link href="https://crates.io/crates/stork-search">
//                 stork-search (crates.io)
//               </Link>
//               <a href="#">@stork-search/ui (NPM)</a>
//               <a href="#">@stork-search/index (NPM)</a>
//               <a href="#">@stork-search/react (NPM)</a>
//             </ul>
//           </NavigationMenu.Content>
//         </NavigationMenu.Item>

//         <NavigationMenu.Item>
//           <NavigationMenu.Trigger className="NavigationMenuTrigger">
//             Community
//           </NavigationMenu.Trigger>
//           <NavigationMenu.Content className="NavigationMenuContent" asChild>
//             <ul className="List two">
//               <Link href="https://ko-fi.com/jameslittle230">Donate</Link>
//               <Link href="https://github.com/jameslittle230/stork">
//                 Contribute
//               </Link>
//               <Link href="/chat">Discord</Link>
//               <Link href="/sticker">Buy a sticker</Link>
//             </ul>
//           </NavigationMenu.Content>
//         </NavigationMenu.Item>
//         {/* <NavigationMenu.Indicator className="NavigationMenuIndicator">
//           <div className="Arrow" />
//         </NavigationMenu.Indicator> */}
//       </NavigationMenu.List>

//       <div className="ViewportPosition">
//         <NavigationMenu.Viewport className="NavigationMenuViewport" />
//       </div>
//     </NavigationMenu.Root>
//   );
// };
