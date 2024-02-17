import React from 'react';
import '/src/index.css';
import { TextProps } from '../../../../lib/types';

const Caption = ({ children, color}: TextProps) => {
  return (
    <span className={`font-normal text-[0.875rem] leading-[1.25rem]
    sm:text-[1rem] sm:leading-[1.5rem] ${color}`}>
      {children}
    </span>
  )
}

export default Caption;



