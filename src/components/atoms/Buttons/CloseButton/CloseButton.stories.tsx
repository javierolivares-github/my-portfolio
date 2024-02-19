import CloseButton from './CloseButton';

/** The **CloseButton** component renderize a button that serves for close the menu's application. */
export default {
  title: 'Atoms/Buttons/CloseButton',
  component: CloseButton,
  tags: ['autodocs'],
  argTypes: {
    handleClick: {
      description: 'Specifies a custom function.',
      action: 'Button pressed. HandleClick activated.'
    },
  },
}

/**This is the default version of **CloseButton** component:*/
export const Default = {
  args: {},
}