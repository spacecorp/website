export interface Category {
  id: string;
  title: string;
}

export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  heroImage?: string;
  galleryImages?: {
    image: string;
    date?: Date;
    description?: string;
  }[];
  date?: string;
  featured?: boolean;
  hidden?: boolean;
  collaboration?: {
    name: string;
    web?: string;
  }[];
  featuredOn?: { web: string; platform: string; shortDescription: string }[];
  links?: {
    appleStore?: string;
    playStore?: string;
    web?: string;
    source?: string;
  };
}

export const categories: Category[] = [
  {
    id: '3d',
    title: '3D modeling',
  },
  {
    id: 'games',
    title: 'Games & add-ons',
  },
  {
    id: 'board-games',
    title: 'Board games',
  },
  {
    id: 'interactive',
    title: 'Interactive',
  },
  {
    id: 'print',
    title: 'Design & Identity',
  },
  {
    id: 'other',
    title: 'Other',
  },
];

export const projects: Project[] = [
  // 3D Category
  {
    id: 'everyday-t',
    category: '3d',
    title: 'Everyday T',
    description: '3D design and visualization for apparel concepts.',
    longDescription:
      'Everyday T represents our exploration into 3D design and visualization for modern apparel. This project showcases detailed modeling, realistic texturing, and conceptual design thinking applied to wearable fashion technology.',
    tags: ['3D', 'Design'],
    image: '/gallery/3d-1.svg',
    featured: true,
    date: new Date('February 2, 2026').toISOString(),
    links: {
      web: 'https://makerworld.com/en/models/2388736-everyday-t-led-lamp-kit-001',
    },
  },
  {
    id: 'music-studio-tools',
    category: '3d',
    title: 'Music studio tools',
    description: '3D models and visual concepts for audio production equipment.',
    longDescription:
      'A comprehensive collection of 3D models designed for audio production environments. This project demonstrates our capability in creating detailed visualizations of complex studio equipment and interfaces.',
    tags: ['3D', 'Audio', 'Tools'],
    image: '/gallery/3d-2.svg',
    links: {
      web: 'https://makerworld.com/en/collections/2643205-music-studio-accessories',
    },
  },

  // Games/Addons Category (World of Warcraft)
  {
    id: 'express-your-elf',
    category: 'games',
    title: 'Express your Elf',
    description: 'World of Warcraft addon for character customization and expression.',
    longDescription:
      'Express your Elf is a World of Warcraft addon that expands character customization options, allowing players to personalize their elven characters with unique visual enhancements and cosmetic features.',
    tags: ['World of Warcraft', 'Addon', 'Character Customization'],
    image: '/gallery/wow-1.svg',
    date: new Date('May 26, 2020').toISOString(),
    links: {
      web: 'https://www.curseforge.com/wow/addons/express-your-elf',
    },
  },
  {
    id: 'nurse-nancy',
    category: 'games',
    title: 'Nurse Nancy',
    description: 'World of Warcraft companion addon with utility and gameplay enhancements.',
    longDescription:
      'Nurse Nancy is a utility-focused World of Warcraft addon that provides helpful in-game features and quality-of-life improvements for healing and support gameplay.',
    tags: ['World of Warcraft', 'Addon', 'Utility'],
    image: '/gallery/wow-2.svg',
    date: new Date('April 23, 2020').toISOString(),
    links: {
      web: 'https://www.curseforge.com/wow/addons/nurse-nancy',
    },
  },
  {
    id: 'divine-window',
    category: 'games',
    title: 'Divine Window',
    description: 'World of Warcraft interface enhancement for divine and holy themes.',
    longDescription:
      'Divine Window enhances the World of Warcraft interface with a focus on holy and divine aesthetics, providing both visual improvements and functional enhancements for players interested in light-themed interfaces.',
    tags: ['World of Warcraft', 'Addon', 'UI'],
    image: '/gallery/wow-3.svg',
    date: new Date('August 11, 2024').toISOString(),
    links: {
      web: 'https://www.curseforge.com/wow/addons/divine-window',
    },
  },
  {
    id: 'afk-answering-machine',
    category: 'games',
    title: 'AFK Answering machine',
    description: 'World of Warcraft addon for automated messages and AFK management.',
    longDescription:
      "AFK Answering Machine is a World of Warcraft addon that handles automated responses and away-from-keyboard management, allowing players to set custom messages while they're unavailable.",
    tags: ['World of Warcraft', 'Addon', 'Automation'],
    image: '/gallery/wow-4.svg',
    date: new Date('April 23, 2023').toISOString(),
    links: {
      web: 'https://www.curseforge.com/wow/addons/afk-anwering-machine',
    },
  },
  {
    id: 'itaunted',
    category: 'games',
    title: 'iTaunted',
    description: 'World of Warcraft addon for social interactions and taunts.',
    longDescription:
      'iTaunted is a World of Warcraft addon designed to enhance social gameplay with customizable taunts and interactive features for player-to-player communication.',
    tags: ['World of Warcraft', 'Addon', 'Social'],
    image: '/gallery/wow-5.svg',
    date: new Date('June 23, 2020').toISOString(),
    links: {
      web: 'https://www.curseforge.com/wow/addons/i-taunted',
    },
  },

  // Board Games Category (Carcassone Expansions)
  {
    id: 'the-ritualists',
    category: 'board-games',
    title: 'Pennautier: The Ritualists',
    description:
      'Carcassone expansion by Pennautier featuring ritual and ceremonial gameplay mechanics.',
    longDescription:
      'The Ritualists is a Carcassone expansion created under the Pennautier label, introducing ritual-based mechanics and ceremonial gameplay elements that add depth to the classic tile-laying game.',
    tags: ['Carcassone', 'Expansion', 'Pennautier'],
    image: '/gallery/carcassone-1.svg',
    date: new Date('June 22, 2024').toISOString(),
    links: {
      web: 'https://github.com/Pennautier/the-ritualists',
      source: 'https://github.com/Pennautier/the-ritualists',
    },
  },
  {
    id: 'magicians-charlatans',
    category: 'board-games',
    title: 'Pennautier: Magicians and Charlatans',
    description: 'Carcassone expansion by Pennautier introducing mystical and deceptive elements.',
    longDescription:
      'Magicians and Charlatans, a Pennautier expansion for Carcassone, introduces mystical themes and deceptive play mechanics, adding new layers of strategy to the beloved board game.',
    tags: ['Carcassone', 'Expansion', 'Pennautier'],
    image: '/gallery/carcassone-2.svg',
    date: new Date('August 31, 2026').toISOString(),
    hidden: true,
  },

  // Apps/Interactive/Web Category
  {
    id: 'chase-bliss-presets',
    category: 'interactive',
    title: 'Presets for Chase Bliss',
    description: 'Web tool for managing and organizing presets for Chase Bliss Audio gear.',
    longDescription:
      'Chase Bliss Presets is a web application that allows audio engineers and musicians to manage, organize, and share presets for Chase Bliss Audio equipment, streamlining the workflow for creative professionals.',
    tags: ['App', 'Midi', 'Hardware control'],
    image: '/gallery/app-1.svg',
    date: new Date('Januari 25, 2025').toISOString(),
    featured: true,
    collaboration: [{ name: 'Laurens Lamberts Software', web: 'https://www.laurenslamberts.nl/' }],
    links: {
      web: 'https://presetsforchasebliss.com/',
      appleStore: 'https://apps.apple.com/nl/app/presets-for-chase-bliss/id6742844431',
      playStore:
        'https://play.google.com/store/apps/details?id=com.laurenslamberts.chaseblisspresets',
    },
  },
  {
    id: 'gleamy',
    category: 'interactive',
    title: 'Gleamy',
    description: 'Interactive web application for creative expression and visual exploration.',
    longDescription:
      'Gleamy is an interactive web application designed for creative expression and visual exploration. It provides tools and features for artists and designers to experiment with digital media in innovative ways.',
    tags: ['Web App', 'Interactive'],
    image: '/gallery/app-2.svg',
    date: new Date('March 07, 2023').toISOString(),
    hidden: true,
  },
  {
    id: 'past',
    category: 'other',
    title: 'Past work',
    description: 'Past work worth showing',
    longDescription:
      'Past work that is worth of showing. This contains various projects of various clients or own work.',
    tags: ['Interactive', 'Identity', 'Design', 'Other'],
    image: '/gallery/app-x.svg',
    featured: false,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}

export function getProjectsByCategory(categoryId: string): Project[] {
  return projects.filter((project) => project.category === categoryId);
}
