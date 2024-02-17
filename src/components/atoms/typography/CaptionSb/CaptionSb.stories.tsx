import CaptionSb from './CaptionSb';

/** The **CaptionSb** component is used to render caption text with a semibold style.*/
export default {
  title: 'Atoms/Typography/CaptionSb',
  component: CaptionSb,
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

/**This is the default version of **CaptionSb** component:*/
export const Default = {
  args: {
    children: "Work",
    color: "text-neutral-900",
  },
}