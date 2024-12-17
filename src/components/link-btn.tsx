import { PropsWithChildren } from 'react';
import { ExternalLink } from 'lucide-react';

import { Icons } from './icons';

import { cn } from '@/lib/utils';

const MOTION_DELAY = {
  1: 'motion-delay-[100ms]',
  2: 'motion-delay-[200ms]',
  3: 'motion-delay-[300ms]',
  4: 'motion-delay-[400ms]',
  5: 'motion-delay-[500ms]',
  6: 'motion-delay-[600ms]',
  7: 'motion-delay-[700ms]',
  8: 'motion-delay-[800ms]',
  9: 'motion-delay-[900ms]',
} as const;

type TLinkBtnProps = PropsWithChildren<{
  icon: keyof typeof Icons;
  label?: string;
  link: string;
  animDelay?: keyof typeof MOTION_DELAY;
}>;

export const LinkBtn = ({
  icon,
  label,
  link,
  animDelay = 1,
  children,
}: TLinkBtnProps) => {
  const Icon = Icons[icon];

  return (
    <a
      className={cn(
        'flex items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-1 text-sm font-medium shadow-sm outline-none transition-colors duration-100 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-900 dark:hover:text-neutral-100',
        `motion-preset-bounce`,
        MOTION_DELAY[animDelay]
      )}
      href={link}
      target="_blank"
      title={label}
    >
      <Icon className="size-4" />
      <span className="text-neutral-950 dark:text-neutral-50">{children}</span>
      {label && (
        <span className="text-xs font-normal text-neutral-500 dark:text-neutral-400 ">
          {label}
        </span>
      )}
      <ExternalLink className="size-3 text-neutral-400 dark:text-neutral-500" />
    </a>
  );
};
