//mui
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";

// assets
import { MdEmail, MdWorkHistory } from "react-icons/md";
import { FaAward, FaBuilding, FaGithub, FaGraduationCap } from "react-icons/fa";
import jaei2 from "../assets/jaei2.jpg";
import ssafyPJT1 from "../assets/ssafyPJT1.svg";
import ssafyPJT2 from "../assets/ssafyPJT2.svg";
import ssafyPJT3 from "../assets/ssafyPJT3.svg";
import SKON from "../assets/SKON.svg";
import NuriFlex from "../assets/NuriFlex.svg";
import Bigtorage from "../assets/Bigtorage.svg";

// Component
import { Container, MainContainer, Title } from "../components/layouts/FlexBox";
import SkillContainer, {
  SkillGroup,
  SkillGroupTitle,
} from "../components/SkillContainer";
import React from "react";
import ProjectCard from "../components/ProjectCard";

// Type
import type { Project } from "../types/project";
import ProjectModal from "../components/ProjectModal";

function Main() {
  const ssafyPJT = [
    {
      name: "MESC",
      period: "2023.10.10 - 2023.11.17",
      teamSize: 6,
      award: "우수상",
      role: ["Front-end 담당", "UCC 담당"],
      description: "SDI 기업연계 프로젝트",
      descriptionDetail:
        " 긴급상황 시 MES 공정 DB를 조작할 수 있는 클릭형 모바일 챗봇 서비스",
      thumbnail: ssafyPJT3,
    },
    {
      name: "뭐니?Money",
      period: "2023.08.14 - 2023.10.06",
      teamSize: 6,
      award: "Best Member",
      role: [" Front-end 리더", "발표 담당", "UCC 담당"],

      description: "",
      descriptionDetail:
        " 금융을 처음 접하는 자녀와 용돈관리에 대하여 교육하고 싶은 부모를 위한 금융서비스",
      thumbnail: ssafyPJT2,
    },
    {
      name: "맞나?만나!",
      period: "2023.07.04 - 2023.08.18",
      teamSize: 6,
      award: "Best Member",
      role: [" Front-end 리더", "발표 담당", "UCC 담당"],
      description: "",
      descriptionDetail: " 소개팅이 어려운 남녀를 위한 블라인드 소개팅 서비스",
      thumbnail: ssafyPJT1,
    },
  ];

  const bigtoragePJT = [
    {
      name: "SKON",
      period: "2025.07 - 진행 중",
      teamSize: 4,
      role: ["Front-end 담당"],
      descriptionDetail: "ESS 관제 플랫폼 사이트 제작",
      thumbnail: SKON,
    },
    {
      name: "PCMS",
      period: "2024.12 - 2025.03",
      teamSize: 4,
      role: [" Front-end "],
      descriptionDetail: "",
      thumbnail: Bigtorage,
    },
    {
      name: "NuriFlex ",
      period: "2024.07 - 2024.11",
      teamSize: 4,
      role: [" Front-end "],
      descriptionDetail: "베트남 ESS 관제 플랫폼 사이트 제작",
      thumbnail: NuriFlex,
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [selectedPJT, setSelectedPJT] = React.useState<Project | null>(null);

  const handleOpen = (pjt: Project) => {
    setSelectedPJT(pjt);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Container $alignItems="start" height="100%">
      <MainContainer width="15%" $margin="3" $padding="10px">
        <Card variant="outlined" sx={{ p: 2, alignItems: "center" }}>
          {/* 프로필 사진 */}
          <img
            src={jaei2}
            alt="profile"
            width="150"
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
              href="https://github.com/freedomDobby"
              startDecorator={<FaGithub />}
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              github
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

        {/* Education */}
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Typography
              level="title-md"
              sx={{ mb: 1, fontWeight: "bold" }}
              startDecorator={<FaGraduationCap />}
            >
              Education
            </Typography>

            {/* SSAFY */}
            <div style={{ marginBottom: "12px" }}>
              <Typography level="body-sm" sx={{ fontWeight: 600 }}>
                2023.01 ~ 2023.12
              </Typography>
              <Typography level="body-sm" textColor="text.secondary">
                삼성청년SW아카데미(SSAFY) 9기
              </Typography>
            </div>

            {/* Korea IT */}
            <div>
              <Typography level="body-sm" sx={{ fontWeight: 600 }}>
                2022.05 ~ 2022.12
              </Typography>
              <Typography level="body-sm" textColor="text.secondary">
                Korea IT 아카데미 Frontend 수료
              </Typography>
            </div>
          </CardContent>
        </Card>

        {/*  Awards & Certificates */}
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Typography
              level="title-md"
              sx={{ mb: 1, fontWeight: "bold" }}
              startDecorator={<FaAward />}
            >
              Awards & Certificates
            </Typography>

            <div>
              <Typography level="body-sm" sx={{ fontWeight: 600 }}>
                2025.09
              </Typography>
              <Typography level="body-sm" textColor="text.secondary">
                OPIc IH 취득
              </Typography>
            </div>

            <div style={{}}>
              <Typography level="body-sm" sx={{ fontWeight: 600 }}>
                2023.11
              </Typography>
              <Typography level="body-sm" textColor="text.secondary">
                SSAFY 자율프로젝트 우수상
              </Typography>
            </div>
          </CardContent>
        </Card>
      </MainContainer>
      {/*  */}
      <MainContainer width="85%" $margin="3" $padding="10px">
        {/* Skill */}
        <Card variant="outlined" sx={{ mb: 2 }}>
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
                  skill="React & Vue"
                  description="Front-end 프로젝트 경험"
                  level={4}
                />
                <SkillContainer
                  skill="Nuxt JS"
                  description="SSR 프로젝트, PostgreSQL 연동 경험"
                  level={4}
                />
              </SkillGroup>

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
            </div>

            {/* 오른쪽 컬럼 */}
            <div style={{ flex: 1 }}>
              {/* Tools */}
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

              {/* Cloud */}
              <SkillGroup>
                <SkillGroupTitle>☁️ Cloud</SkillGroupTitle>
                <SkillContainer
                  skill="GCP"
                  description="VM 인스턴스 생성 및 FPT 서버 구축, 파일 업로드/백업 경험"
                  level={3}
                />
                <SkillContainer
                  skill="AWS"
                  description="CloudFront 및 EC2 활용 배포 경험"
                  level={3}
                />
              </SkillGroup>
            </div>
          </div>
        </Card>

        {/* Project Tabs*/}
        <Card variant="outlined" sx={{ flex: "1" }}>
          <Tabs
            aria-label="Project Tabs"
            defaultValue={0}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TabList>
              <Tab>Bigtorage</Tab>
              <Tab>SSAFY</Tab>
            </TabList>

            <TabPanel value={0} style={{ flex: "1 1 auto", overflow: "auto" }}>
              {/* Bigtorage 프로젝트 */}
              <Container style={{ flexWrap: "wrap", gap: "16px" }}>
                {bigtoragePJT.map((pjt, idx) => (
                  <ProjectCard key={idx} project={pjt} onClick={handleOpen} />
                ))}
              </Container>
            </TabPanel>

            <TabPanel value={1} style={{ flex: "1 1 auto", overflow: "auto" }}>
              {/* SSAFY 프로젝트 */}
              <Container style={{ flexWrap: "wrap", gap: "16px" }}>
                {ssafyPJT.map((pjt, idx) => (
                  <ProjectCard key={idx} project={pjt} onClick={handleOpen} />
                ))}
              </Container>
            </TabPanel>
          </Tabs>
        </Card>
      </MainContainer>
      {/* 프로젝트 상세 모달 */}
      <ProjectModal
        open={open}
        onClose={handleClose}
        selectedPJT={selectedPJT}
      />
    </Container>
  );
}

export default Main;
