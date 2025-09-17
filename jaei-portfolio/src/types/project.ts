export interface Project {
  name: string;
  period?: string;
  teamSize?: number;
  award?: string;
  role: string[];
  roleDetail: string[];
  thumbnail: string;

  techStack: string[];
  shortDescription?: string;
  descriptionDetail: string;
  features?: string[];
  deployment?: string;

  // SSAFY 같은 경우만 넣는 필드
  links?: {
    github?: string;
    youtube?: string;
    figma?: string | string[];
    [key: string]: string | string[] | undefined;
  };
}
