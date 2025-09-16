import styled from "styled-components";

interface ContainerProps {
  width?: string | null;
  height?: string | null;
  $margin?: string | null;
  $padding?: string | null;
  flexDirection?: string | null;
  justifyContent?: string | null;
  $alignItems?: string | null;
}

interface TextProps {
  width?: string | null;
  bold?: string | null;
}

interface SectionProps {
  width?: string | null;
}

export const Section = styled.div<SectionProps>`
  border: 1px solid red;
  width: ${({ width }) => width || "auto"};
  padding: 3px;
`;

export const Card = styled.div`
  // border: 1px solid red;
  background: #ffffff;
`;

export const LabelSection = styled.div`
  // border: 1px solid green;
  display: flex;
  gap: 2px;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.h3`
  // border: 1px solid red;
  font-weight: bold;
  flex: display;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const TextContainer = styled.div<TextProps>`
  // border: 1px solid blue;
  font-weight: ${({ bold }) => bold || "normal"};
  width: ${({ width }) => width || "auto"};
  flex: display;
  justify-content: center;
  align-items: center;
  margin: 1%;
  white-space: nowrap;
`;

export const Container = styled.div<ContainerProps>`
  // border: 1px solid red;
  display: flex;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  margin: ${({ $margin }) => $margin || "0"};
  padding: ${({ $padding }) => $padding || "0"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
`;

export const MainContainer = styled.div<ContainerProps>`
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  margin: ${({ $margin }) => $margin || "0"};
  padding: ${({ $padding }) => $padding || "0"};
`;
