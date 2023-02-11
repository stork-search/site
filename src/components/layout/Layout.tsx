import { useRouter } from "next/router";
import { BaseLayout } from "./BaseLayout";
import { DocsLayout } from "./DocsLayout";
import { HomeLayout } from "./HomeLayout";

export const Layout = ({ children }: { children: any }) => {
  const router = useRouter();

  if (router.pathname.startsWith("/docs")) {
    return <DocsLayout>{children}</DocsLayout>;
  }

  if (router.pathname === "/") {
    return <HomeLayout>{children}</HomeLayout>;
  }

  return <BaseLayout>{children}</BaseLayout>;
};
