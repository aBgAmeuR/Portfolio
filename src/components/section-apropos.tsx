import React, { PropsWithChildren } from 'react';

import { MotionH3, MotionP } from './framer-motion';

export const SectionAPropos = ({ children }: PropsWithChildren) => {
  return (
    <section className="container flex flex-col gap-4">{children}</section>
  );
};

export const SectionAProposTitle = ({ children }: PropsWithChildren) => {
  return (
    <MotionH3
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'just',
        duration: 0.2,
        ease: 'easeOut',
      }}
      className="font-mono font-semibold text-neutral-800 dark:text-neutral-200"
    >
      {children}
    </MotionH3>
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
    <MotionP
      initial={{ opacity: 0, x: animDirection === 'left' ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: 'just',
        duration: 0.2,
        ease: 'easeOut',
      }}
      className="leading-7 text-neutral-500 dark:text-neutral-400"
    >
      {children}
    </MotionP>
  );
};

export const SectionAProposLinks = ({ children }: PropsWithChildren) => {
  return <div className="flex gap-4">{children}</div>;
};
