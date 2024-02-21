import '/src/index.css';
import { TextProps } from '../../../../lib/types';

const BodyText = ({ children, color, align }: TextProps) => {
  return (
    <p className={`font-normal text-[1rem] leading-[1.5rem] tracking-normal
    sm:text-[1.125rem] sm:leading-[1.75rem] ${color} ${align}`}>
      {children}
    </p>
  )
}

export default BodyText;



