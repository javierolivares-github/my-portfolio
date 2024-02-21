import '/src/index.css';

const ProjectListItemLoading = () => {
  return (
    // Wrapper
    <div className='w-full lg:max-w-[30rem] xl:max-w-[32.5rem]'>
      {/* Container */}
      <div className='flex flex-col gap-3'>

        {/* Image */}
        <div className='w-full h-[15rem] sm:h-[30rem] lg:h-[33.75rem] rounded bg-gray-pulse-animation'></div>

        {/* Texts */}
        <div className='flex flex-col gap-2'>
          {/* Headline-2__loading */}
          <div className='w-[10rem] h-[1.5rem] rounded bg-gray-pulse-animation'></div>
          {/* Body-texts */}
          <div className='flex flex-col gap-1'>
            {/* Body-text__loading */}
            <div className='w-[22.5rem] h-[1rem] rounded bg-gray-pulse-animation'></div>
            {/* Body-text__loading */}
            <div className='w-[21.25rem] h-[1rem] rounded bg-gray-pulse-animation'></div>
          </div>
        </div>

        {/* Thumbs */}
        <div className='flex items-center gap-2'>
          {/* tech-logo__loading */}
          <div className='w-[1rem] h-[1rem] rounded-full bg-gray-pulse-animation'></div>
          {/* tech-logo__loading */}
          <div className='w-[1rem] h-[1rem] rounded-full bg-gray-pulse-animation'></div>
          {/* tech-logo__loading */}
          <div className='w-[1rem] h-[1rem] rounded-full bg-gray-pulse-animation'></div>
          {/* tech-logo__loading */}
          <div className='w-[1rem] h-[1rem] rounded-full bg-gray-pulse-animation'></div>
        </div>

      </div>
    </div>
  )
}

export default ProjectListItemLoading;



