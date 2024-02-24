import LinkButton from '../../../atoms/buttons/LinkButton';
import GithubLogo from '../../../atoms/logos/social_logos/GithubLogo';
import LinkedinLogo from '../../../atoms/logos/social_logos/LinkedinLogo';
import YouTubeLogo from '../../../atoms/logos/social_logos/YouTubeLogo';
import BodyText from '../../../atoms/typography/BodyText';
import '/src/index.css';

const Footer = () => {
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

          <LinkButton url={`https://www.linkedin.com/in/francisco-olivaresd/`} target='_blank'>
            <LinkedinLogo fillColorPrimary='text-secondary-50' fillColorSecondary='text-neutral-800' 
            width='w-[2rem]' height='h-[2rem]' />
          </LinkButton>

          <LinkButton url={`https://www.youtube.com/@javierolivares-dev/videos`} target='_blank'>
            <YouTubeLogo fillColorPrimary='text-secondary-50' fillColorSecondary='text-neutral-800' 
            width='w-[2rem]' height='h-[2rem]' />
          </LinkButton>
          
          <LinkButton url={`https://github.com/javierolivares-github`} target='_blank'>
            <GithubLogo fillColorPrimary='text-secondary-50' fillColorSecondary='text-neutral-800' 
            width='w-[2rem]' height='h-[2rem]' />
          </LinkButton>
          
        </div>

      </div>

    </div>
  )
}

export default Footer;



