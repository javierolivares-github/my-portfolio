import React from 'react';
import '/src/index.css';
import { TextProps } from '../../../../lib/types';

const Headline3 = ({ children, color}: TextProps) => {
  return (
    <h4 className={`font-bold text-[1.125rem] leading-[1.75rem] tracking-normal
    sm:text-[1.25rem] ${color}`}>
      {children}
    </h4>
  )
}

export default Headline3;



