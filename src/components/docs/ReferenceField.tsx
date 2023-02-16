import styled from "styled-components";

const ReferenceFieldWrapper = styled.div`
  padding: 0.7em 0.4em;
  margin: 0.7em 0;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.2);

  p {
    margin: 0.75em 0 0.25em;
    line-height: 1.3;
  }
`;

const ReferenceFieldHeading = styled.h4`
  margin: 0;
  display: flex;
  gap: 1em;
  align-items: baseline;
`;

const ReferenceFieldName = styled.span`
  font-size: 1.4rem;
  font-family: "Inconsolata";
  font-weight: bold;
  margin: 0;
`;

const HeadingMetaText = styled.span`
  color: gray;
  text-transform: uppercase;
  font-size: 0.8em;

  & > span {
    font-weight: bold;
  }
`;

export const ReferenceField = ({
  name,
  defaultValue,
  type,
  children,
}: {
  name: string;
  defaultValue?: string;
  type: string;
  children: any;
}) => (
  <ReferenceFieldWrapper>
    <ReferenceFieldHeading>
      <ReferenceFieldName>{name}</ReferenceFieldName>
      <span>
        <HeadingMetaText>
          {type}
          {defaultValue ? <>, Default: {defaultValue}</> : null}
        </HeadingMetaText>
      </span>
    </ReferenceFieldHeading>
    {children}
  </ReferenceFieldWrapper>
);
