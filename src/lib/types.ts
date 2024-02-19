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
  smWidth: string;
  smHeight: string;
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