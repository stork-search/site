import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container } from "./grid";

export const BaseLayout = ({ children }: { children: any }) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);
