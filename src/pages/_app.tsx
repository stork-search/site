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

const StorkProvider = ({ children }: { children: any }) => <>{children}</>;
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
  const components = {
    wrapper: Wrapper,
    pre: Pre,
    code: Code,
    Callout,
  };

  console.log(pageProps);

  const getLayout =
    // @ts-ignore
    Component.GetLayout || ((page) => <>{page}</>);

  return (
    <StorkProvider>
      <ReleasesProvider>
        <PreferencesProvider>
          <GlobalStyle />
          <Shell>
            <MDXProvider components={components}>
              {getLayout(<Component {...pageProps} />)}
            </MDXProvider>
          </Shell>
        </PreferencesProvider>
      </ReleasesProvider>
    </StorkProvider>
  );
}
