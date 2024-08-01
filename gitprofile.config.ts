// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'out-of-context', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['out-of-context/giphy'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'TNT DJ ',
          description:
            'a DJ reservation service for a local business, enabling 
              users to book the provided services online. using Angular 17, Node.js, 
              MongoDB and Express.js',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeAeUDKy7DrHMGTH0IzIJG_ayL4tVPKJRRQ&s',
          link: 'https://tnt-dj-group.web.app/explosion',
        },
        {
          title: 'Alone with a stranger',
          description:
            'a chatbot using TensorFlow and Python to serve as an in
game assistant, using natural language processing (NLP) algorithms 
to provide accurate and context-aware responses.',
          imageUrl:
            'https://img.freepik.com/free-photo/view-boat-water_23-2150693432.jpg?t=st=1722527761~exp=1722531361~hmac=38265ee8aaed4a41ad2f5e278d78bd908d6cce42fbafc616f16b892d838ede0d&w=900',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mohammad Salhi',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'mohammad-salhi',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.arifszn.com',
    phone: '',
    email: 'salhi13.ps@gmail.com',
    leetcode:'https://leetcode.com/u/out-of-context/'
  },
  resume: {
    fileUrl:
      '/public/Mohammad-salhi-resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Angular',
    'TypeScript',
    'JavaScript',
    'JQuery',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'HTML',
    'SCSS',
    'Python'
  ],
  experiences: [
    {
      company: 'Harri LLC',
      position: 'Software Engineer',
      from: 'November 2021',
      to: 'April 2024',
      companyLink: 'https://harri.com/',
    },
    {
      company: 'Nvidia',
      position: 'Software Verification Engineer',
      from: 'November 2020',
      to: 'November 2021',
      companyLink: 'https://www.nvidia.com/en-us/',
    },
    {
      company: 'Nvidia',
      position: 'Software Engineer',
      from: 'January 2020',
      to: 'November 2021',
      companyLink: 'https://www.nvidia.com/en-us/',
    },
  ],
  certifications: [
  ],
  educations: [
    {
      institution: 'An-Najah National University',
      degree: 'Bachelor of computer engineering',
      from: '2014',
      to: '2019',
    }
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    
  },
  googleAnalytics: {
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
   
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
