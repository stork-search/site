import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import GlobalStyle from "@/components/globalstyles";
import { Wrapper } from "@/components/text/Wrapper";
import { Code, Pre } from "@/components/text/Pre";
import { Callout } from "@/components/text/Callout";
import { useRouter } from "next/router";
import { PreferencesProvider } from "@/components/docs/PreferencesProvider";
import { HeadContents } from "@/components/HeadContents";
import { StorkProvider } from "@/stork/StorkProvider";
import { Layout } from "@/components/layout/Layout";
import { ReleasesProvider } from "@/releases/Releases";

import "@/styles/prism.css";
import "@/styles/navigation.css";
import "@/styles/slider.css";

declare global {
  interface Window {
    goatcounter: any;
  }
}

const MDXComponents = {
  wrapper: Wrapper,
  pre: Pre,
  code: Code,
  Callout,
};

const storkIndexes = {
  federalist: {
    url: "https://files.stork-search.net/releases/v2.0.0-beta.1/federalist.st",
  },
  "3b1b": {
    url: "https://files.stork-search.net/releases/v2.0.0-beta.1/3b1b.st",
  },
};

const tickAnalytics = (path: string) => {
  if (
    typeof window !== "undefined" &&
    typeof window.goatcounter !== "undefined"
  ) {
    window.goatcounter.count({ path });
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  router.events?.on("routeChangeComplete", () => {
    tickAnalytics(router.asPath);
  });

  return (
    <StorkProvider indexes={storkIndexes}>
      <HeadContents pageProps={pageProps} />
      <ReleasesProvider releases={pageProps.releases}>
        <PreferencesProvider>
          <GlobalStyle />
          <Layout>
            <MDXProvider components={MDXComponents}>
              <Component {...pageProps} />
            </MDXProvider>
          </Layout>
        </PreferencesProvider>
      </ReleasesProvider>
    </StorkProvider>
  );
}
