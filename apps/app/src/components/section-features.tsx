import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

export const SectionFeatures = ({ children }: PropsWithChildren) => {
  return <ul className="ml-6 mt-2 list-disc">{children}</ul>;
};

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

type TFeatureProps = PropsWithChildren<{
  title: string;
  delay: keyof typeof MOTION_DELAY;
}>;

export const Feature = ({ title, delay = 1, children }: TFeatureProps) => {
  return (
    <li
      className={cn(
        'motion-preset-slide-left font-mono font-medium text-neutral-800 dark:text-neutral-200',
        MOTION_DELAY[delay]
      )}
    >
      {`${title}: `}
      <span className="font-sans font-normal leading-7 text-neutral-500 dark:text-neutral-400">
        {children}
      </span>
    </li>
  );
};
