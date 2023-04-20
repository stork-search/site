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

      
    --row-padding: 1.25em;
      
    --color-brand: hsl(103 24% 77%);
    --color-brand-subdued: hsl(103 13% 88%);
    --color-brand-dark: hsl(103 38% 25%);
    --color-link: hsl(199 91% 31%);
    --color-border: hsl(0 0% 0% / 0.2);

    --border-radius: 8px;
  }

  * {
    box-sizing: border-box;
  }

  a:link {
    color: var(--color-link);
    font-weight: bold;
  }

  code {
    font-family: ${inconsolata.style.fontFamily};

  *:not(pre) > & {
    background: var(--color-brand);
    color: hsla(0, 0%, 0%, 1);
    padding: 0.2em 0.5em;
    font-weight: bold;
    border-radius: 0.2em;
  }
  }
`;

export default GlobalStyle;
