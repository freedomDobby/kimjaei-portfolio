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
  font-size: clamp(12px, 1.2vw, 15px); /* 최소 12px ~ 최대 15px */
  font-weight: bold;
  margin: clamp(4px, 0.5vh, 7px) 0; /* 화면 크기에 따라 마진 */
  color: #444;
`;

const Square = styled.div<{ $filled: boolean }>`
  width: clamp(10px, 2vw, 20px);
  height: clamp(10px, 2vw, 20px);
  border-radius: 10%;
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
