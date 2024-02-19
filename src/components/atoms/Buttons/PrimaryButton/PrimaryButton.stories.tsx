import PrimaryButton from './PrimaryButton';

/** The **PrimaryButton** component renders the main button of the application. */
export default {
  title: 'Atoms/Buttons/PrimaryButton',
  component: PrimaryButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Specifies the content of the button.',
      control: 'text',
    },
    handleClick: {
      description: 'A custom-made function that is activated when the button is pressed.',
      action: 'Button pressed. HandleClick function activated!'
    },
  },
}

/**This is the default version of **PrimaryButton** component:*/
export const Default = {
  args: {
    label: "Contact"
  },
}