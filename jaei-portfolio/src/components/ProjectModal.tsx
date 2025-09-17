// components/ProjectModal.tsx
import React from "react";
import { Dialog, IconButton } from "@mui/material";
import {
  DialogTitle,
  DialogContent,
  Typography,
  Chip,
  Divider,
  Link as JoyLink,
} from "@mui/joy";
import type { Project } from "../types/project";
import { MdClose } from "react-icons/md";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { Section } from "./layouts/FlexBox";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  selectedPJT: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  open,
  onClose,
  selectedPJT,
}) => {
  if (!selectedPJT) return null;

  // figma 링크가 string | string[] 둘 다 가능할 수 있으니 정규화
  const toArray = (v?: string | string[]) =>
    !v ? [] : Array.isArray(v) ? v : [v];

  const figmaLinks = toArray(selectedPJT.links?.figma);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: { xs: "92vw", sm: 760 },
          height: { xs: "85vh", sm: 600 },
          borderRadius: "12px",
          p: 2,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
          fontSize: "1.1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        {" "}
        <Typography level="body-md" sx={{ fontWeight: 600 }}>
          {selectedPJT.name}
        </Typography>
        <IconButton aria-label="close" onClick={onClose}>
          <MdClose />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ flex: 1, overflowY: "auto", pt: 0.5 }}>
        {/* 상단: 썸네일 + 메타 */}
        <Section
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "flex-start",
            marginBottom: 12,
          }}
        >
          {/* 왼쪽: 썸네일 */}
          <Section style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                width: "100%",
                height: 220,
                borderRadius: 8,
                overflow: "hidden",
                background: "#0b0b0b10",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={selectedPJT.thumbnail}
                alt={selectedPJT.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // 썸네일 비율이 달라도 일정하게 보이도록
                  display: "block",
                }}
              />
            </div>
          </Section>

          {/* 오른쪽: 기본 정보 */}
          <Section
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minWidth: 0,
            }}
          >
            {selectedPJT.shortDescription && (
              <Typography level="body-md" sx={{ fontWeight: 600 }}>
                {selectedPJT.shortDescription}
              </Typography>
            )}

            {selectedPJT.period && (
              <Typography level="body-sm">
                <b>기간</b>: {selectedPJT.period}
              </Typography>
            )}

            <Typography level="body-sm">
              <b>담당</b>: {selectedPJT.role.join(", ")}
            </Typography>

            {/* 내가 한 역할 상세 */}
            <div>
              <ul
                style={{
                  margin: "2px 0 0 10px",
                  paddingLeft: "18px",
                  listStyleType: "disc", // ● 기본 불릿
                }}
              >
                {selectedPJT.roleDetail.map((r, i) => (
                  <li key={i} style={{ marginBottom: 4 }}>
                    <Typography level="body-sm">{r}</Typography>
                  </li>
                ))}
              </ul>
            </div>
            {typeof selectedPJT.teamSize === "number" && (
              <Typography level="body-sm">
                <b>참여 인원</b>: {selectedPJT.teamSize}명
              </Typography>
            )}

            {/* 사용 기술 태그 */}
            {selectedPJT.techStack?.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: 4,
                }}
              >
                {selectedPJT.techStack.map((t, i) => (
                  <Chip key={i} size="sm" variant="soft">
                    {t}
                  </Chip>
                ))}
              </div>
            )}
          </Section>
        </Section>
        <Divider sx={{ my: 1.5 }} />
        {/* 상세 설명 */}
        <Typography level="body-sm" sx={{ whiteSpace: "pre-wrap" }}>
          {selectedPJT.descriptionDetail}
        </Typography>
        {/* 주요 기능 */}
        {selectedPJT.features && selectedPJT.features.length > 0 && (
          <>
            <Typography level="body-md" sx={{ mt: 2, fontWeight: 700 }}>
              주요 기능
            </Typography>
            <ul style={{ margin: "6px 0 0 20px", padding: 0 }}>
              {selectedPJT.features.map((f, i) => (
                <li key={i} style={{ marginBottom: 4 }}>
                  <Typography level="body-sm">{f}</Typography>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* 배포 */}
        {/* {selectedPJT.deployment && (
          <Typography level="body-sm" sx={{ mt: 2 }}>
            <b>배포/운영</b>: {selectedPJT.deployment}
          </Typography>
        )} */}

        {/* 외부 링크 */}
        {(selectedPJT.links?.github ||
          selectedPJT.links?.youtube ||
          figmaLinks.length > 0) && (
          <>
            <Divider sx={{ my: 1.5 }} />
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {selectedPJT.links?.github && (
                <JoyLink
                  href={selectedPJT.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                >
                  <Chip variant="soft" size="sm" startDecorator={<FaGithub />}>
                    GitHub
                  </Chip>
                </JoyLink>
              )}
              {selectedPJT.links?.youtube && (
                <JoyLink
                  href={selectedPJT.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                >
                  <Chip variant="soft" size="sm" startDecorator={<FaYoutube />}>
                    YouTube
                  </Chip>
                </JoyLink>
              )}
              {figmaLinks.map((url, idx) => (
                <JoyLink
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                >
                  <Chip variant="soft" size="sm" startDecorator={<SiFigma />}>
                    Figma {figmaLinks.length > 1 ? idx + 1 : ""}
                  </Chip>
                </JoyLink>
              ))}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
