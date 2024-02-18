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
    onClick: {
      description: 'Fires an action when the button is pressed.',
      action: 'Button clicked!'
    },
  },
}

/**This is the default version of **PrimaryButton** component:*/
export const Default = {
  args: {
    label: "Contact"
  },
}