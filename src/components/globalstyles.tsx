import { createGlobalStyle } from "styled-components";

import { Inconsolata } from "@next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    --brand-color: hsl(103 24% 77%);
    --row-padding: 1.25em;
    --link-color: hsl(199 91% 31%);
  }

  * {
    box-sizing: border-box;
    // position: relative;
  }

  a:link {
    color: var(--link-color);
    font-weight: bold;
  }

  code {
    font-family: ${inconsolata.style.fontFamily};

  *:not(pre) > & {
    background: var(--brand-color);
    color: hsla(0, 0%, 0%, 1);
    padding: 0.2em 0.5em;
    font-weight: bold;
    border-radius: 0.2em;
  }
  }
`;

export default GlobalStyle;
