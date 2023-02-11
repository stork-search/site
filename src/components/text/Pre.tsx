import styled from "styled-components";
import { Inconsolata } from "@next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"] });

const CodeWrapperFilename = styled.div`
  background: black;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  color: white;
  padding: 0.5rem 1rem;
  font-weight: bold;

  & + pre,
  & + div > pre {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: 0;
  }
`;

export const Pre = (props: any) => (
  <div className={props.className}>
    {props["data-filename"] && (
      <CodeWrapperFilename>{props["data-filename"]}</CodeWrapperFilename>
    )}
    <InnerPre>{props.children}</InnerPre>
  </div>
);

export const InnerPre = styled.pre`
  background: #222;
  border-radius: 0.5rem;
  padding: 1rem;
  color: white;
  max-width: 100%;
  overflow-x: auto;
`;

export const Code = styled.code`
  font-family: ${inconsolata.style.fontFamily};

  *:not(pre) > & {
    background: var(--code-background-color, hsla(103, 24%, 77%, 1));
    color: hsla(0, 0%, 0%, 1);
    padding: 0.2em 0.5em;
    font-weight: bold;
    border-radius: 0.2em;
  }
`;
