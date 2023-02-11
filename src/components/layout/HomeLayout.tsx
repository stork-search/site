import { Footer } from "../Footer";
import { Header } from "../Header";
import { DocsLink } from "../home/DocsLink";
import { Container } from "./grid";

export const HomeLayout = ({ children }: { children: any }) => (
  <Container>
    <Header nameplateHidden />
    {children}
    <Footer>
      <DocsLink />
    </Footer>
  </Container>
);
