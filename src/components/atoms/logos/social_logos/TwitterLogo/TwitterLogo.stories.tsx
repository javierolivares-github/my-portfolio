import TwitterLogo from "./TwitterLogo";

/**The **TwitterLogo** component renders an icon with the shape of the Twitter logo. */
export default {
  title: 'Atoms/Logos/TwitterLogo',
  component: TwitterLogo,
  tags: ['autodocs'],
  argTypes: {
    fillColorPrimary: {
      description: 'Specifies the primary fill color of the icon in a string format. Uses TailwindCSS classes.',
      control: 'text',
    },
    fillColorSecondary: {
      description: 'Specifies the secondary fill color of the icon in a string format. Uses TailwindCSS classes.',
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
  }
}

/** This is the default version of the **TwitterLogo** component:*/
export const Default = {
  args: {
    fillColorPrimary: "text-neutral-900",
    fillColorSecondary: "text-white-900",
    width: "w-[2rem]",
    height: "h-[2rem]",
  },
};