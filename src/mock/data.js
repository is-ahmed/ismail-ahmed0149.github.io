import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ismail Ahmed',
  subtitle: 'Aspiring Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'ismailprofile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'RustLock.png',
    title: 'RustLock',
    info: 'This is a terminal password manager that I made in order to learn Rust and cryptography. Still currentlly in development.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    // Will have to find a good image later
    img: null,
    title: 'BinoculaRSS',
    info: 'BinoculaRSS is an RSS reader application, still currently under development. It is built using Kotlin and Jetpack Compose.',
    info2: '',
    url: '',
    repo: 'https://github.com/tminions/binocularss', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'isahmed0149@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://github.com/ismail-ahmed0149',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ismail-ahmed0149',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
