import { DocsNavigation } from "../docs/DocsNavigation";
import { DocsPreferences } from "../docs/DocsPreferences";
import { Footer } from "../Footer";
import { Header } from "../Header";
import {
  CenterColumn,
  Container,
  Grid,
  LeftColumn,
  RightColumn,
  Row,
} from "./grid";

const StorkUI = () => (
  <div className="stork-wrapper">
    <input
      data-stork="federalist"
      className="stork-input"
      placeholder="federalist"
    ></input>
    <div data-stork="federalist-output" className="stork-output"></div>
  </div>
);

const DocsSearch = () => (
  <Row background="offset">
    <StorkUI />
  </Row>
);

export const DocsLayout = ({ children }: { children: any }) => (
  <Grid>
    <CenterColumn>
      <Header />
    </CenterColumn>
    {/* <CenterColumn>
      <DocsSearch />
    </CenterColumn> */}
    <LeftColumn>
      <DocsNavigation />
    </LeftColumn>
    <CenterColumn>{children}</CenterColumn>
    <RightColumn>
      <DocsPreferences />
    </RightColumn>
    <CenterColumn>
      <Footer />
    </CenterColumn>
  </Grid>
);
