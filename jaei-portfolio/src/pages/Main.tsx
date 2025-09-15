//mui
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

// assets
import { MdEmail, MdWorkHistory } from "react-icons/md";
import { FaBuilding, FaYoutube } from "react-icons/fa";
import jaei2 from "../assets/jaei2.jpg";
// Component
import {
  Container,
  MainContainer,
  Section,
  Title,
} from "../components/layouts/FlexBox";
import SkillContainer, {
  SkillGroup,
  SkillGroupTitle,
} from "../components/SkillContainer";

function Main() {
  return (
    <Container alignItems="start">
      <MainContainer width="15%" margin="20px auto" padding="10px">
        <Card variant="outlined" sx={{ p: 2, alignItems: "center" }}>
          {/* 프로필 사진 */}
          <img
            src={jaei2}
            alt="profile"
            width="160"
            style={{ borderRadius: "8px", marginBottom: "12px" }}
          />

          {/* 이름 */}
          <CardContent sx={{ textAlign: "center" }}>
            <Typography level="title-lg" sx={{ fontWeight: "bold" }}>
              김재이
            </Typography>
            <Typography level="body-sm" textColor="text.secondary">
              Front-end Developer
            </Typography>
          </CardContent>

          {/* Contact */}
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Typography
              component="a"
              href="mailto:dobbykim0320@gmail.com"
              startDecorator={<MdEmail />}
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              dobbykim0320@gmail.com
            </Typography>

            <Typography
              component="a"
              href="https://www.youtube.com/@EAST_E"
              target="_blank"
              rel="noopener noreferrer"
              startDecorator={<FaYoutube color="red" />}
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              EAST_재E
            </Typography>
          </CardContent>
        </Card>

        {/* About Me */}
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Typography
              level="title-md"
              sx={{ mb: 1, fontWeight: "bold" }}
              startDecorator={<MdWorkHistory />}
            >
              Experience
            </Typography>
            <Typography level="body-sm" textColor="text.secondary">
              1년 3개월
            </Typography>
            <Typography
              level="title-md"
              sx={{ mb: 1, fontWeight: "bold" }}
              startDecorator={<FaBuilding />}
            >
              Company
            </Typography>
            <Typography level="body-sm" textColor="text.secondary">
              Bigtorage (2024.07 입사)
            </Typography>
          </CardContent>
        </Card>
      </MainContainer>
      {/*  */}
      <MainContainer width="85%" margin="20px auto" padding="10px">
        {/* Skill */}
        <Section width="100%">
          <Title>🌟 Skill</Title>

          <div style={{ display: "flex", gap: "15px" }}>
            {/* 왼쪽 컬럼 */}
            <div style={{ flex: 1 }}>
              {/* 언어 */}
              <SkillGroup>
                <SkillGroupTitle>💻 Language</SkillGroupTitle>
                <SkillContainer
                  skill="Java"
                  description="백준 골드5 수준 문제 해결 가능"
                  level={3}
                />
                <SkillContainer
                  skill="TypeScript"
                  description="Nuxt/Nest 프로젝트 적용, 안정적인 코드 작성"
                  level={4}
                />
                <SkillContainer
                  skill="JavaScript"
                  description="React/Vue 프로젝트 활용 경험"
                  level={4}
                />
              </SkillGroup>

              {/* 라이브러리/프레임워크 */}
              <SkillGroup>
                <SkillGroupTitle>📚 Library / Framework</SkillGroupTitle>
                <SkillContainer
                  skill="React"
                  description="Front-end 학습 및 프로젝트 경험"
                  level={4}
                />
                <SkillContainer
                  skill="Vue"
                  description="Front-end 학습 및 프로젝트 경험"
                  level={4}
                />
                <SkillContainer
                  skill="Nuxt JS"
                  description="SSR 프로젝트, PostgreSQL 연동 경험"
                  level={4}
                />
                <SkillContainer
                  skill="Nest JS"
                  description="DTO, class-validator, JWT 기반 로그인 구현 경험"
                  level={4}
                />
              </SkillGroup>
            </div>

            {/* 오른쪽 컬럼 */}
            <div style={{ flex: 1 }}>
              {/* 데이터베이스 */}
              <SkillGroup>
                <SkillGroupTitle>🗄️ Database</SkillGroupTitle>
                <SkillContainer
                  skill="MySQL"
                  description="간단한 CRUD 작성 가능"
                  level={3}
                />
                <SkillContainer
                  skill="Postgres"
                  description="실제 프로젝트 사용"
                  level={3}
                />
              </SkillGroup>

              {/* Git & Jira */}
              <SkillGroup>
                <SkillGroupTitle>🛠️ Tools</SkillGroupTitle>
                <SkillContainer
                  skill="Git"
                  description="브랜치 전략 기반 협업 경험"
                  level={4}
                />

                <SkillContainer
                  skill="Figma"
                  description="와이어프레임 및 UI 협업 경험"
                  level={4}
                />
              </SkillGroup>
            </div>
          </div>
        </Section>
      </MainContainer>
    </Container>
  );
}

export default Main;
