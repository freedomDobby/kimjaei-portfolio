import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";

export interface Project {
  name: string;
  period: string;
  teamSize?: number;
  role?: string[];
  description?: string;
  descriptionDetail: string;
  thumbnail: string;
  award?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <Card
      variant="outlined"
      sx={{ width: 250, height: 281, cursor: "pointer" }}
      onClick={() => onClick(project)}
    >
      <CardOverflow>
        <AspectRatio
          sx={{
            minWidth: 200,
            height: 185,
          }}
        >
          <img
            src={project.thumbnail}
            alt={project.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </AspectRatio>
      </CardOverflow>

      <CardContent>
        <Box
          sx={{
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>{project.name}</div>
          {project.award && (
            <Chip size="sm" variant="solid" color="warning">
              {project.award}
            </Chip>
          )}
        </Box>

        <Typography level="body-sm" textColor="text.secondary">
          {project.period}
        </Typography>
        <Typography level="body-sm">{project.descriptionDetail}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
