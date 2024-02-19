import '/src/index.css';
import { TechLogoProps } from '../../../../../lib/types';

const HtmlLogo = ({ width, height, smWidth, smHeight }: TechLogoProps) => {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${width} ${height} ${smWidth} ${smHeight}`}>
      <path d="M10 0C7.33333 0 5.66667 1.33333 5 4C6 2.66667 7.16667 2.16667 8.5 2.5C9.26074 2.69019 9.80448 3.24207 10.4063 3.853C11.3868 4.84819 12.5215 6 15 6C17.6667 6 19.3333 4.66667 20 2C19 3.33333 17.8333 3.83333 16.5 3.5C15.7393 3.30981 15.1955 2.75793 14.5937 2.147C13.6132 1.15181 12.4785 0 10 0ZM5 6C2.33333 6 0.666667 7.33333 0 10C1 8.66667 2.16667 8.16667 3.5 8.5C4.26074 8.69019 4.80448 9.24207 5.40633 9.853C6.38678 10.8482 7.52152 12 10 12C12.6667 12 14.3333 10.6667 15 8C14 9.33333 12.8333 9.83333 11.5 9.5C10.7393 9.30981 10.1955 8.75793 9.59367 8.147C8.61322 7.15181 7.47848 6 5 6Z" fill="url(#paint0_linear_463_13481)"/>
      <defs>
      <linearGradient id="paint0_linear_463_13481" x1="-142.222" y1="591.36" x2="4758.35" y2="2291.11" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2298BD"/>
      <stop offset="1" stop-color="#0ED7B5"/>
      </linearGradient>
      </defs>
    </svg>
  )
}

export default HtmlLogo;



