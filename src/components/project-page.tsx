import { PropsWithChildren } from 'react';

import { MotionH1, MotionH2, MotionSpan } from './framer-motion';

import { siteConfig } from '@/lib/constant';

export const ProjectTitle = ({ children }: PropsWithChildren) => {
  return (
    <MotionH1
      initial={{ x: 25, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: siteConfig.animationDuration, ease: 'easeOut' }}
      className="mt-8 flex font-mono text-2xl font-semibold leading-6 tracking-tight text-neutral-900 dark:text-neutral-100"
    >
      {children}
    </MotionH1>
  );
};

export const ProjectSubTitle = ({ children }: PropsWithChildren) => {
  return (
    <MotionH2
      initial={{ x: -25, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: siteConfig.animationDuration, ease: 'easeOut' }}
      className=" mt-6 font-mono font-semibold text-neutral-800 dark:text-neutral-200"
    >
      {children}
    </MotionH2>
  );
};

export const ProjectText = ({ children }: PropsWithChildren) => {
  const text = children?.toString().split(' ') || [];

  return (
    <p className="mt-4 leading-7 text-neutral-500 dark:text-neutral-400">
      {text.map((el, i) => (
        <MotionSpan
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: siteConfig.animationDuration,
            delay: i / 100,
          }}
          key={i}
        >
          {el}{' '}
        </MotionSpan>
      ))}
    </p>
  );
};
