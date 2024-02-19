import EmailIcon from "./EmailIcon";

/**The **EmailIcon** component renders an icon with the shape of an envelope. */
export default {
  title: 'Atoms/Icons/EmailIcon',
  component: EmailIcon,
  tags: ['autodocs'],
  argTypes: {
    fillColor: {
      description: 'Specifies the fill color of the icon in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    width: {
      description: 'Specifies the width of the icon in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    height: {
      description: 'Specifies the height of the icon in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    smWidth: {
      description: 'Optional. Specifies the width of the icon in a string format in a medium size screen. Uses TailwindCSS classes.',
      control: 'text',
    },
    smHeight: {
      description: 'Optional. Specifies the height of the icon in a string format in a medium size screen. Uses TailwindCSS classes.',
      control: 'text',
    },
  }
}

/** This is the default version of the **EmailIcon** component:*/
export const Default = {
  args: {
    fillColor: "text-neutral-900",
    width: "w-[1.5rem]",
    height: "h-[1.5rem]",
  },
};