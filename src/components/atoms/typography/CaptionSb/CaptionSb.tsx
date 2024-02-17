import React from 'react';
import '/src/index.css';
import { TextProps } from '../../../../lib/types';

const CaptionSb = ({ children, color}: TextProps) => {
  return (
    <span className={`font-semibold text-[1rem] leading-[1.5rem]
    sm:text-[1.125rem] sm:leading-[1.75rem] ${color}`}>
      {children}
    </span>
  )
}

export default CaptionSb;



