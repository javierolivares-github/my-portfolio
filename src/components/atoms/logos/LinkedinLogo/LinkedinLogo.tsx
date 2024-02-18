import '/src/index.css';
import { IconProps } from '../../../../lib/types';

const LinkedinLogo = ({ fillColor, width, height, smWidth, smHeight }: IconProps) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${width} ${height} ${smWidth} ${smHeight}`}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#111827" className={`fill-current ${fillColor}`}/>
      <path d="M11.546 9.8818C11.5224 8.8136 10.7586 8 9.51815 8C8.27774 8 7.4668 8.8136 7.4668 9.8818C7.4668 10.9279 8.25377 11.7649 9.47108 11.7649H9.49426C10.7586 11.7649 11.546 10.9279 11.546 9.8818Z" fill="white"/>
      <path d="M11.3072 13.252H7.68121V24.1464H11.3072V13.252Z" fill="white"/>
      <path d="M20.2089 12.9961C22.5949 12.9961 24.3837 14.5535 24.3837 17.8998L24.3836 24.1464H20.7578V18.3178C20.7578 16.8538 20.2331 15.8548 18.9205 15.8548C17.9187 15.8548 17.3221 16.5283 17.06 17.1788C16.9641 17.4119 16.9406 17.7367 16.9406 18.0623V24.1467H13.3142C13.3142 24.1467 13.362 14.2745 13.3142 13.2522H16.9406V14.7953C17.4218 14.0535 18.2838 12.9961 20.2089 12.9961Z" fill="white"/>
    </svg>
  )
}

export default LinkedinLogo;



