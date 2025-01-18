import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

export const SectionAPropos = ({ children }: PropsWithChildren) => {
  return (
    <section className="container relative flex w-full max-w-3xl flex-col p-0">
      {children}
      <div className="bg-border absolute inset-y-0 right-0 w-px flex-none self-stretch overflow-hidden"></div>
      <div className="bg-border absolute inset-y-0 left-0 w-px flex-none self-stretch overflow-hidden"></div>
    </section>
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
  return (
    <div className="relative flex flex-wrap justify-between gap-4 px-16 py-8">
      {children}
      <div className="bg-border absolute left-1/2 top-0 z-20 h-px w-screen flex-none -translate-x-1/2 overflow-hidden"></div>
      <div className="bg-border absolute bottom-0 left-1/2 z-20 h-px w-screen flex-none -translate-x-1/2 overflow-hidden"></div>
    </div>
  );
};
