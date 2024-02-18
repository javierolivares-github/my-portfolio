import Logo from './Logo';

/** The **Logo** component renders the Logo. */
export default {
  title: 'Atoms/Logos/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Specifies the content of the logo.',
      control: 'text',
    },
    color: {
      description: 'Specifies the color of the logo.',
      control: 'text',
    },
  },
}

/**This is the default version of **Logo** component:*/
export const Default = {
  args: {
    children: "Javier Olivares",
    color: "text-neutral-900",
  },
}