import NavbarText from './NavbarText';

/** The **NavbarText** component is used to render Navbar text.*/
export default {
  title: 'Atoms/Typography/NavbarText',
  component: NavbarText,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Specifies the content of the NavbarText.',
      control: 'text',
    },
    color: {
      description: 'Specifies the color of the NavbarText.',
      control: 'text',
    },
  },
}

/**This is the default version of **NavbarText** component:*/
export const Default = {
  args: {
    children: "Work",
    color: "text-neutral-900",
  },
}