import '/src/index.css';
import { TextProps } from '../../../../lib/types';

const NavbarText = ({ children, color, key}: TextProps) => {
  return (
    <li key={key} className={`cursor-pointer hover:underline w-full font-normal text-[1.125rem] leading-[1.75rem]
    lg:font-semibold ${color}`}>
      {children}
    </li>
  )
}

export default NavbarText;



