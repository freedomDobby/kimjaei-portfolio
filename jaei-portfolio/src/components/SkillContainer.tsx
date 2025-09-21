import styled from "styled-components";
import { TextContainer } from "./layouts/FlexBox";

interface SkillProps {
  skill: string;
  description: string;
  level: number; // 1 ~ 5
}

export const SkillGroup = styled.div`
  // border: 1px solid green;
  margin-bottom: 7px;
`;

export const SkillGroupTitle = styled.h3`
  font-size: 15px;
  font-weight: bold;
  margin: 7px 0;
  color: #444;
`;

const Square = styled.div<{ $filled: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: ${({ $filled }) => ($filled ? "#4A90E2" : "#ddd")};
`;

const SquareGroup = styled.div`
  display: flex;
  gap: 4px;
`;

function SkillContainer({ skill, description, level }: SkillProps) {
  return (
    <TextContainer width="100%">
      {/* skill 이름 */}
      <div style={{ width: "15%", fontSize: "14px", fontWeight: "bold" }}>
        {skill}
      </div>

      {/* 네모 등급 */}
      <SquareGroup style={{ width: "20%" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Square key={i} $filled={i < level} />
        ))}
      </SquareGroup>

      {/* 설명 */}
      <TextContainer style={{ width: "65%", fontSize: "13px" }}>
        {description}
      </TextContainer>
    </TextContainer>
  );
}

export default SkillContainer;
