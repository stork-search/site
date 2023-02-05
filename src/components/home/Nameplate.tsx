import Link from "next/link";
import styled from "styled-components";

const Logo = styled.div`
  width: 13rem;
  height: 13rem;
  background: url("logo.svg") bottom right / 100% 100% no-repeat;
  margin-top: -4rem;
  margin-right: 2rem;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 40rem) {
    width: 10rem;
    height: 10rem;
    margin-top: 0;
  }

  @media (max-width: 30rem) {
    display: none;
    margin: 0.5em;
  }
`;

const Flex = styled.div`
  display: flex;
  padding: 1rem 0;
`;

const PageTitle = styled.h1`
  font-size: 4rem !important;
  line-height: 1;
  margin: 0;
  letter-spacing: -0.03em;
`;

const Tagline = styled.div`
  line-height: 1;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.4em;
  letter-spacing: -0.02em;
`;

const Byline = styled.div`
  margin: 0.6em 0;

  a {
    font-weight: bold;
  }
`;

export const Nameplate = () => (
  <>
    <Flex>
      <Logo />
      <div>
        <PageTitle>Stork</PageTitle>
        <Tagline>
          Impossibly fast web search, made for static&nbsp;sites.
        </Tagline>
        <Byline>
          By <Link href={"https://jameslittle.me"}>James Little</Link>.
        </Byline>
      </div>
    </Flex>
  </>
);
