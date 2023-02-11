import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import GlobalStyle from "@/components/globalstyles";
import { Wrapper } from "@/components/text/Wrapper";
import { Code, Pre } from "@/components/text/Pre";
import "@/styles/prism.css";
import "@/styles/navigation.css";
import "@/styles/slider.css";

import { Callout } from "@/components/text/Callout";
import { BaseLayout } from "@/components/layout/BaseLayout";
import { useRouter } from "next/router";
import { DocsLayout } from "@/components/layout/DocsLayout";
import { PreferencesProvider } from "@/components/docs/PreferencesProvider";
import { HeadContents } from "@/components/HeadContents";
import { useEffect } from "react";
import { StorkProvider } from "@/stork/StorkProvider";

const ReleasesProvider = ({ children }: { children: any }) => <>{children}</>;

const Shell = ({ children }: { children: any }) => {
  const router = useRouter();

  if (router.pathname.startsWith("/docs")) {
    return <DocsLayout>{children}</DocsLayout>;
  }

  if (router.pathname === "/") {
    return <BaseLayout hideNameplate>{children}</BaseLayout>;
  }

  return <BaseLayout>{children}</BaseLayout>;
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      // @ts-ignore
      typeof window.goatcounter !== "undefined"
    ) {
      // @ts-ignore
      window.goatcounter.count({
        path: router.asPath,
      });
    }
  }, [router]);

  const components = {
    wrapper: Wrapper,
    pre: Pre,
    code: Code,
    Callout,
  };

  return (
    <StorkProvider
      indexes={{
        federalist: {
          url: "https://files.stork-search.net/releases/v2.0.0-beta.1/federalist.st",
        },
        "3b1b": {
          url: "https://files.stork-search.net/releases/v2.0.0-beta.1/3b1b.st",
        },
      }}
    >
      <HeadContents pageProps={pageProps} />
      <ReleasesProvider>
        <PreferencesProvider>
          <GlobalStyle />
          <Shell>
            <MDXProvider components={components}>
              <Component {...pageProps} />
            </MDXProvider>
          </Shell>
        </PreferencesProvider>
      </ReleasesProvider>
    </StorkProvider>
  );
}
