import Projects from './Projects';
import { mockServer } from '../../../../mock_server/mockServer';
mockServer();

/** The **Projects** component renderize the Projects Section of the Portfolio Website. */
export default {
  title: 'Patterns/Project/Projects',
  component: Projects,
  tags: ['autodocs'],
  argTypes: {
  },
}

/**This is the default version of **Projects** component:*/
export const Default = {
  args: {},
}