import styled from "styled-components";

export const Grid = styled.div`
  --content-width: 42rem;
  --sidebar-width: 20rem;
  display: grid;
  grid-template-columns:
    1fr var(--sidebar-width) 2em var(--content-width) 2em var(--sidebar-width)
    1fr;
`;

export const CenterColumn = styled.div`
  grid-column: 4;
`;
export const LeftColumn = styled.div`
  grid-column: 2;
`;
export const RightColumn = styled.div`
  grid-column: 6;
`;

export const Container = ({ children }: { children: any }) => (
  <Grid>
    <CenterColumn>{children}</CenterColumn>
  </Grid>
);

const colors = {
  accent: "rgb(190, 210, 182)",
  offset: "rgba(0, 0, 0, 0.1)",
  alert: "#ede977",
};

export const Row = styled.div<{ background?: keyof typeof colors }>`
  background-color: ${({ background }) =>
    background ? colors[background] : "transparent"};
  margin-left: calc(-50vw + var(--content-width) / 2);
  margin-right: calc(-50vw + var(--content-width) / 2);
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: calc(50vw - var(--content-width) / 2);
  padding-right: calc(50vw - var(--content-width) / 2);
`;

export const Wide = styled.div`
  background-color: green;
  margin-left: -4rem;
  margin-right: -4rem;
  padding-left: 4rem;
  padding-right: 4rem;
`;
