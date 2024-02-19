import '/src/index.css';

const Logo = ({ children, color, visibility }: LogoProps) => {
  return (
    <span className={`font-['Poppins'] font-bold text-[1.5rem] leading-[1.5rem] antialiased ${color}
    ${visibility ? 'visible' : 'invisible'}`}>
      {children}
    </span>
  )
}

export default Logo;

type LogoProps = {
  children: string;
  color: string;
  visibility: boolean;
}


