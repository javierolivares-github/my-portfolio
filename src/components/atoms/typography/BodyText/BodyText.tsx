import React from 'react';
import '/src/index.css';
import { TextProps } from '../../../../lib/types';

const BodyText = ({ children, color}: TextProps) => {
  return (
    <p className={`font-normal text-[1rem] leading-[1.5rem] tracking-normal
    sm:text-[1.125rem] sm:leading-[1.75rem] ${color}`}>
      {children}
    </p>
  )
}

export default BodyText;



