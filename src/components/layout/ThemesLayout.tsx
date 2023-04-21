import { Footer } from "../Footer";
import { Header } from "../Header";
import { CenterColumn, Grid } from "./grid";

export const ThemesLayout = ({ children }: { children: any }) => {
  return (
    <Grid>
      <CenterColumn>
        <Header />
      </CenterColumn>

      <div style={{ gridColumn: "2 / -2" }}>{children}</div>

      <CenterColumn>
        <Footer />
      </CenterColumn>
    </Grid>
  );
};
