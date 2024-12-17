import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

export const SectionAPropos = ({ children }: PropsWithChildren) => {
  return (
    <section className="container flex flex-col gap-4">{children}</section>
  );
};

export const SectionAProposTitle = ({ children }: PropsWithChildren) => {
  return (
    <h3 className="motion-preset-slide-left-sm motion-delay-[100ms] font-mono font-semibold text-neutral-800 dark:text-neutral-200">
      {children}
    </h3>
  );
};

type TSectionAProposTextProps = PropsWithChildren<{
  animDirection?: 'left' | 'right';
}>;

export const SectionAProposText = ({
  animDirection,
  children,
}: TSectionAProposTextProps) => {
  return (
    <p
      className={cn(
        'leading-7 text-neutral-500 dark:text-neutral-400',
        animDirection === 'left'
          ? 'motion-preset-slide-left-sm'
          : 'motion-preset-slide-right-sm'
      )}
    >
      {children}
    </p>
  );
};

export const SectionAProposLinks = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-wrap gap-4">{children}</div>;
};
