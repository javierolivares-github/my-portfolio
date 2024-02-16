---
to: src/components/atoms/<%=name%>/<%=name%>.stories.tsx
---
import <%=name%> from './<%=name%>';

/** The **<%=name%>** component renders... */
export default {
  title: 'Atoms/<%=name%>',
  component: <%=name%>,
  tags: ['autodocs'],
  argTypes: {
    argument: {
      description: 'lorem ipsum...',
      control: 'text',
    },
  },
}

/**This is the default version of **<%=name%>** component:*/
export const Default = {
  args: {},
}