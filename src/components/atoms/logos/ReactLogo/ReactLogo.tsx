import '/src/index.css';
import { IconProps } from '../../../../lib/types';

const ReactLogo = ({ width, height, smWidth, smHeight }: IconProps) => {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${width} ${height} ${smWidth} ${smHeight}`}>
      <path d="M13.1552 5.37863C12.9892 5.3215 12.8172 5.26744 12.6402 5.21632C12.6693 5.09753 12.696 4.98028 12.7197 4.86502C13.1096 2.97245 12.8547 1.44779 11.9842 0.945804C11.1495 0.464467 9.78446 0.966338 8.40581 2.16613C8.27324 2.28151 8.14029 2.40366 8.00741 2.53167C7.91886 2.44697 7.83046 2.36512 7.74229 2.28683C6.29742 1.00393 4.84917 0.4633 3.97954 0.966737C3.14565 1.44947 2.8987 2.8828 3.24966 4.6764C3.28355 4.84964 3.32316 5.02656 3.36796 5.20644C3.16299 5.26462 2.96512 5.32665 2.77578 5.39264C1.08183 5.98322 0 6.90882 0 7.8689C0 8.86048 1.16135 9.85505 2.92573 10.4581C3.06497 10.5057 3.20944 10.5507 3.35834 10.5934C3.31001 10.788 3.26797 10.9786 3.23268 11.1646C2.89805 12.927 3.15938 14.3265 3.99104 14.8062C4.85008 15.3016 6.29178 14.7924 7.69564 13.5652C7.80659 13.4682 7.91795 13.3654 8.0295 13.2575C8.1741 13.3968 8.31846 13.5285 8.46206 13.6521C9.82185 14.8223 11.1649 15.2948 11.9958 14.8138C12.854 14.317 13.1329 12.8136 12.7708 10.9845C12.7431 10.8448 12.7109 10.7021 12.6748 10.5569C12.776 10.5269 12.8754 10.496 12.9723 10.4639C14.8066 9.85619 16 8.87372 16 7.8689C16 6.90534 14.8833 5.97351 13.1552 5.37863ZM12.7574 9.81512C12.6699 9.84409 12.5801 9.87208 12.4886 9.89922C12.2862 9.25817 12.0129 8.57651 11.6784 7.87223C11.9976 7.18473 12.2603 6.51178 12.4571 5.87489C12.6208 5.92225 12.7796 5.9722 12.9327 6.02492C14.4133 6.53462 15.3165 7.28822 15.3165 7.8689C15.3165 8.48742 14.3411 9.29035 12.7574 9.81512ZM12.1002 11.1173C12.2603 11.9261 12.2832 12.6573 12.1772 13.229C12.0819 13.7426 11.8902 14.0851 11.6533 14.2223C11.149 14.5141 10.0707 14.1347 8.90782 13.134C8.77451 13.0193 8.64023 12.8968 8.50552 12.7672C8.95635 12.2741 9.40693 11.7009 9.84669 11.0643C10.6202 10.9956 11.3509 10.8834 12.0136 10.7302C12.0463 10.8619 12.0753 10.991 12.1002 11.1173ZM5.45476 14.1718C4.96212 14.3458 4.56975 14.3508 4.33257 14.214C3.82788 13.9229 3.61807 12.7993 3.90427 11.292C3.93705 11.1194 3.97606 10.9421 4.02103 10.7608C4.67647 10.9058 5.40187 11.0101 6.17721 11.0729C6.61993 11.6959 7.08352 12.2685 7.5507 12.7698C7.44863 12.8684 7.34696 12.9622 7.24586 13.0506C6.62508 13.5932 6.003 13.9782 5.45476 14.1718ZM3.14679 9.81133C2.36661 9.54468 1.72232 9.19811 1.28068 8.81992C0.883842 8.48007 0.683486 8.14267 0.683486 7.8689C0.683486 7.28629 1.55209 6.54316 3.00077 6.03807C3.17655 5.97679 3.36056 5.91903 3.55151 5.86478C3.75173 6.51605 4.01437 7.19697 4.33132 7.88553C4.01027 8.58431 3.7439 9.27608 3.54172 9.93499C3.40558 9.89586 3.27369 9.85468 3.14679 9.81133ZM3.92044 4.54514C3.61975 3.00842 3.81945 1.84918 4.32198 1.55829C4.85726 1.2484 6.0409 1.69024 7.28843 2.79796C7.36818 2.86876 7.44823 2.94286 7.52852 3.01953C7.06364 3.5187 6.60429 4.08698 6.1655 4.70625C5.41301 4.77599 4.6927 4.88803 4.03043 5.03806C3.98879 4.87057 3.95191 4.70602 3.92044 4.54514ZM10.8221 6.24934C10.6638 5.97588 10.5013 5.70888 10.3356 5.44917C10.8461 5.51371 11.3352 5.59937 11.7945 5.70421C11.6566 6.14616 11.4847 6.60824 11.2824 7.08194C11.1373 6.8064 10.9838 6.52858 10.8221 6.24934ZM8.00763 3.50802C8.3229 3.84957 8.63863 4.23092 8.94917 4.64467C8.63624 4.62989 8.31943 4.6222 8 4.6222C7.68359 4.6222 7.36912 4.62972 7.05812 4.64425C7.36897 4.23434 7.68743 3.8535 8.00763 3.50802ZM5.17512 6.25407C5.01697 6.5283 4.86631 6.80461 4.72346 7.08143C4.52441 6.60938 4.35413 6.14519 4.21504 5.69697C4.67154 5.59482 5.15834 5.51128 5.6656 5.44797C5.49757 5.71007 5.33369 5.97909 5.17512 6.25407ZM5.68021 10.3386C5.15612 10.2801 4.662 10.2009 4.20561 10.1015C4.34693 9.64532 4.52097 9.17122 4.72423 8.689C4.86745 8.96563 5.01871 9.24205 5.17782 9.51688C5.3399 9.79687 5.50785 10.0711 5.68021 10.3386ZM8.02654 12.278C7.70259 11.9284 7.37945 11.5418 7.06387 11.1259C7.37023 11.1379 7.68256 11.1441 8 11.1441C8.32612 11.1441 8.64851 11.1367 8.96583 11.1226C8.65427 11.546 8.33968 11.9332 8.02654 12.278ZM11.2889 8.66442C11.5028 9.15186 11.6831 9.62348 11.8262 10.0719C11.3623 10.1778 10.8614 10.263 10.3337 10.3263C10.4998 10.0631 10.6637 9.79154 10.8249 9.51218C10.9878 9.22955 11.1426 8.94649 11.2889 8.66442ZM10.2328 9.17071C9.98268 9.60437 9.7259 10.0184 9.46523 10.4091C8.99044 10.4431 8.49993 10.4606 8 10.4606C7.50209 10.4606 7.01776 10.4451 6.55138 10.4148C6.28019 10.0189 6.01784 9.60372 5.76932 9.17444C5.52146 8.74633 5.2934 8.31461 5.08669 7.8853C5.29334 7.455 5.52086 7.02279 5.7673 6.59545L5.76724 6.59554C6.01433 6.16706 6.27438 5.75388 6.54306 5.36046C7.0189 5.32449 7.50684 5.30572 7.99997 5.30572C8.49532 5.30572 8.98392 5.32463 9.45962 5.36091C9.72419 5.75145 9.98248 6.1633 10.2305 6.59184C10.4814 7.02518 10.7119 7.45452 10.9203 7.87559C10.7125 8.3039 10.4826 8.73756 10.2328 9.17071ZM11.6428 1.53796C12.1786 1.84693 12.3869 3.09304 12.0503 4.72707C12.0288 4.83133 12.0047 4.93753 11.9784 5.04516C11.3146 4.89199 10.5938 4.77802 9.83908 4.70721C9.39944 4.08114 8.94385 3.51198 8.48655 3.01922C8.6095 2.90094 8.73227 2.78816 8.85454 2.68173C10.0358 1.65375 11.1398 1.24789 11.6428 1.53796ZM8 6.44015C8.78906 6.44015 9.42875 7.07981 9.42875 7.8689C9.42875 8.65796 8.78906 9.29764 8 9.29764C7.21094 9.29764 6.57125 8.65796 6.57125 7.8689C6.57125 7.07981 7.21094 6.44015 8 6.44015Z" fill="#00D8FF"/>
    </svg>
  )
}

export default ReactLogo;



