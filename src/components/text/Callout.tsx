import styled from "styled-components";

const Title = styled.p`
  text-transform: uppercase;
  color: hsla(0, 0%, 0%, 0.8);
  font-weight: bold;
  letter-spacing: 0.05em;
  font-size: 0.8em;
  margin: 0.25em 0 !important;
`;

const CalloutWrapper = styled.div`
  display: flex;
  background-color: #e0e5dd;
  border: 1px solid hsla(0, 0%, 0%, 0.2);
  border-radius: 0.5em;
  padding: 1em;
  font-size: 0.9em;
  line-height: 1.2;
  margin: 1.4em 0;

  p {
    margin: 0;
  }
`;

export const Callout = ({ children }: { children: any }) => {
  return (
    <CalloutWrapper>
      <div>
        <Title>Note:</Title>
        {children}
      </div>
    </CalloutWrapper>
  );
};
