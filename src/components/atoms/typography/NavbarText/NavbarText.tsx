import React from 'react';
import '/src/index.css';
import { TextProps } from '../../../../lib/types';

const NavbarText = ({ children, color}: TextProps) => {
  return (
    <span className={`font-normal text-[1.125rem] leading-[1.75rem]
    lg:font-bold ${color}`}>
      {children}
    </span>
  )
}

export default NavbarText;



