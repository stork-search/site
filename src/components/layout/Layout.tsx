import { useRouter } from "next/router";
import { BaseLayout } from "./BaseLayout";
import { DocsLayout } from "./DocsLayout";
import { HomeLayout } from "./HomeLayout";
import { ThemesLayout } from "./ThemesLayout";

export const Layout = ({ children }: { children: any }) => {
  const router = useRouter();

  if (router.pathname.startsWith("/docs")) {
    return <DocsLayout>{children}</DocsLayout>;
  }

  if (router.pathname === "/") {
    return <HomeLayout>{children}</HomeLayout>;
  }

  if (router.pathname === "/themes") {
    return <ThemesLayout>{children}</ThemesLayout>;
  }

  return <BaseLayout>{children}</BaseLayout>;
};
