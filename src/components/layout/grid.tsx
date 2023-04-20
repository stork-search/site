import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";

export const GridContainer = styled.div`
  position: relative;
  --content-width: 42rem;
  --sidebar-width: minmax(0, 20rem);
  display: grid;
  grid-template-columns:
    minmax(1rem, 1fr)
    [l-sidebar] var(--sidebar-width)
    2rem
    [content] var(--content-width)
    2rem
    [r-sidebar] var(--sidebar-width)
    minmax(1rem, 1fr);

  @media (max-width: 61rem) {
    grid-template-columns: 2rem [content] minmax(0, 1fr) 2rem;
  }
`;

export const MobileOnly = styled.span`
  display: none;
  @media (max-width: 72rem) {
    display: inline;
  }
`;

export const CenterColumn = styled.div`
  grid-column: content;
`;

const SideColumn = styled.div`
  @media (max-width: 72rem) {
    grid-column: none !important;
    position: absolute;
    height: 80vh;
    margin-top: 10vh;
    width: 90vw;
    max-width: 30rem;
    background-color: white;
    z-index: 100;
    padding: 1rem;
    border: 1px solid black;
    transition: transform 0.1s ease-out;
  }
`;

interface SideColumnProps {
  mobileVisible: boolean;
}

export const LeftColumnContainer = styled(SideColumn)<SideColumnProps>`
  grid-column: l-sidebar;

  @media (max-width: 72rem) {
    left: 0;
    border-radius: 0rem 1rem 1rem 0rem;
    border-left: none;
    transform: translateX(${(props) => (props.mobileVisible ? "0" : "-100%")});
  }
`;
export const RightColumnContainer = styled(SideColumn)<SideColumnProps>`
  grid-column: r-sidebar;

  @media (max-width: 72rem) {
    right: 0;
    border-radius: 1rem 0 0 1rem;
    border-right: none;
    transform: translateX(${(props) => (props.mobileVisible ? "0" : "100%")});
  }
`;

export const MobileSideColumn = createContext({
  left: false,
  right: false,
  toggleLeft: () => {},
  toggleRight: () => {},
});

export const Grid = ({ children }: { children: any }) => {
  const [leftMobileVisible, setLeftMobileVisible] = useState(false);
  const [rightMobileVisible, setRightMobileVisible] = useState(false);

  const toggleLeft = () => setLeftMobileVisible(!leftMobileVisible);
  const toggleRight = () => setRightMobileVisible(!rightMobileVisible);

  const router = useRouter();

  if (router.events) {
    router.events.on("routeChangeStart", () => {
      setLeftMobileVisible(false);
      setRightMobileVisible(false);
    });
  }

  return (
    <MobileSideColumn.Provider
      value={{
        left: leftMobileVisible,
        right: rightMobileVisible,
        toggleLeft,
        toggleRight,
      }}
    >
      <GridContainer>{children}</GridContainer>
    </MobileSideColumn.Provider>
  );
};

export const LeftColumn = ({ children }: { children: any }) => {
  const { left, toggleLeft } = useContext(MobileSideColumn);
  return (
    <LeftColumnContainer mobileVisible={left}>
      <MobileOnly>
        <Button onClick={toggleLeft}>Close</Button>
      </MobileOnly>
      {children}
    </LeftColumnContainer>
  );
};

export const RightColumn = ({ children }: { children: any }) => {
  const { right, toggleRight } = useContext(MobileSideColumn);
  return (
    <RightColumnContainer mobileVisible={right}>
      <MobileOnly>
        <Button onClick={toggleRight}>Close</Button>
      </MobileOnly>
      {children}
    </RightColumnContainer>
  );
};

export const Container = ({ children }: { children: any }) => (
  <Grid>
    <CenterColumn>{children}</CenterColumn>
  </Grid>
);

const colors = {
  accent: "var(--color-brand)",
  offset: "rgba(0, 0, 0, 0.1)",
  alert: "#ede977",
};

export const Row = styled.div<{ background?: keyof typeof colors }>`
  background-color: ${({ background }) =>
    background ? colors[background] : "transparent"};
  margin-left: calc(-50vw + var(--content-width) / 2);
  margin-right: calc(-50vw + var(--content-width) / 2);
  padding-top: var(--row-padding);
  padding-bottom: var(--row-padding);
  padding-left: calc(50vw - var(--content-width) / 2);
  padding-right: calc(50vw - var(--content-width) / 2);

  @media (max-width: 61rem) {
    margin-left: -2rem;
    margin-right: -2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const Wide = styled.div`
  background-color: green;
  margin-left: -4rem;
  margin-right: -4rem;
  padding-left: 4rem;
  padding-right: 4rem;
`;
