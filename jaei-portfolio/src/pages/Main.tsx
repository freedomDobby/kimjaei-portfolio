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
  const ssafyPJT: Project[] = [
    {
      name: "MESC",
      period: "2023.10.10 - 2023.11.17",
      teamSize: 6,
      award: "우수상",
      role: ["Front-end 담당", "UCC 담당"],
      roleDetail: [
        "재사용 가능한 내부 Component 제작",
        "챗봇 구조 설계 및 구현",
        "챗봇 버튼 호출값 switch문 설계 및 구현",
      ],
      thumbnail: ssafyPJT3,
      shortDescription:
        "기업연계 프로젝트 – MES 공정 데이터 기반 모바일 챗봇 서비스",
      descriptionDetail:
        "삼성 SDI와 협업한 기업연계 프로젝트. 긴급 상황 시 MES 공정 DB 데이터를 기반으로 모바일 챗봇을 통해 정보를 확인하고 대응할 수 있는 서비스를 구현. React-native를 활용해 안드로이드 앱으로 제작.",
      techStack: [
        "React",
        "Recoil",
        "React Native",
        "TypeScript",
        "Android Studio",
        "Styled-Components",
        "MySQL",
      ],
      features: [
        "MES 데이터 조회 및 챗봇 응답 기능",
        "다양한 챗봇 모달 UI 제작",
        "모바일 화면 최적화된 데이터 시각화",
      ],
      deployment: "Android 앱 형태로 빌드 및 배포 (시연용)",
      links: {
        github: "https://github.com/freedomDobby/mesc",
        youtube: "https://www.youtube.com/watch?v=2xwJa4xV1iU&feature=youtu.be",
        figma: [
          "https://www.figma.com/file/WhYGB2pZzjCvr0KjF0X7Pq/Mobile-Mockup?type=design&node-id=0-1&mode=design&t=1G4Y9c7FbANEC05l-0",
          "https://www.figma.com/file/eEHt2hTmsZw7zQyEH6kQps/DB-Frame-Mockup?type=design&node-id=0-1&mode=design&t=v3fL4v9zBUxlCsVs-0",
        ],
      },
    },
    {
      name: "뭐니?Money",
      period: "2023.08.14 - 2023.10.06",
      teamSize: 6,
      award: "Best Member",
      role: ["Front-end 리더", "발표 담당", "UCC 담당"],
      roleDetail: [
        "재사용 가능한 내부 Component 제작",
        "그래프 및 ProgressBar 컴포넌트 구현",
        "짜금통(저금통) 기능 개발 – 목표 금액 설정, 이미지 업로드 및 동적 그래프 연동",
      ],
      thumbnail: ssafyPJT2,
      shortDescription: "초등학생 금융교육을 위한 웹앱 서비스",
      descriptionDetail:
        "부모와 자녀를 대상으로 한 금융 교육/용돈 관리 웹앱 서비스. 자녀는 원하는 목표를 등록하고 저축 현황을 시각화된 그래프와 프로그레스바로 확인 가능하며, 부모는 자녀의 금융 습관을 지도할 수 있음.",
      techStack: ["React", "Recoil", "TypeScript", "Styled-Components"],
      features: [
        "자녀용 짜금통(저금통) 기능 – 목표 금액/상품 설정",
        "multipart/form-data 이미지 업로드 및 미리보기",
        "동적 그래프 및 ProgressBar를 통한 시각화",
        "부모/자녀 계정 별도 기능 제공",
      ],
      deployment: "웹앱 형태로 제작 및 시연",
      links: {
        github: "https://github.com/freedomDobby/Mwonimoney",
        youtube: "https://www.youtube.com/watch?v=TTSggZvf7A4",
        figma:
          "https://www.figma.com/file/g58bydVxsRlPHANUbp9drV/9TO10?type=design&mode=design&t=CUmW1CxnF4DytCKb-0",
      },
    },
    {
      name: "맞나?만나!",
      period: "2023.07.04 - 2023.08.18",
      teamSize: 6,
      award: "Best Member",
      role: ["Front-end 리더", "발표 담당", "UCC 담당"],
      roleDetail: [
        "KakaoTalk 로그인 API 연동",
        "KakaoTalk 주소 API 연동",
        "Kakao Map API 연동",
        "회원가입 및 설문조사 화면 구현",
      ],
      thumbnail: ssafyPJT1,
      shortDescription: "블라인드 소개팅 서비스",
      descriptionDetail:
        "소개팅에 어려움을 겪는 남녀를 대상으로 한 블라인드 소개팅 웹앱 서비스. Kakao API를 활용하여 로그인/위치/지도 기능을 연결하고, 설문조사를 통해 매칭을 지원.",
      techStack: ["React", "TypeScript", "Kakao API", "Axios", "Jira", "Git"],
      features: [
        "KakaoTalk 로그인/주소/지도 API 연동",
        "회원가입 및 설문조사 기반 매칭 로직",
        "실시간 위치 데이터 기반 사용자 매칭",
      ],
      deployment: "웹앱 형태로 제작 및 시연",
      links: {
        github: "https://github.com/freedomDobby/Manna",
        youtube: "https://www.youtube.com/watch?v=iMBquRQYKJI&feature=youtu.be",
        figma:
          "https://www.figma.com/design/CbxYW8n0GEEkdwvTIsjSyr/%EA%B3%B5%ED%86%B5%ED%94%84%EC%A0%9D_%ED%99%94%EB%A9%B4%EB%AA%85%EC%84%B8%EC%84%9C-5%EC%A1%B0-?node-id=0-1&p=f&t=LIyTgjrWCYYrFqIU-0",
      },
    },
  ];

  const bigtoragePJT: Project[] = [
    {
      name: "SKON",
      period: "2025.07 - 진행 중",
      teamSize: 4,
      role: ["Front-end 담당"],
      roleDetail: [
        "Nuxt.js 기반 전반적 화면 개발",
        "BetterAuth를 활용한 이메일 인증 로그인 구현",
        "Google Maps API 연동 (GIS 지도 기능)",
        "OpenWeather API 연동하여 ESS 환경 데이터 제공",
      ],
      thumbnail: SKON,
      shortDescription: "ESS 관제 플랫폼 프로토타입 개발",
      descriptionDetail:
        "여러 ESS 사이트를 통합 관리하기 위한 관제 플랫폼의 프로토타입을 제작. 더미 데이터를 기반으로 로그/알람 확인, 상태 모니터링 운영 환경을 검증.",
      techStack: [
        "Nuxt.js",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS",
        "AWS EC2",
        "AWS CloudFront",
      ],
      features: [
        "실시간 ESS 상태 데이터 시뮬레이션",
        "로그 및 알람 모니터링 UI 구현",
      ],
      deployment: "AWS CloudFront + EC2 프로토타입 배포 경험",
    },
    {
      name: "PCMS",
      period: "2024.12 - 2025.03",
      teamSize: 4,
      role: ["Front-end 담당"],
      roleDetail: [
        "TypeORM을 활용한 데이터 연동",
        "Electron 기반 기기 UI 화면 개발",
      ],
      thumbnail: Bigtorage,
      shortDescription: "ESS 기기 내장 패드 UI 개발",
      descriptionDetail:
        "ESS 기기에 직접 부착된 터치 패드 UI를 Electron 기반으로 구현. 배터리 SOC/SOH, 알람 상태를 직관적으로 표시하고, 현장 엔지니어가 신속하게 대응할 수 있는 제어 기능을 제공.",
      techStack: ["Electron", "TypeScript", "TypeORM", "Vuetify"],
      features: [
        "현장 기기에서 실시간 ESS 상태 확인",
        "배터리 SOC/SOH 및 알람 표시",
        "터치 기반 직관적 제어 UI",
      ],
      deployment: "현장 ESS 기기 내장 패드에 탑재",
    },
    {
      name: "NuriFlex",
      period: "2024.07 - 2024.11",
      teamSize: 4,
      role: ["Front-end 담당"],
      roleDetail: [
        "Nuxt.js 기반 화면 개발",
        "Backend API 연동 및 상태 데이터 표시",
      ],
      thumbnail: NuriFlex,
      shortDescription: "베트남 ESS 관제 플랫폼 프로토타입 개발",
      descriptionDetail:
        "베트남 시장을 대상으로 한 ESS 관제 플랫폼 프로토타입 개발 프로젝트. 더미 데이터를 활용해 사이트별 상태 데이터 시각화, 알람/로그 확인, 원격 제어 기능을 구현.",
      techStack: ["Nuxt.js", "TypeScript", "PostgreSQL"],
      features: [
        "베트남 ESS 사이트 데이터 시뮬레이션",
        "로그/알람 뷰어 및 모니터링 화면 구현",
        "원격 제어 기능 기본 프로토타입",
      ],
      deployment: "프로토타입 단계 (내부 검증용)",
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
