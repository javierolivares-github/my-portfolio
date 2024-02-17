import BodyText from './BodyText';

/** The **BodyText** component is used to render paragraphs.*/
export default {
  title: 'Atoms/Typography/BodyText',
  component: BodyText,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Specifies the content of the text.',
      control: 'text',
    },
    color: {
      description: 'Specifies the color of the text.',
      control: 'text',
    },
  },
}

/**This is the default version of **BodyText** component:*/
export const Default = {
  args: {
    children: "Project inspired in The Official Nike Online Store. Fully responsive. Developed with React, NextJS, TailwindCSS, and others.",
    color: "text-neutral-900",
  },
}