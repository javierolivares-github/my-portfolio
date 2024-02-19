import MenuButton from './MenuButton';

/** The **MenuButton** component renderize a button that serves to open the menu's application. */
export default {
  title: 'Atoms/Buttons/MenuButton',
  component: MenuButton,
  tags: ['autodocs'],
  argTypes: {
    handleClick: {
      description: 'Specifies a custom function.',
      action: 'Button pressed. HandleClick activated.'
    },
  },
}

/**This is the default version of **MenuButton** component:*/
export const Default = {
  args: {},
}