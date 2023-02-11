import styled from "styled-components";
import { StorkUI, useStork } from "@/stork/StorkProvider";
import { Button } from "@/components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const UIContainer = styled.div`
background: #eee;
padding: 1em;
height: calc(var(--stork-results-max-height, 25rem) + 10rem);
}`;

const Right = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.div`
  font-family: "Inconsolata", monospace;
  text-align: right;
`;

const PreferenceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  justify-content: space-between;
  margin-bottom: 0.2em;
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

const Input = ({
  cssVariable,
  defaultValue,
}: {
  cssVariable: string;
  defaultValue: string;
}) => {
  return (
    <PreferenceContainer>
      <Label>{cssVariable}</Label>
      <input
        type="text"
        defaultValue={defaultValue}
        onChange={(e) => {
          document.documentElement.style.setProperty(
            cssVariable,
            e.target.value
          );
        }}
      />
    </PreferenceContainer>
  );
};

const ThemesPage = () => {
  const { stork } = useStork();

  return (
    <>
      <h1>Stork Theme Builder</h1>
      <Container>
        <Button
          onClick={(e) => {
            stork.current?.attach("federalist");
          }}
        >
          Show progress bar again
        </Button>

        <UIContainer>
          <StorkUI name="federalist" placeholder="liberty" value="liberty" />
        </UIContainer>

        <ButtonContainer>
          <Button>Default</Button>
          <Button>Dark</Button>
          <Button>Flat</Button>
          <Button>Edible</Button>
          <Button>Edible Dark</Button>
        </ButtonContainer>

        <Input cssVariable="--stork-input-width" defaultValue="100%" />
        <Input cssVariable="--stork-input-height" defaultValue="auto" />
        <Input cssVariable="--stork-input-font-size" defaultValue="1em" />
        <Input cssVariable="--stork-input-y-padding" defaultValue="0.6em" />
        <Input cssVariable="--stork-input-x-padding" defaultValue="0.9em" />
        <Input
          cssVariable="--stork-input-box-shadow"
          defaultValue="inset 0 0.1em 0.3em hsla(0, 0%, 0%, 0.1)"
        />
        <Input
          cssVariable="--stork-input-border"
          defaultValue="1px solid hsl(0, 0%, 65%)"
        />
        <Input cssVariable="--stork-input-border-radius" defaultValue="8px" />
        <Input
          cssVariable="--stork-input-background"
          defaultValue="hsla(0, 0%, 97%)"
        />
        <Input cssVariable="--stork-text-color" defaultValue="#212529" />
        <Input cssVariable="--stork-font-family" defaultValue="inherit" />
        <Input cssVariable="--stork-input-focus-outline" defaultValue="none" />
        <Input cssVariable="--stork-progress-display" defaultValue="block" />
        <Input
          cssVariable="--stork-progress-background"
          defaultValue="#339af0"
        />
        <Input
          cssVariable="--stork-progress-glow-color"
          defaultValue="#4dabf7"
        />
        <Input cssVariable="--stork-progress-box-shadow" defaultValue="TBD" />
        <Input
          cssVariable="--stork-progress-mix-blend-mode"
          defaultValue="normal"
        />
        <Input cssVariable="--stork-progress-filter" defaultValue="none" />
        <Input cssVariable="--stork-progress-height" defaultValue="1px" />
        <Input cssVariable="--stork-progress-border-radius" defaultValue="0" />
        <Input
          cssVariable="--stork-progress-transition"
          defaultValue="width 0.25s ease, opacity 0.4s ease 0.4s"
        />
      </Container>
    </>
  );
};

export default ThemesPage;
