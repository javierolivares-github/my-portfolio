import Headline3 from './Headline3';

/** The **Headline3** component is used to render headings with a small style.*/
export default {
  title: 'Atoms/Typography/Headline3',
  component: Headline3,
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

/**This is the default version of **Headline3** component:*/
export const Default = {
  args: {
    children: "EMAIL",
    color: "text-neutral-900",
  },
}