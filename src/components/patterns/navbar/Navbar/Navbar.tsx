import { useState } from 'react';
import '/src/index.css';
import Logo from '../../../atoms/logos/brand/Logo';
import MenuButton from '../../../atoms/buttons/MenuButton';
import CloseButton from '../../../atoms/buttons/CloseButton';
import PrimaryButton from '../../../atoms/buttons/PrimaryButton';
import { Link } from 'react-router-dom';
import ButtonEffectScale from '../../../atoms/effects/ButtonEffectScale';

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
            <Link to='/' target='_self'>
              <ButtonEffectScale>
                <Logo color='text-neutral-800' visibility={true}>Javier Olivares</Logo>
              </ButtonEffectScale>
            </Link>
          )}

          {/* Menu */}
          <ul className='hidden lg:flex items-center gap-10'>

            {/* Menu-items */}
            {routes.map((route) => (
              <li key={route.name} className={`cursor-pointer hover:underline w-full font-normal 
              text-[1.125rem] leading-[1.75rem] lg:font-semibold text-neutral-800`}>
                <Link to={route.path} target='_self'>{route.name}</Link>
              </li>
            ))}
            
            {/* Contact-Button */}
            <PrimaryButton label='Contact' handleClick={() => {}}/>
            
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
            <ul onClick={closeMobileMenu} className='flex flex-col justify-start items-center gap-8'>
              {/* Menu Items */}
              {routes.map((route) => (
                <li key={route.name} className={`cursor-pointer hover:underline w-full font-normal 
                text-[1.125rem] leading-[1.75rem] lg:font-semibold text-neutral-800`}>
                  <Link to={route.path} target='_self'>{route.name}</Link>
                </li>
              ))}

              {/* Contact Button */}
              <PrimaryButton label='Contact' handleClick={() => {}}/>
            </ul>
          </div>
        )}        
      </div>
    </nav>
  )
}

export default Navbar;



