import '/src/index.css';
import ProjectListItemLoading from '../ProjectListItemLoading';

const ProjectListLoading = () => {
  let projects = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={`flex flex-col gap-12 lg:flex-wrap lg:flex-row lg:max-w-[70rem] lg:justify-between lg:items-start`}>
      {projects.map((index) => (
        <ProjectListItemLoading key={index}/>
      ))}
    </div>
  )
}

export default ProjectListLoading;



