import '/src/index.css';
import Headline2 from '../../../atoms/typography/Headline2';
import BodyText from '../../../atoms/typography/BodyText';
import { ProjectListItemProps } from '../../../../lib/types';


const ProjectListItem = ({ projectImageUrl, projectName, projectDescription, projectTechUrls }: ProjectListItemProps) => {
  return (
    // Wrapper 
    <div className='flex justify-center items-center w-full lg:max-w-[460px] xl:max-w-[520px]'>
      {/* Container  */}
      <div className='flex flex-col gap-3'>

        {/* Image */}
        <div className='w-full h-[240px] sm:h-[480px] lg:h-[540px] overflow-hidden rounded shadow-custom'>
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
    </div>
  )
}

export default ProjectListItem;




