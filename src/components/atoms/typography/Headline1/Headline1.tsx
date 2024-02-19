import '/src/index.css';
import { TextProps } from '../../../../lib/types';

const Headline1 = ({ children, color}: TextProps) => {
  return (
    <h3 className={`font-bold text-[1.5rem] leading-[2rem] tracking-normal
    sm:text-[1.875rem] sm:leading-[2.5rem] ${color}`}>
      {children}
    </h3>
  )
}

export default Headline1;



