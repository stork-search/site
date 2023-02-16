import Link from "next/link";
import styled from "styled-components";
import { Row } from "../layout/grid";

const Text = styled.p`
  font-weight: bold;
  font-size: 2.2rem;
`;

export const DocsLink = () => (
  <Row background="offset">
    <Text>
      Next: <Link href="/docs/install">Read the Docs →</Link>
    </Text>
  </Row>
);
