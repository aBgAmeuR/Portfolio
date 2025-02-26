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
};

export const bookmarks = [
  {
    title: 'pqoqubbw/icons',
    description: 'beautifully crafted animated icons.',
    image: '/bookmarks/pqoqubbw-icons.webp',
    link: 'https://icons.pqoqubbw.dev/',
    category: 'components',
  },
  {
    title: 'tremorlabs',
    description:
      'React UI components with Tailwind CSS for charts and dashboards.',
    image: '/bookmarks/tremor.webp',
    link: 'https://tremor.so/',
    category: 'components',
  },
] satisfies Bookmark[];
