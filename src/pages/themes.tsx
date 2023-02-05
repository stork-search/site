import styled from "styled-components";
import * as RXUISlider from "@radix-ui/react-slider";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
`;

const Left = styled.div`
  grid-column: 1;
`;

const Right = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.div`
  font-family: "Inconsolata", monospace;
`;

const Flex = styled.div`
  display: flex;
  gap: 2px;
  justify-content: space-between;
`;

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

const Input = ({
  cssVariable,
  defaultValue,
}: {
  cssVariable: string;
  defaultValue: string;
}) => {
  return (
    <Flex>
      <Label>{cssVariable}</Label>
      <input
        type="text"
        style={{ width: "100px" }}
        defaultValue={defaultValue}
        onChange={(e) => {
          document.documentElement.style.setProperty(
            cssVariable,
            e.target.value
          );
        }}
      />
    </Flex>
  );
};

export default function ThemesPage() {
  return (
    <>
      <h1>Stork Theme Builder</h1>
      <Grid>
        <Left>
          <StorkUI />
        </Left>
        <Right>
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
          <Input
            cssVariable="--stork-input-focus-outline"
            defaultValue="none"
          />
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
          <Input
            cssVariable="--stork-progress-border-radius"
            defaultValue="0"
          />
          <Input
            cssVariable="--stork-progress-transition"
            defaultValue="width 0.25s ease, opacity 0.4s ease 0.4s"
          />
        </Right>
      </Grid>
    </>
  );
}
