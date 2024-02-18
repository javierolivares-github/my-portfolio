import React from 'react';
import '/src/index.css';
import { TextProps } from '../../../lib/types';

const Logo = ({ children, color }: TextProps) => {
  return (
    <span className={`font-['Poppins'] font-bold text-[1.5rem] leading-[1.5rem] antialiased ${color}`}>
      {children}
    </span>
  )
}

export default Logo;



