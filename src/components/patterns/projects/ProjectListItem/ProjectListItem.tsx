import '/src/index.css';
import Headline2 from '../../../atoms/typography/Headline2';
import BodyText from '../../../atoms/typography/BodyText';
import HtmlLogo from '../../../atoms/logos/tech_logos/HtmlLogo';
import CssLogo from '../../../atoms/logos/tech_logos/CssLogo';
import JSLogo from '../../../atoms/logos/tech_logos/JSLogo';
import ReactLogo from '../../../atoms/logos/tech_logos/ReactLogo';
import NextLogo from '../../../atoms/logos/tech_logos/NextLogo';
import TailwindLogo from '../../../atoms/logos/tech_logos/TailwindLogo';

const ProjectListItem = () => {
  return (
    // Wrapper 
    <div className='flex justify-center items-center w-full lg:max-w-[460px] xl:max-w-[520px]'>
      {/* Container  */}
      <div className='flex flex-col gap-3'>
        {/* Image */}
        <div className='w-full h-[240px] sm:h-[480px] lg:h-[540px] overflow-hidden rounded shadow-custom'>
          <img 
            src="/images/cutted-min/nike-desktop-shoot-cutted.png"
            className='object-cover w-full h-auto'
            alt="Reference image" 
          />
        </div>
        {/* Texts */}
        <div className='flex flex-col gap-2'>
          <Headline2 color='text-neutral-900'>Nike Store</Headline2>
          <BodyText color='text-neutral-800'>
            Project inspired in The Official Nike Store. Fully responsive. Developed in React, NextJS, and TailwindCSS.
          </BodyText>
        </div>
        {/* Thumbs */}
        <div className='flex gap-2 items-center'>
          <HtmlLogo width='w-[14px] sm:w-[18px]' height='h-[14px] sm:h-[18px]'/>
          <CssLogo width='w-[14px] sm:w-[18px]' height='h-[14px] sm:h-[18px]'/>
          <JSLogo width='w-[14px] sm:w-[18px]' height='h-[14px] sm:h-[18px]'/>
          <ReactLogo width='w-[14px] sm:w-[18px]' height='h-[14px] sm:h-[18px]'/>
          <NextLogo width='w-[14px] sm:w-[18px]' height='h-[14px] sm:h-[18px]'/>
          <TailwindLogo width='w-[14px] sm:w-[18px]' height='h-[14px] sm:h-[18px]'/>
        </div>
      </div>  
    </div>
  )
}

export default ProjectListItem;



