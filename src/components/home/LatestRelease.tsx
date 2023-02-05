import Link from "next/link";
import styled from "styled-components";
import { Row } from "../layout/grid";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 1rem 0;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: hsla(0, 0%, 0%, 0.8);
  font-weight: bold;
  letter-spacing: 0.05em;
  font-size: 0.8em;
  margin: 0.25em 0 !important;
`;

const ReleaseNumber = styled.h2`
  font-size: 3.6rem !important;
  margin: 0 !important;
  line-height: 1;
`;

const ReleaseDate = styled.p`
  font-size: 1.1em;
  color: #434343;
  font-weight: bold;
  line-height: 17px;
  margin: 0 !important;
  margin-top: 0.4em !important;
`;

const CTA = styled.p`
  padding-right: 0.5em;
  font-weight: bold;
  font-size: 1.4em;
  margin: 0 !important;
  margin-top: 0.5em !important;
`;

export const LatestRelease = () => (
  <Row background="accent">
    <Flex>
      <div>
        <Title>Latest version:</Title>
        <ReleaseNumber>2.0.0</ReleaseNumber>
        <ReleaseDate>Released on 2023-02-04</ReleaseDate>
      </div>
      <CTA>
        <Link href="https://github.com/jameslittle230/stork">
          View on Github →
        </Link>
      </CTA>
    </Flex>
  </Row>
);
