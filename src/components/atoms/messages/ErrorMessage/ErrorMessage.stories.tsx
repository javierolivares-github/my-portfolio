import ErrorMessage from './ErrorMessage';

/** The **ErrorMessage** component renderize a custom error message for the user. */
export default {
  title: 'Atoms/Messages/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  argTypes: {
    message: {
      description: 'Specifies the content of the message in a string format.',
      control: 'text',
    },
  },
}

/**This is the default version of **ErrorMessage** component:*/
export const Default = {
  args: {
    message: "Something went wrong. Failed to load data."
  },
}