import { StorkUI } from "@/stork/StorkProvider";
import { useContext } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Csat } from "../docs/Csat";
import { DocsNavigation } from "../docs/DocsNavigation";
import { DocsPreferences } from "../docs/DocsPreferences";
import { Footer } from "../Footer";
import { Header } from "../Header";
import {
  CenterColumn,
  Grid,
  LeftColumn,
  MobileOnly,
  MobileSideColumn,
  RightColumn,
  Row,
} from "./grid";

const Flex = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const Grow = styled.div`
  flex-grow: 1;
`;

const DocsSearch = () => {
  const { left, right, toggleLeft, toggleRight } = useContext(MobileSideColumn);
  return (
    <MobileOnly>
      <Row background="offset">
        <Flex>
          <MobileOnly>
            <Button onClick={toggleLeft}>Navigation</Button>
          </MobileOnly>
          {/* <Grow>
          <StorkUI name="docs" placeholder="Search the docs..." />
        </Grow> */}
          <MobileOnly>
            <Button onClick={toggleRight}>Preferences</Button>
          </MobileOnly>
        </Flex>
      </Row>
    </MobileOnly>
  );
};

export const DocsLayout = ({ children }: { children: any }) => {
  return (
    <Grid>
      <CenterColumn>
        <Header />
      </CenterColumn>
      <CenterColumn>
        <DocsSearch />
      </CenterColumn>
      <LeftColumn>
        <DocsNavigation />
      </LeftColumn>
      <CenterColumn>{children}</CenterColumn>
      <RightColumn>
        <DocsPreferences />
      </RightColumn>
      <CenterColumn>
        <Csat />
        <Footer />
      </CenterColumn>
    </Grid>
  );
};
