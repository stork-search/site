import React from "react";

import Link from "next/link";
import styled from "styled-components";
import { Row } from "./layout/grid";
import { Navigation } from "./Navigation";

const RowPaddingContainer = styled.div`
  --row-padding: 1rem;
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
