import ProjectList from './ProjectList';
import { projectCollection } from '../../../../data/projectCollection';

/** The **ProjectList** component renderize a list of project of the portfolio page. */
export default {
  title: 'Patterns/Project/ProjectList',
  component: ProjectList,
  tags: ['autodocs'],
  argTypes: {
    status: {
      description: 'Defines the status of the component in a string format. The status can be loading, errored, and loaded.',
      control: 'text',
    },
    data: {
      description: 'An array that defines the database which is used to populate the UI.',
      control: 'object',
    },
  },
}

/**This is the loaded version of **ProjectList** component:*/
export const Loaded = {
  args: {
    status: 'loaded',
    data: projectCollection,
  },
}

/**This is the loading version of **ProjectList** component:*/
export const Loading = {
  args: {
    status: 'loading',
    data: [],
  },
}

/**This is the errored version of **ProjectList** component:*/
export const Errored = {
  args: {
    status: 'errored',
    data: [],
  },
}