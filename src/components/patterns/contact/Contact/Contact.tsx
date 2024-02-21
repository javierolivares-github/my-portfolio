import EmailIcon from '../../../atoms/icons/EmailIcon';
import BodyText from '../../../atoms/typography/BodyText';
import Display2 from '../../../atoms/typography/Display2';
import Headline3 from '../../../atoms/typography/Headline3';
import '/src/index.css';

const Contact = () => {
  return (
    // wrapper
    <div className={`w-full flex justify-center items-center px-4 sm:px-8 py-[4.5rem] sm:py-[6rem] lg:py-[7rem] bg-neutral-900`}>
      {/* container */}
      <div className={`w-full lg:max-w-[70rem] flex flex-col items-center gap-6 sm:gap-8`}>

        {/* heading */}
        <Display2 color='text-white-900'>Get in touch</Display2>

        {/* text */}
        <BodyText color='text-primary-300' align='text-center'>
          You can write to me at the indicated email below. I will contact you as soon as possible. Thanks.
        </BodyText>

        {/* contact__email */}
        <div className={`w-full lg:max-w-[29rem] rounded-lg flex flex-col justify-center items-center gap-2 
        px-4 py-6 bg-neutral-800`}>
          {/* contact__email__top */}
          <div className='flex justify-center items-center gap-2'>
            <EmailIcon fillColor='text-primary-300' width='w-[2rem]' height='h-[2rem]'/>
            <Headline3 color='text-white-900'>EMAIL</Headline3>
          </div>
          {/* text */}
          <BodyText color='text-white-900'>olivaresd.francisco@gmail.com</BodyText>
        </div>

      </div>
    </div>
  )
}

export default Contact;



