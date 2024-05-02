import { Icons } from '@/components/Icons';


export type Data = {
  title: string;
  route: string;
  show: boolean;
  type: string;
  year: number;
  image: string;
  color: string;
  technologies: (keyof typeof Icons)[];
  testUrl?: string;
  desc: string;
  github: string;
  objectif: string;
  deroulement: string;
};
