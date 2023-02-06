import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

export const HeadContents = ({ pageProps }: { pageProps: any }) => {
  const router = useRouter();
  return (
    <>
      <Script src="https://files.stork-search.net/releases/1.6.0/stork.js" />
      <Head>
        <title>
          {pageProps.pageTitle ? `${pageProps.pageTitle} • ` : ""}Stork Search -
          Impossibly Fast Web Search
        </title>

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta
          property="og:title"
          content={`${
            pageProps.pageTitle ? `${pageProps.pageTitle} • ` : ""
          }Stork Search`}
        />
        <meta
          property="og:description"
          content="Impossibly fast web search, built for static sites."
        />
        <meta property="og:image" content="/og-banner.png" />
        <meta
          property="og:url"
          content={`https://stork-search.net${router.pathname}`}
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:site_name" content="Stork Search" />
        <meta
          name="twitter:image:alt"
          content="The Stork Logo, a happy bird holding a magnifying glass"
        />

        <link
          rel="stylesheet"
          href={`https://files.stork-search.net/releases/1.6.0/basic.css`}
        />

        <script>stork.initialize()</script>
      </Head>
    </>
  );
};
