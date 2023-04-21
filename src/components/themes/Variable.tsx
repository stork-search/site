import { Variable as VariableType } from "@/themes/variables";
import { useRef } from "react";
import ContentEditable from "react-contenteditable";
import styled from "styled-components";
import { PopoverColorPicker } from "./PopoverColorPicker";

const VariableContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.2em;

  & .token-editor {
    display: inline-block;
    border-radius: 4px;
    font-size: 0.8em;
    padding: 0.2em 0.2em;

    &:hover {
      outline: 1px solid var(--color-border);
    }
  }
`;

const Label = styled.div`
  font-family: "Inconsolata", monospace;
  text-align: right;
  &:after {
    content: ":";
  }
`;

const TokenList = styled.div`
  display: flex;
  gap: 1px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
`;

const changeValueOfToken = (target: HTMLSpanElement, diff: number) => {
  const value = target.innerHTML;
  let number = Number(value.replace(/[^0-9\.-]/g, ""));
  number += diff;
  const newValue = value.replace(
    /[0-9\.-]+/g,
    !Number.isInteger(number) ? number.toFixed(1) : number.toString()
  );
  target.innerHTML = newValue;
  return newValue;
};

export const Variable = ({ variable }: { variable: VariableType }) => {
  const tokenInputs = useRef<ContentEditable[]>([]);

  const setVariable = (newValue?: string | undefined) => {
    console.log(tokenInputs.current);
    const value = tokenInputs.current
      .map((input) => {
        if (typeof input === "string") {
          return input;
        } else {
          return input.getEl().innerHTML;
        }
      })
      .join(" ");
    document.documentElement.style.setProperty(
      variable.name,
      newValue ? newValue : value
    );
  };
  return (
    <VariableContainer>
      <Label>{variable.name}</Label>

      <TokenList>
        {variable.defaultValue.split(" ").map((token, index) => {
          if (token === "[color]") {
            // @ts-ignore
            tokenInputs.current[index] = variable.defaultColors[index];
            return (
              <>
                <PopoverColorPicker
                  // @ts-ignore
                  color={variable.defaultColors[index]}
                  onChange={(newValue) => {
                    // @ts-ignore
                    tokenInputs.current[index] = newValue;
                    setVariable();
                  }}
                />
              </>
            );
          }
          return (
            <ContentEditable
              className="token-editor"
              ref={(el: any) => {
                tokenInputs.current[index] = el;
              }}
              key={index}
              html={token}
              onBlur={() => {}}
              onChange={() => {
                setVariable();
              }}
              onKeyDown={(e) => {
                let delta = 1;
                if (e.altKey) {
                  delta = 0.1;
                }

                if (e.shiftKey) {
                  delta = 10;
                }

                let newValue: string | undefined = undefined;
                if (e.key === "ArrowUp") {
                  e.preventDefault();
                  newValue = changeValueOfToken(
                    e.target as HTMLSpanElement,
                    delta
                  );
                } else if (e.key === "ArrowDown") {
                  e.preventDefault();
                  console.log("DOWN");
                  newValue = changeValueOfToken(
                    e.target as HTMLSpanElement,
                    delta * -1
                  );
                }

                setVariable(newValue);
              }}
              tagName="span"
            />
          );
        })}
      </TokenList>
    </VariableContainer>
  );
};
