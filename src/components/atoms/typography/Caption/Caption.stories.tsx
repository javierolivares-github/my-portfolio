import Caption from './Caption';

/** The **Caption** component is used to render caption text.*/
export default {
  title: 'Atoms/Typography/Caption',
  component: Caption,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Specifies the content of the caption.',
      control: 'text',
    },
    color: {
      description: 'Specifies the color of the caption.',
      control: 'text',
    },
  },
}

/**This is the default version of **Caption** component:*/
export const Default = {
  args: {
    children: "Designed and developed by Javier Olivares © 2024. All rights reserved.",
    color: "text-neutral-900",
  },
}