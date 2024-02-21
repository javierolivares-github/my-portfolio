import '/src/index.css';
import { ProjectListProps } from '../../../../lib/types';
import { statusTypes } from '../../../../lib/statusTypes';
import ProjectListItem from '../ProjectListItem';
import ProjectListLoading from '../ProjectListLoading';
import ErrorMessage from '../../../atoms/messages/ErrorMessage';


const ProjectList = ({ status, data }: ProjectListProps) => {
  if (status === statusTypes.loading) {
    return (
      <ProjectListLoading />
    )
  }

  if (status === statusTypes.errored) {
    return (
      <ErrorMessage message='Something went wrong. Failed to load data.'/>
    )
  }

  return (
    <div
      className={`flex flex-col gap-12 lg:flex-row lg:flex-wrap lg:max-w-[70rem] lg:justify-between lg:items-start`}
    >
      {data.map((project, index) => (
        <ProjectListItem 
          key={index}
          projectImageUrl={project.projectImageUrl}
          projectName={project.projectName}
          projectDescription={project.projectDescription}
          projectTechUrls={project.projectTechUrls}
        />
      ))}
    </div>
  )
}

export default ProjectList;



