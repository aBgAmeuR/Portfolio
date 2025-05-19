import { PropsWithChildren } from 'react';

import { MotionSpan } from './framer-motion';

import { siteConfig } from '@/lib/constant';

export const ProjectTitle = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="motion-preset-slide-left mt-8 flex font-mono text-2xl font-semibold leading-6 tracking-tight text-neutral-900 dark:text-neutral-100">
      {children}
    </h1>
  );
};

export const ProjectSubTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className=" motion-preset-slide-right mt-6 font-mono font-semibold text-neutral-800 dark:text-neutral-200">
      {children}
    </h2>
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
