import styled from "styled-components";

export const Button = styled.button`
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  background: white;
  font-weight: bold;
  padding: 0.4em 0.75em;
  cursor: pointer;
  display: inline-block;
  transition: transform 0.1s ease-in-out;

  &:active {
    transform: translateY(1px);
  }
`;
