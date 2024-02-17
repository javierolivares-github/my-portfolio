import Headline1 from './Headline1';

/** The **Headline1** component is used to render headings with a medium style.*/
export default {
  title: 'Atoms/Typography/Headline1',
  component: Headline1,
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

/**This is the default version of **Headline1** component:*/
export const Default = {
  args: {
    children: "Recent works",
    color: "text-neutral-900",
  },
}