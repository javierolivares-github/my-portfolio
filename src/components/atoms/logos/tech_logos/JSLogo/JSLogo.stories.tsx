import JSLogo from "./JSLogo";

/**The **JSLogo** component renders an icon with the shape of the JavaScripts logo. */
export default {
  title: 'Atoms/Logos/JSLogo',
  component: JSLogo,
  tags: ['autodocs'],
  argTypes: {
    width: {
      description: 'Specifies the width of the icon in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    height: {
      description: 'Specifies the height of the icon in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    smWidth: {
      description: 'Specifies the width of the icon in a string format in a medium size screen. Uses TailwindCSS classes. Optional.',
      control: 'text',
    },
    smHeight: {
      description: 'Specifies the height of the icon in a string format in a medium size screen. Uses TailwindCSS classes. Optional.',
      control: 'text',
    },
  }
}

/** This is the default version of the **JSLogo** component:*/
export const Default = {
  args: {
    width: "w-[1rem]",
    height: "h-[1rem]",
  },
};