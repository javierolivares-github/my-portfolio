export type TextProps = {
  children: string;
  color: string;
  align?: string;
  key?: string | number;
}

export type MessageProps = {
  message: string;
}

export type TechLogoProps = {
  width: string;
  height: string;
}

export type SocialLogoProps = {
  fillColorPrimary: string;
  fillColorSecondary: string;
  width: string;
  height: string;
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
  id?: number;
  projectImageUrl: string;
  projectName: string;
  projectDescription: string;
  projectTechUrls: Tech[];
  projectPageUrl: string;
}

export type ProjectListProps = {
  status: string;
  data: ProjectListItemProps[] | [];
}
