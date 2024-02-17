import Display2 from './Display2';

/** The **Display2** component is used to render headings with a medium style.*/
export default {
  title: 'Atoms/Typography/Display2',
  component: Display2,
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

/**This is the default version of **Display2** component:*/
export const Default = {
  args: {
    children: "Get in touch",
    color: "text-neutral-900",
  },
}