import styled from "styled-components";

export const Button = styled.button`
  background: #104c3c;
  border-radius: 6px;
  border: none;
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  cursor: pointer;
  display: inline-block;
  &:hover {
    background: #156650;
  }
  &:active {
    transform: translateY(2px);
  }
`;
