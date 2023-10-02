import data from '@/content/projects.json';
import { Data } from '@/types/data';

export const getData = (name: string): Data => {
  const result = data.find((item: Data) => item.route === name);
  return result as Data || null;
}
