import { Link } from 'react-router-dom';
import ButtonEffectScale from '../../../atoms/effects/ButtonEffectScale';
import GithubLogo from '../../../atoms/logos/social_logos/GithubLogo';
import LinkedinLogo from '../../../atoms/logos/social_logos/LinkedinLogo';
import YouTubeLogo from '../../../atoms/logos/social_logos/YouTubeLogo';
import BodyText from '../../../atoms/typography/BodyText';
import '/src/index.css';

const Footer = () => {
  const socialMediaRoutes = [
    { path: "https://www.linkedin.com/in/francisco-olivaresd/", name: "Linkedin" },
    { path: "https://www.youtube.com/@javierolivares-dev/videos", name: "Youtube" },
    { path: "https://github.com/javierolivares-github", name: "Github" },
  ]

  return (
    // footer-wrapper
    <div className='w-full flex flex-col justify-center items-center px-4 sm:px-8 py-8 bg-neutral-800'>

      {/* footer-container */}
      <div className='w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 sm:gap-4 lg:max-w-[70rem]'>

        {/* footer-top */}
        <div className='flex justify-center items-center gap-2'>
          <BodyText color='text-primary-50' align='text-center'>
            Designed and developed by Javier Olivares © 2024. All rights reserved.
          </BodyText>
        </div>

        {/* footer-bottom */}
        <div className="flex justify-center items-center gap-4">

          <Link to={socialMediaRoutes[0]?.path} target='_blank'>
            <ButtonEffectScale>
              <LinkedinLogo fillColorPrimary='text-secondary-50' fillColorSecondary='text-neutral-800' 
              width='w-[2rem]' height='h-[2rem]' />
            </ButtonEffectScale>
          </Link>
          
          <Link to={socialMediaRoutes[1]?.path} target='_blank'>
            <ButtonEffectScale>
              <YouTubeLogo fillColorPrimary='text-secondary-50' fillColorSecondary='text-neutral-800' width='w-[2rem]' height='h-[2rem]' />
            </ButtonEffectScale>
          </Link>

          <Link to={socialMediaRoutes[2]?.path} target='_blank'>
            <ButtonEffectScale>
              <GithubLogo fillColorPrimary='text-secondary-50' fillColorSecondary='text-neutral-800' width='w-[2rem]' height='h-[2rem]' />
            </ButtonEffectScale>
          </Link>
          
        </div>

      </div>

    </div>
  )
}

export default Footer;



