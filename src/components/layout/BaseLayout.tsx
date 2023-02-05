import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container } from "./grid";

export const BaseLayout = ({
  children,
  hideNameplate = false,
}: {
  children: any;
  hideNameplate?: boolean;
}) => (
  <Container>
    <Header nameplateHidden={hideNameplate} />
    {children}
    <Footer />
  </Container>
);
