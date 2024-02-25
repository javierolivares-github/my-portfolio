import '/src/index.css';
import { TextProps } from '../../../../lib/types';

const Display2 = ({ children, color}: TextProps) => {
  return (
    <h2 className={`font-bold text-[2.25rem] leading-[2.8125rem] tracking-tight
    sm:text-[3rem] sm:leading-[3.75rem] lg:text-[3.75rem] lg:leading-[4.5rem] ${color}`}>
      {children}
    </h2>
  )
}

export default Display2;




