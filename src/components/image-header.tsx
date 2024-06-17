import Image from 'next/image';

import { MotionDiv } from './framer-motion';
import { WobbleCard } from './ui/wobble-card';

import { siteConfig } from '@/lib/constant';

type TImageHeaderProps = {
  src: string;
};

export const ImageHeader = ({ src }: TImageHeaderProps) => {
  return (
    <WobbleCard>
      <MotionDiv
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: siteConfig.animationDuration, ease: 'easeOut' }}
        style={{ aspectRatio: 1920 / 993 }}
        className="overflow-hidden rounded-xl shadow-sm"
      >
        <Image
          src={src}
          width="1920"
          height="993"
          alt="Project image"
          className="size-full"
          blurDataURL={src}
        />
      </MotionDiv>
    </WobbleCard>
  );
};
