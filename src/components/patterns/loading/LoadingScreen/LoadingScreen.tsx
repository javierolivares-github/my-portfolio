import Display2 from '../../../atoms/typography/Display2';
import '/src/index.css';

const LoadingScreen = () => {
  return (
    // Wrapper
    <div className='w-full flex justify-center items-center'>
      {/* Container */}
      <div className='w-full xl:max-w-[70rem] h-[100vh] flex justify-center items-center'>
        {/* Headline */}
        <Display2 color='text-neutral-400'>Loading...</Display2>
      </div>
    </div>
  )
}

export default LoadingScreen;



