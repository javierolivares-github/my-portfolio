import ProjectListItem from './ProjectListItem';

/** The **ProjectListItem** component renderize a project card used to promote finished works. */
export default {
  title: 'Patterns/Project/ProjectListItem',
  component: ProjectListItem,
  tags: ['autodocs'],
  argTypes: {
    projectImageUrl: {
      description: 'Defines the URL of the image of the project in a string format.',
      control: 'text',
    },
    projectName: {
      description: 'Defines the name of the project in a string format.',
      control: 'text',
    },
    projectDescription: {
      description: 'Defines a description to the project in a string format.',
      control: 'text',
    },
    projectTechUrls: {
      description: 'Defines a string array containing the URLs of the technology images used in the project.',
      control: 'text',
    },
  },
}

/**This is the default version of **ProjectListItem** component:*/
export const Default = {
  args: {
    projectImageUrl: '/images/cutted-min/nike-desktop-shoot-cutted.png',
    projectName: 'Nike Store',
    projectDescription: 'Project inspired in The Official Nike Store. Fully responsive. Developed in React, NextJS, and TailwindCSS.',
    projectTechUrls: [
      { id: 1, name: 'HTML', url: '/svgs/html-logo.svg'},
      { id: 2, name: 'CSS', url: '/svgs/css-logo.svg'},
      { id: 3, name: 'JavaScript', url: '/svgs/js-logo.svg'},
      { id: 4, name: 'React', url: '/svgs/react-logo.svg'},
      { id: 5, name: 'NextJS', url: '/svgs/next-logo.svg'},
      { id: 6, name: 'TailwindCSS', url: '/svgs/tailwindcss-logo.svg'},
    ]
  },
}