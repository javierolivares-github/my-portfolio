import Headline2 from './Headline2';

/** The **Headline2** component is used to render headings with a medium style.*/
export default {
  title: 'Atoms/Typography/Headline2',
  component: Headline2,
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

/**This is the default version of **Headline2** component:*/
export const Default = {
  args: {
    children: "Nike Store",
    color: "text-neutral-900",
  },
}