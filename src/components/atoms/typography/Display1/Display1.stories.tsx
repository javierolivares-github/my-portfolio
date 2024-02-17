import Display1 from './Display1';

/** The **Display1** component is used to render headings with a big style.*/
export default {
  title: 'Atoms/Typography/Display1',
  component: Display1,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Specifies the content of the heading.',
      control: 'text',
    },
    color: {
      description: 'Specifies the color of the heading.',
      control: 'text',
    },
  },
}

/**This is the default version of **Display1** component:*/
export const Default = {
  args: {
    children: "Hi, I am Javier Olivares - Frontend Developer.",
    color: "text-neutral-900",
  },
}