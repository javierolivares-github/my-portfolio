import LinkButton from './LinkButton';
import LinkedinLogo from '../../logos/social_logos/LinkedinLogo';

/** The **LinkButton** component renders... */
export default {
  title: 'Atoms/Buttons/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  argTypes: {
    url: {
      description: 'Defines the URL of the RRSS in a string format.',
      control: 'text',
    },
    target: {
      description: 'Defines a the content of the target attribute.',
      control: 'text',
    },
    children: {
      description: 'Defines the content of the button.',
      control: 'object',
    },
  },
}

/**This is the default version of **LinkButton** component:*/
export const Default = {
  args: {
    url: 'https://www.linkedin.com/in/francisco-olivaresd/',
    children: <LinkedinLogo fillColorPrimary='text-neutral-800' fillColorSecondary='text-white' width='w-8' height='h-8' />,
    target: '_blank'
  },
}