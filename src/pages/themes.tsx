import styled from "styled-components";
import { StorkUI, useStork } from "@/stork/StorkProvider";
import { Button } from "@/components/Button";
import { variables } from "@/themes/variables";
import { Variable } from "@/components/themes/Variable";
import { UIContainer } from "@/components/themes/UIContainer";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;

  & > * {
    flex-basis: 0;
    flex-grow: 1;
    min-width: calc(100% / 5 - 0.5em);
  }
`;

const ThemesPage = () => {
  const { stork } = useStork();

  return (
    <>
      <h1>Stork Theme Builder</h1>
      <Container>
        <div>
          <div style={{ position: "sticky", top: "1em" }}>
            <Button
              onClick={(e) => {
                stork.current?.attach("federalist");
              }}
            >
              Show progress bar again
            </Button>

            <UIContainer>
              <StorkUI
                name="federalist"
                placeholder="liberty"
                value="liberty"
              />
            </UIContainer>
          </div>
        </div>
        <div>
          <ButtonContainer>
            <Button>Default</Button>
            <Button>Dark</Button>
            <Button>Flat</Button>
            <Button>Edible</Button>
            <Button>Edible Dark</Button>
          </ButtonContainer>

          {variables.map((variable) => (
            <Variable key={variable.name} variable={variable}></Variable>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ThemesPage;
