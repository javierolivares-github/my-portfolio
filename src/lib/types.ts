export type TextProps = {
  children: string;
  color: string;
}

export type MessageProps = {
  message: string;
}

export type TechLogoProps = {
  width: string;
  height: string;
}

export type SocialLogoProps = {
  fillColor: string;
  width: string;
  height: string;
  smWidth: string;
  smHeight: string;
}

export type IconProps = {
  fillColor: string;
  width: string;
  height: string;
  smWidth?: string;
  smHeight?: string;
}

export type IconButton = {
  handleClick: () => void;
}

interface Tech {
  id: number;
  name: string;
  url: string;
}

export type ProjectListItemProps = {
  projectImageUrl: string;
  projectName: string;
  projectDescription: string;
  projectTechUrls: Tech[];
}

export type ProjectListProps = {
  status: string;
  data: ProjectListItemProps[] | [];
}