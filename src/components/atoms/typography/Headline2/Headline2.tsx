import '/src/index.css';
import { TextProps } from '../../../../lib/types';

const Headline2 = ({ children, color}: TextProps) => {
  return (
    <h3 className={`font-bold text-[1.5rem] leading-[2rem] tracking-normal
    sm:text-[1.875rem] sm:leading-[2.5rem] lg:text-[2.25rem] lg:leading-[2.8125rem] ${color}`}>
      {children}
    </h3>
  )
}

export default Headline2;



