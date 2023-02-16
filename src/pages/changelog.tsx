import { Callout } from "@/components/text/Callout";
import { Wrapper } from "@/components/text/Wrapper";
import { releases } from "@/releases/FetchReleases";
import Link from "next/link";

export const getStaticProps = async (context: any) => {
  return {
    props: { releases: await releases },
  };
};

const Changelog = (props: any) => (
  <Wrapper>
    <h1>Changelog</h1>
    <Callout>This page is a work-in-progress</Callout>
    {props.releases.map((release: any) => (
      <>
        <h1>{release.tagName}</h1>
        <Link href={release.url}>
          {new Date(release.publishedAt).toISOString().split("T")[0]}
        </Link>
        <div
          dangerouslySetInnerHTML={{ __html: release.descriptionHTML }}
        ></div>
      </>
    ))}
  </Wrapper>
);

export default Changelog;
