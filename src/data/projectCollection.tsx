import { ProjectListItemProps } from "../lib/types"

type ProjectCollectionType = ProjectListItemProps[] | [];

export const projectCollection: ProjectCollectionType = [
  {
    id: 1,
    projectImageUrl: 'images/cutted-min/nike-desktop-shoot-cutted.png',
    projectName: 'Nike Website Clone',
    projectDescription: 'A fully responsive website inspired in The Official Online Nike Store. Developed in React, NextJS, and TailwindCSS.',
    projectTechUrls: [
      { id: 1, name: 'HTML', url: '/svgs/html-logo.svg'},
      { id: 2, name: 'CSS', url: '/svgs/css-logo.svg'},
      { id: 3, name: 'JavaScript', url: '/svgs/js-logo.svg'},
      { id: 4, name: 'React', url: '/svgs/react-logo.svg'},
      { id: 5, name: 'NextJS', url: '/svgs/next-logo.svg'},
      { id: 6, name: 'TailwindCSS', url: '/svgs/tailwindcss-logo.svg'},
    ],
    projectPageUrl: 'https://nike-clone-javier-olivares.vercel.app/',
  },
  {
    id: 2,
    projectImageUrl: 'images/cutted-min/twitter-desktop-shoot-cutted.png',
    projectName: 'Twitter Website Clone',
    projectDescription: 'A fully responsive website. Project inspired in The Old Twitter Website. Developed in React, TypeScript and TailwindCSS. Tested with React Testing Library and Vitest. Mocking API with MirageJS.',
    projectTechUrls: [
      { id: 1, name: 'HTML', url: '/svgs/html-logo.svg'},
      { id: 2, name: 'CSS', url: '/svgs/css-logo.svg'},
      { id: 3, name: 'JavaScript', url: '/svgs/js-logo.svg'},
      { id: 4, name: 'TypeScript', url: '/svgs/typescript-logo.svg'},
      { id: 5, name: 'React', url: '/svgs/react-logo.svg'},
      { id: 6, name: 'TailwindCSS', url: '/svgs/tailwindcss-logo.svg'},
    ],
    projectPageUrl: 'https://twitter-clone-javier-olivares.netlify.app/',
  },
  {
    id: 3,
    projectImageUrl: 'images/cutted-min/todoapp-desktop-shoot-cutted.png',
    projectName: 'Todo App',
    projectDescription: 'A fully responsive CRUD App. Developed in React and JavaScript.',
    projectTechUrls: [
      { id: 1, name: 'HTML', url: '/svgs/html-logo.svg'},
      { id: 2, name: 'CSS', url: '/svgs/css-logo.svg'},
      { id: 3, name: 'JavaScript', url: '/svgs/js-logo.svg'},
      { id: 4, name: 'React', url: '/svgs/react-logo.svg'},
    ],
    projectPageUrl: 'https://react-todo-javier-olivares.netlify.app/',
  },
  {
    id: 4,
    projectImageUrl: 'images/cutted-min/omnifood-desktop-shoot-cutted.png',
    projectName: 'Omnifood',
    projectDescription: 'Project inspired in the world of healthy food and people without time. A fully responsive website. Developed in HTML, CSS, and JavaScript.',
    projectTechUrls: [
      { id: 1, name: 'HTML', url: '/svgs/html-logo.svg'},
      { id: 2, name: 'CSS', url: '/svgs/css-logo.svg'},
      { id: 3, name: 'JavaScript', url: '/svgs/js-logo.svg'},
    ],
    projectPageUrl: 'https://omnifood-code-projects.netlify.app/',
  },
  {
    id: 5,
    projectImageUrl: 'images/cutted-min/agencia8px-desktop-shoot-cutted.png',
    projectName: 'Agencia8px',
    projectDescription: 'A fully responsive website inspired in The Digital Marketing World. Developed HTML, CSS, and JavaScript.',
    projectTechUrls: [
      { id: 1, name: 'HTML', url: '/svgs/html-logo.svg'},
      { id: 2, name: 'CSS', url: '/svgs/css-logo.svg'},
      { id: 3, name: 'JavaScript', url: '/svgs/js-logo.svg'},
    ],
    projectPageUrl: 'https://agencia8px.netlify.app/',
  },
  {
    id: 6,
    projectImageUrl: 'images/cutted-min/idstudio-desktop-shoot-cutted.png',
    projectName: 'idStudio',
    projectDescription: 'Project inspired by Interior Design Business. A fully responsive website. Developed in HTML, CSS, and JavaScript.',
    projectTechUrls: [
      { id: 1, name: 'HTML', url: '/svgs/html-logo.svg'},
      { id: 2, name: 'CSS', url: '/svgs/css-logo.svg'},
      { id: 3, name: 'JavaScript', url: '/svgs/js-logo.svg'},
    ],
    projectPageUrl: 'https://id-studio.netlify.app/',
  },
  {
    id: 7,
    projectImageUrl: 'images/cutted-min/travel-desktop-shoot-cutted.png',
    projectName: 'Travel',
    projectDescription: 'Project inspired in by The Adventure and Travels. Fully responsive. Developed in React, and CSS.',
    projectTechUrls: [
      { id: 1, name: 'HTML', url: '/svgs/html-logo.svg'},
      { id: 2, name: 'CSS', url: '/svgs/css-logo.svg'},
      { id: 3, name: 'JavaScript', url: '/svgs/js-logo.svg'},
      { id: 4, name: 'React', url: '/svgs/react-logo.svg'},
    ],
    projectPageUrl: 'https://react-responsivewebsite-trvl.netlify.app/',
  },
]