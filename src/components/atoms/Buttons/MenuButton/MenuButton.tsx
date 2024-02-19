import '/src/index.css';
import MenuIcon from '../../icons/MenuIcon';
import { IconButton } from '../../../../lib/types';

const MenuButton = ({ handleClick }: IconButton ) => {
  return (
    <button 
      className='border-none outline-none cursor-pointer'
      onClick={handleClick}
    >
      <MenuIcon fillColor='text-color-800' width='w-[1.5rem]' height='h-[1.5rem]'/>
    </button>
  )
}

export default MenuButton;


