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
  background-color: var(--color-brand-subdued);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
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
