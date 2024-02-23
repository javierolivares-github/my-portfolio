import '/src/index.css';
import { TextProps } from '../../../../lib/types';

const Display1 = ({ children, color}: TextProps) => {
  return (
    <h1 className={`w-full font-bold text-[3rem] leading-[3.75rem] tracking-tight
    sm:text-[3.75rem] sm:leading-[4.5rem] lg:text-[4.5rem] lg:leading-[5.625rem] ${color}`}>
      {children}
    </h1>
  )
}

export default Display1;





