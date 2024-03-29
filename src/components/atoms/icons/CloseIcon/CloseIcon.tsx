import '/src/index.css';
import { IconProps } from '../../../../lib/types';

const CloseIcon = ({ fillColor, width, height, smWidth, smHeight, }: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${width} ${height} ${smWidth} ${smHeight}`}>
      <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`stroke-current ${fillColor}`}/>
      <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`stroke-current ${fillColor}`}/>
    </svg>
  )
}

export default CloseIcon;



