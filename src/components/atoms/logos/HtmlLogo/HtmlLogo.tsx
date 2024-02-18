import '/src/index.css';
import { IconProps } from '../../../../lib/types';

const HtmlLogo = ({ width, height, smWidth, smHeight }: IconProps) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${width} ${height} ${smWidth} ${smHeight}`}>
      <g clip-path="url(#clip0_427_4231)">
      <path d="M15.0577 0H0.931641L2.25598 14.3579L7.99443 15.9844H7.9946H7.99477L13.7333 14.3579L15.0577 0Z" fill="#E44E26"/>
      <path d="M7.99414 1.16943V14.7685H7.99431L12.642 13.4511L13.7748 1.16943H7.99414Z" fill="#F16529"/>
      <path d="M12.4374 2.93018H3.55078L4.04683 8.3084L4.05732 8.27348H10.1307L9.93084 10.5479L7.99567 11.107L6.0283 10.5398L5.90942 9.16358H4.12566L4.37935 11.9144L7.99408 12.939L11.6089 11.9144L12.1067 6.51572H5.66428L5.49831 4.71617H12.2728L12.4374 2.93018Z" fill="white"/>
      <path d="M5.90942 9.16358H4.12566L4.37935 11.9144L7.99391 12.939V11.1064L6.0283 10.5398L5.90942 9.16358ZM7.99391 2.93018H3.55078L4.04683 8.3084L4.05732 8.27348H7.99391V6.51572H5.66428L5.49831 4.71617H7.99391V2.93018Z" fill="#EBEBEC"/>
      </g>
      <defs>
      <clipPath id="clip0_427_4231">
      <rect width="16" height="16" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}

export default HtmlLogo;



