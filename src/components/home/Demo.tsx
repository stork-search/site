import { StorkUI } from "@/stork/StorkProvider";
import Link from "next/link";
import styled from "styled-components";
import { Row } from "../layout/grid";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;

const Meta = styled.div`
  text-transform: uppercase;
  color: hsla(0, 0%, 0%, 0.8);
  font-weight: bold;
  letter-spacing: 0.05em;
  font-size: 0.8em;
  margin: 0.25em 0;
`;

export const Demo = () => (
  <Row background="offset">
    <Flex>
      <Meta>
        Search the{" "}
        <Link href="https://www.youtube.com/watch?v=DPgE7PNzXag">
          Federalist Papers
        </Link>
        :
      </Meta>
      <StorkUI name="federalist" placeholder="liberty"></StorkUI>
    </Flex>
  </Row>
);
