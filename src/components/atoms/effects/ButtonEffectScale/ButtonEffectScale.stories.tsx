import ButtonEffectScale from './ButtonEffectScale';
import LinkedinLogo from '../../logos/social_logos/LinkedinLogo';

/** The **ButtonEffectScale** component renders a scale effect for any component inside. */
export default {
  title: 'Atoms/Buttons/ButtonEffectScale',
  component: ButtonEffectScale,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Defines the content of the effect.',
      control: 'object',
    },
  },
}

/**This is the default version of **ButtonEffectScale** component:*/
export const Default = {
  args: {
    children: <LinkedinLogo fillColorPrimary='text-neutral-800' fillColorSecondary='text-white' width='w-8' height='h-8' />,
  },
}