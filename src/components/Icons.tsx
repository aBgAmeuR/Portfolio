import {
  Css3Plain,
  ExpressOriginal,
  FigmaOriginal,
  Html5Plain,
  JavascriptOriginal,
  JestPlain,
  MongodbPlain,
  MysqlOriginal,
  NodejsOriginal,
  ReactOriginal,
  TypescriptOriginal,
  NextjsPlain,
  FirebaseOriginal,
  JavaOriginal,
  PrismaOriginal,
  TailwindcssOriginal
} from 'devicons-react';
import { FC, SVGProps } from 'react';

type IconProps = {
  height?: number | string;
  width?: number | string;
  key?: string;
};

export const Icons = {
  css: Css3Plain,
  express: ExpressOriginal,
  figma: FigmaOriginal,
  html: Html5Plain,
  javascript: JavascriptOriginal,
  jest: JestPlain,
  jwt: (props: IconProps) => (
    <svg viewBox="0 0 101 101" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M57.6997 0.300049L57.7997 27.2001L50.2997 37.5L42.7997 27.2001L42.6997 0.300049H57.6997ZM42.7998 100.3V73.3L50.2998 63L57.7998 73.3V100.3H42.7998Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M26.8998 5.40002L42.7998 27.2V39.9L30.5998 36L14.7998 14.2L26.8998 5.40002ZM73.5998 95.1001L57.7998 73.3001V60.6001L69.8998 64.5001L85.6998 86.3001L73.5998 95.1001Z" fill="#00F2E6" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.9999 27.7001L30.5999 36.0001L38.0999 46.3001L25.9999 50.3001L0.399902 41.9001L4.9999 27.7001ZM69.8999 64.5L62.3999 54.2001L74.4999 50.3L100.1 58.6L95.4999 72.8L69.8999 64.5Z" fill="#00B9F1" />
      <path fillRule="evenodd" clipRule="evenodd" d="M100.1 41.9001L74.4999 50.3001L62.3999 46.3001L69.8999 36.0001L95.4999 27.7001L100.1 41.9001ZM0.399902 58.6L25.9999 50.3L38.0999 54.2001L30.5999 64.5L4.9999 72.8L0.399902 58.6Z" fill="#D63AFF" />
      <path fillRule="evenodd" clipRule="evenodd" d="M85.6998 14.2L69.8998 36L57.7998 39.9V27.2L73.5998 5.40002L85.6998 14.2ZM14.7998 86.3001L30.5998 64.5001L42.7998 60.6001V73.3001L26.8998 95.1001L14.7998 86.3001Z" fill="#FB015B" />
    </svg>
  ),
  mongodb: MongodbPlain,
  mysql: MysqlOriginal,
  nodejs: NodejsOriginal,
  react: ReactOriginal,
  typescript: TypescriptOriginal,
  nextjs: NextjsPlain,
  firebase: FirebaseOriginal,
  java: JavaOriginal,
  prisma: PrismaOriginal,
  tailwindcss: TailwindcssOriginal,
} as const;