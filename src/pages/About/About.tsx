import Display2 from '../../components/atoms/typography/Display2';
import '/src/index.css';

const About = () => {
  return (
    <div className='w-full px-4 pt-[5.5rem] pb-[4.5rem] sm:px-8 sm:pt-[7rem] sm:pb-[6rem] 
    xl:pt-[10rem] xl:pb-[8rem] flex justify-center'>
      <div className='flex max-w-[70rem]'>
        <Display2 color='text-neutral-800'>This is the About page and yes, it´s still under construction!</Display2>
      </div>
    </div>
  )
}

export default About;



