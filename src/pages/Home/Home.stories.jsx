import Home from './Home';
import { mockServer } from '../../mock_server/mockServer';
mockServer();

/** The **Home** component renderize the main section of the application. */
export default {
  title: 'Pages/Home',
  component: Home,
  tags: ['autodocs'],
  argTypes: {
  },
}

/**This is the default version of **Home** component:*/
export const Default = {
  args: {},
}