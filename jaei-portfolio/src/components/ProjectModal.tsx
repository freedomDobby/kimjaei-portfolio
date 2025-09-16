// components/ProjectModal.tsx
import React from "react";
import { Dialog, IconButton } from "@mui/material";
import { DialogTitle, DialogContent, Typography } from "@mui/joy";
import type { Project } from "../types/project";
import { MdClose } from "react-icons/md";
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

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: "700px",
          height: "600px",
          borderRadius: "12px",
          p: 2,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>{selectedPJT.name}</div>
        <IconButton aria-label="close" onClick={onClose}>
          <MdClose />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ flex: 1, overflowY: "auto" }}>
        <Section style={{ display: "flex", gap: "16px" }}>
          {/* 왼쪽: 썸네일 */}
          <Section style={{ flex: 1 }}>
            <img
              src={selectedPJT.thumbnail}
              alt={selectedPJT.name}
              style={{
                width: "100%",
                height: "200px", // 세로 고정 (원하는 값)
                borderRadius: "8px",
                objectFit: "contain",
              }}
            />
          </Section>

          {/* 오른쪽: 프로젝트 정보 */}
          <Section
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Typography level="body-sm" sx={{ fontWeight: 600 }}>
              기간: {selectedPJT.period}
            </Typography>
            <Typography level="body-sm">
              참여 인원: {selectedPJT.teamSize}명
            </Typography>
            <Typography level="body-sm">
              담당: {selectedPJT.role.join(", ")}
            </Typography>
            <Typography sx={{ mt: 1 }}>{selectedPJT.description}</Typography>
            <Typography textColor="text.secondary">
              {selectedPJT.descriptionDetail}
            </Typography>
          </Section>
        </Section>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
