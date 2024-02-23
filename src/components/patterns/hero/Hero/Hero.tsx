import '/src/index.css';
import Display1 from '../../../atoms/typography/Display1';

const Hero = () => {
  return (
    // Wrapper start
    <div className='w-full px-4 pt-[5.5rem] pb-[4.5rem] sm:px-8 sm:pt-[7rem] sm:pb-[6rem] 
    xl:pt-[10rem] xl:pb-[8rem] flex justify-center'>
      {/* Container start */}
      <div className='w-full flex max-w-[70rem]'>
        <Display1 color='text-neutral-900'>
          Hi, I´m Javier Olivares - Frontend Developer.
        </Display1>
      </div>
      {/* Container end */}
    </div>
    // Wrapper end
  )
}

export default Hero;



