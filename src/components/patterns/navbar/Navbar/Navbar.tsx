import { useState } from 'react';
import '/src/index.css';
import Logo from '../../../atoms/logos/brand/Logo';
import MenuButton from '../../../atoms/buttons/MenuButton';
import CloseButton from '../../../atoms/buttons/CloseButton';
import NavbarText from '../../../atoms/typography/NavbarText';
import PrimaryButton from '../../../atoms/buttons/PrimaryButton';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setShowMobileMenu(true);
  }

  const closeMobileMenu = () => {
    setShowMobileMenu(false)
  }

  return (
    // navbar
    <nav className='w-full h-auto flex flex-col px-4 sm:px-8'>
      {/* navbar wrapper top start */}
      <div className='w-full h-[80px] max-w-[1120px] flex justify-center items-center '>

        {/* navbar container start */}
        <div className='w-full flex justify-between items-center'>
          {/* logo start */}
          {showMobileMenu ? (
            <Logo color='text-neutral-800' visibility={false}>Javier Olivares</Logo>
          ) : (
            <Logo color='text-neutral-800' visibility={true}>Javier Olivares</Logo>
          )}
          {/* logo end */}

          {/* menu start */}
            <ul className='hidden lg:flex items-center gap-10'>
              <NavbarText color='text-neutral-800'>Works</NavbarText>
              <NavbarText color='text-neutral-800'>About</NavbarText>
              <NavbarText color='text-neutral-800'>Blog</NavbarText>
              <PrimaryButton label='Contact' handleClick={() => {}}/>
            </ul>
          {/* menu end */}

          {/* mobile menu trigger start */}
          <div className='lg:hidden'>
            {showMobileMenu ? (
              <CloseButton handleClick={closeMobileMenu}/>
            ) : (
              <MenuButton handleClick={openMobileMenu}/>
            )}
          </div>
          {/* mobile menu trigger end */}
          
        </div>
        {/* navbar container end */}

      </div>
      {/* navbar-wrapper-top-end */}

      {/* navbar wrapper down start */}
      <div className='lg:hidden'>
        {showMobileMenu &&  (
          // mobile menu start
          <div className='w-full h-[100vh] flex items-center'>
            <ul className='flex flex-col justify-start items-center gap-8'>
              <NavbarText color='text-neutral-800'>Works</NavbarText>
              <NavbarText color='text-neutral-800'>About</NavbarText>
              <NavbarText color='text-neutral-800'>Blog</NavbarText>
              <PrimaryButton label='Contact' handleClick={() => {}}/>
            </ul>
          </div>
          // mobile menu end
        )}        
      </div>
      {/* navbar wrapper down end */}
      
    </nav>
  )
}

export default Navbar;



