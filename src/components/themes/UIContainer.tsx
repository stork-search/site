import { useState } from "react";
import styled from "styled-components";

const SwatchWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  bottom: 0.5rem;
`;

const SwatchContainer = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 0.2rem;
  background: ${(props: { color: string }) => props.color};
  cursor: pointer;
  border: 1px solid hsla(0, 0%, 50%, 0.5);
`;

const Swatch = ({
  color,
  setBackground,
}: {
  color: string;
  setBackground: Function;
}) => {
  return (
    <SwatchContainer
      color={color}
      onClick={() => {
        setBackground(color);
      }}
    />
  );
};

export const UIContainer = ({ children }: { children: any }) => {
  const [background, setBackground] = useState("#eee");
  return (
    <div
      style={{
        background,
        padding: "1em",
        height: "calc(var(--stork-results-max-height, 25rem) + 10rem)",
        position: "relative",
      }}
    >
      {children}
      <SwatchWrapper>
        {[
          "#000",
          "#333",
          "#888",
          "#aaa",
          "#ccc",
          "#fff",
          "#0074D9",
          "#B10DC9",
          "#FF4136",
          "#FF851B",
          "#FFDC00",
          "#2ECC40",
        ].map((color) => (
          <Swatch key={color} color={color} setBackground={setBackground} />
        ))}
      </SwatchWrapper>
    </div>
  );
};
