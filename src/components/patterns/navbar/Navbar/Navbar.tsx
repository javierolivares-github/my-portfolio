import { useState } from 'react';
import '/src/index.css';
import Logo from '../../../atoms/logos/brand/Logo';
import MenuButton from '../../../atoms/buttons/MenuButton';
import CloseButton from '../../../atoms/buttons/CloseButton';
import NavbarText from '../../../atoms/typography/NavbarText';
import PrimaryButton from '../../../atoms/buttons/PrimaryButton';
import LinkButton from '../../../atoms/buttons/LinkButton';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setShowMobileMenu(true);
  }

  const closeMobileMenu = () => {
    setShowMobileMenu(false)
  }

  const routes = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/blog', name: 'Blog' },
  ]

  return (
    // Navbar-wrapper
    <nav className='w-full h-auto flex flex-col items-center px-4 sm:px-8'>

      {/* Wrapper-top */}
      <div className='w-full h-[80px] max-w-[1120px] flex justify-center items-center '>

        {/* Container */}
        <div className='w-full flex justify-between items-center'>

          {/* Logo */}
          {showMobileMenu ? (
            <Logo color='text-neutral-800' visibility={false}>Javier Olivares</Logo>
          ) : (
            <LinkButton url='/' target='_self'>
              <Logo color='text-neutral-800' visibility={true}>Javier Olivares</Logo>
            </LinkButton>
          )}

          {/* Menu */}
          <ul className='hidden lg:flex items-center gap-10'>

            {/* Menu-items */}
            {routes.map((route) => (
              <li key={route.name} className={`cursor-pointer hover:underline w-full font-normal text-[1.125rem] leading-[1.75rem]
              lg:font-semibold text-neutral-800`}>
                <a href={route.path}>{route.name}</a>
              </li>
            ))}
            
            {/* Contact-Button */}
            <LinkButton url='#contact-section' target='_self'>
              <PrimaryButton label='Contact' handleClick={() => {}}/>
            </LinkButton>
            
          </ul>  

          {/* Mobile-menu-triggers */}
          <div className='lg:hidden'>
            {showMobileMenu ? (
              <CloseButton handleClick={closeMobileMenu}/>
            ) : (
              <MenuButton handleClick={openMobileMenu}/>
            )}
          </div>
          
        </div>
      </div>

      {/* Wrapper-down Mobile-menu-content */}
      <div className='w-full lg:hidden'>
        {showMobileMenu &&  (
          <div className='w-full h-[100vh] flex items-center justify-start'>
            <ul className='flex flex-col justify-start items-center gap-8'>
              <NavbarText color='text-neutral-800'>Works</NavbarText>
              <NavbarText color='text-neutral-800'>About</NavbarText>
              <NavbarText color='text-neutral-800'>Blog</NavbarText>
              <PrimaryButton label='Contact' handleClick={() => {}}/>
            </ul>
          </div>
        )}        
      </div>
    </nav>
  )
}

export default Navbar;



