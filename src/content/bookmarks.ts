export const bookmarksCategories = [
  'useful libraries',
  'components',
  'tools',
  'others',
] as const;

type BookmarksCategories = (typeof bookmarksCategories)[number];

export type Bookmark = {
  title: string;
  description: string;
  image: string;
  link: string;
  category: BookmarksCategories;
  isNew?: boolean;
};

export const bookmarks = [
  {
    title: 'pqoqubbw/icons',
    description: 'beautifully crafted animated icons.',
    image: '/bookmarks/pqoqubbw-icons.webp',
    link: 'https://icons.pqoqubbw.dev/',
    category: 'useful libraries',
  },
  {
    title: 'tremor',
    description:
      'React UI components with Tailwind CSS for charts and dashboards.',
    image: '/bookmarks/tremor.webp',
    link: 'https://tremor.so/',
    category: 'components',
  },
  {
    title: 'Shadcn Blocks',
    description:
      'Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.',
    image: '/bookmarks/shadcn-blocks.webp',
    link: 'https://nsui.irung.me/',
    category: 'components',
  },
  {
    title: 'Origin UI',
    description: 'Beautiful UI components built with Tailwind CSS and React.',
    image: '/bookmarks/origin-ui.webp',
    link: 'https://originui.com/',
    category: 'components',
  },
  {
    title: 'Fancy Components',
    description:
      'Ready to use, fancy React components to make the web fun again. Free & Open Source.',
    image: '/bookmarks/fancy-components.webp',
    link: 'https://www.fancycomponents.dev/',
    category: 'components',
  },
  {
    title: 'Kibo UI',
    description: 'Composable, accessible open-source components for shadcn/ui.',
    image: '/bookmarks/kibo-ui.webp',
    link: 'https://www.kibo-ui.com/',
    category: 'components',
  },
  {
    title: 'Lector',
    description: 'Headless React PDF viewer for the web.',
    image: '/bookmarks/lector.webp',
    link: 'https://lector-weld.vercel.app/',
    category: 'components',
  },
  {
    title: 'Emoji Picker by Ferruccio',
    description:
      'A fast, composable, unstyled emoji picker made with Tailwind & React.',
    image: '/bookmarks/emoji-ferrucc.webp',
    link: 'https://emoji.ferrucc.io/',
    category: 'components',
  },
  {
    title: 'Prose UI',
    description: 'Refined Typography and Components for your MDX Content.',
    image: '/bookmarks/prose-ui.webp',
    link: 'https://prose-ui.com/',
    category: 'components',
  },
  {
    title: 'How to Animate Multiplayer Cursors',
    description:
      'Learn methods to animate live cursors in collaborative tools.',
    image: '/bookmarks/how-to-animate-multiplayer-cursors.webp',
    link: 'https://liveblocks.io/blog/how-to-animate-multiplayer-cursors',
    category: 'others',
  },
  {
    title: 'Swapy',
    description:
      'A simple JavaScript tool for converting any layout you have to drag-to-swap layout.',
    image: '/bookmarks/number-flow.webp',
    link: 'https://swapy.tahazsh.com/',
    category: 'useful libraries',
  },
  {
    title: 'NumberFlow for React',
    description:
      'A React component to animate numbers. Dependency-free. Accessible. Customizable.',
    image: '/bookmarks/swapy.webp',
    link: 'https://number-flow.barvian.me/',
    category: 'useful libraries',
  },
  {
    title: 'og.new',
    description: 'Generate beautiful Open Graph images with zero effort.',
    image: '/bookmarks/og-new.webp',
    link: 'https://og.new/',
    category: 'tools',
  },
  {
    title: 'UploadThing',
    description: 'The easiest way to upload files to your app.',
    image: '/bookmarks/uploadthing.webp',
    link: 'https://uploadthing.com/',
    category: 'tools',
  },
  {
    title: 'AlignUI',
    description: 'Beautiful UI components built with Tailwind CSS and React.',
    image: '/bookmarks/alignui.webp',
    link: 'https://alignui.com/',
    category: 'components',
  },
] satisfies Bookmark[];
