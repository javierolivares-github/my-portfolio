import '/src/index.css';
import Headline2 from '../../../atoms/typography/Headline2';
import BodyText from '../../../atoms/typography/BodyText';
import { ProjectListItemProps } from '../../../../lib/types';


const ProjectListItem = ({ projectImageUrl, projectName, projectDescription, projectTechUrls, projectPageUrl }: ProjectListItemProps) => {
  return (
    // Wrapper 
    <div className='hover:scale-105 transition cursor-pointer flex justify-center items-center w-full lg:max-w-[28.75rem] xl:max-w-[32.5rem]'>
      <a href={projectPageUrl} target='_blank'>
        {/* Container  */}
        <div className='flex flex-col gap-3'>

          {/* Image */}
          <div className='w-full h-[15rem] sm:h-[30rem] lg:h-[33.75rem] overflow-hidden rounded shadow-custom'>
            <img 
              src={projectImageUrl}
              className='object-cover w-full h-auto'
              alt="Reference image" 
            />
          </div>

          {/* Texts */}
          <div className='flex flex-col gap-2'>
            <Headline2 color='text-neutral-900'>{projectName}</Headline2>
            <BodyText color='text-neutral-800'>
              {projectDescription}
            </BodyText>
          </div>

          {/* Thumbs */}
          <div className='flex gap-2 items-center'>
            {projectTechUrls.map((tech) => (
              <img key={tech.id} src={tech.url} alt={tech.name} />
            ))}
          </div>

        </div> 
      </a>
       
    </div>
  )
}

export default ProjectListItem;




