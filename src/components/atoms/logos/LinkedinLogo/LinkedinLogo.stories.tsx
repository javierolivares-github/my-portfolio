import LinkedinLogo from "./LinkedinLogo";

/**The **LinkedinLogo** component renders an icon with the shape of the LinkedIn logo. */
export default {
  title: 'Atoms/Logos/LinkedinLogo',
  component: LinkedinLogo,
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
      description: 'Specifies the width of the icon in a string format in a medium size screen. Uses TailwindCSS classes.',
      control: 'text',
    },
    smHeight: {
      description: 'Specifies the height of the icon in a string format in a medium size screen. Uses TailwindCSS classes.',
      control: 'text',
    },
  }
}

/** This is the default version of the **LinkedinLogo** component:*/
export const Default = {
  args: {
    fillColor: "text-neutral-900",
    width: "w-[2rem]",
    height: "h-[2rem]",
  },
};