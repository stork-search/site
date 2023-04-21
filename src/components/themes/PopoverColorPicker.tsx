import useClickOutside from "@/hooks/useClickOutside";
import { useCallback, useRef, useState } from "react";
import { HslaStringColorPicker } from "react-colorful";
import styled from "styled-components";

const Picker = styled.div`
  position: relative;
`;

const Swatch = styled.div`
  font-size: 0.8em;
  border-radius: 4px;
  padding: 0.2em 0.2em;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
`;

const Popover = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  border-radius: 9px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
`;

export const PopoverColorPicker = ({
  color: initialColor,
  onChange,
}: {
  color: string;
  onChange: (newColor: string) => void;
}) => {
  const popover = useRef();
  const [color, setColor] = useState(initialColor);
  const [isOpen, toggle] = useState(false);

  const onChangeColor = (newColor: string) => {
    setColor(newColor);
    onChange(newColor);
  };

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <Picker>
      <Swatch
        style={{ color: "black", backgroundColor: color }}
        onClick={() => toggle(true)}
      >
        {color}
      </Swatch>

      {isOpen && (
        // @ts-ignore
        <Popover ref={popover}>
          <HslaStringColorPicker color={color} onChange={onChangeColor} />
        </Popover>
      )}
    </Picker>
  );
};
