import '/src/index.css';
import { SocialLogoProps } from '../../../../../lib/types';

const YouTubeLogo = ({ fillColorPrimary, fillColorSecondary, width, height }: SocialLogoProps) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${width} ${height}`}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#111827" className={`fill-current ${fillColorPrimary}`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6679 10.4995C23.4022 10.701 23.9805 11.2948 24.1768 12.0488C24.5335 13.4153 24.5335 16.2666 24.5335 16.2666C24.5335 16.2666 24.5335 19.1178 24.1768 20.4845C23.9805 21.2385 23.4022 21.8322 22.6679 22.0338C21.3371 22.4 16.0001 22.4 16.0001 22.4C16.0001 22.4 10.6632 22.4 9.3323 22.0338C8.59795 21.8322 8.01962 21.2385 7.82335 20.4845C7.4668 19.1178 7.4668 16.2666 7.4668 16.2666C7.4668 16.2666 7.4668 13.4153 7.82335 12.0488C8.01962 11.2948 8.59795 10.701 9.3323 10.4995C10.6632 10.1333 16.0001 10.1333 16.0001 10.1333C16.0001 10.1333 21.3371 10.1333 22.6679 10.4995ZM14.4001 13.8666V19.1999L18.6668 16.5333L14.4001 13.8666Z" fill="white" className={`fill-current ${fillColorSecondary}`}/>
    </svg>
  )
}

export default YouTubeLogo;



