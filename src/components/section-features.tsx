import { PropsWithChildren } from 'react';

import { MotionLi } from './framer-motion';

import { siteConfig } from '@/lib/constant';

export const SectionFeatures = ({ children }: PropsWithChildren) => {
  return <ul className="ml-6 mt-2 list-disc">{children}</ul>;
};

type TFeatureProps = PropsWithChildren<{
  title: string;
  delay: number;
}>;

export const Feature = ({ title, delay, children }: TFeatureProps) => {
  return (
    <MotionLi
      initial={{ x: -25, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: siteConfig.animationDuration,
        ease: 'easeOut',
        delay,
      }}
      className="text-justify font-mono font-medium text-neutral-800 dark:text-neutral-200"
    >
      {`${title}: `}
      <span className="font-sans font-normal leading-7 text-neutral-500 dark:text-neutral-400">
        {children}
      </span>
    </MotionLi>
  );
};
