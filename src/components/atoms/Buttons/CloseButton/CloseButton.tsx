import '/src/index.css';
import CloseIcon from '../../icons/CloseIcon';
import { IconButton } from '../../../../lib/types';

const CloseButton = ({ handleClick }: IconButton ) => {
  return (
    <button 
      className='border-none outline-none cursor-pointer'
      onClick={handleClick}
    >
      <CloseIcon fillColor='text-color-800' width='w-[1.5rem]' height='h-[1.5rem]'/>
    </button>
  )
}

export default CloseButton;



