import { useState, useEffect } from 'react';
import { statusTypes } from '../../../../lib/statusTypes';
import { ProjectListProps } from '../../../../lib/types';
import ProjectList from '../ProjectList';
import Headline1 from '../../../atoms/typography/Headline1';
import '/src/index.css';
import { mockServer } from '../../../../mock_server/mockServer';
mockServer();

const Projects = () => {
  const [ projectState, setProjectState ] = useState<ProjectListProps>({
    status: statusTypes.loading,
    data: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const projectFetch = await fetch('/api/projects');
        const projectResponse = await projectFetch.json();
        console.log(projectResponse);
        setProjectState({
          status: statusTypes.loaded,
          data: projectResponse.data,
        })
      } catch (error) {
        console.log(error);
        setProjectState({
          status: statusTypes.errored,
          data: [],
        })
      }
    }

    getData();
  }, []);

  return (
    // projects-wrapper
    <div className={`w-full flex justify-center px-4 sm:px-8 pt-8 pb-[4.5rem] lg:pb-[96px] xl:pb-[112px]`}>
      {/* container */}
      <div className={`w-full flex flex-col gap-8 sm:gap-12 lg:max-w-[70rem]`}>
        {/* title */}
        <Headline1 color='text-neutral-900'>Recent projects:</Headline1>
        {/* project-list */}
        <ProjectList
          status={projectState.status}
          data={projectState.data}
        />
      </div>
    </div>
  )
}

export default Projects;



