import Image from 'next/image';

import { WobbleCard } from './ui/wobble-card';

type TImageHeaderProps = {
  src: string;
};

export const ImageHeader = ({ src }: TImageHeaderProps) => {
  return (
    <WobbleCard>
      <div
        style={{ aspectRatio: 1920 / 993 }}
        className="motion-preset-focus overflow-hidden rounded-xl shadow-sm"
      >
        <Image
          src={src}
          width="1920"
          height="993"
          alt="Project image"
          className="size-full"
          blurDataURL={src}
        />
      </div>
    </WobbleCard>
  );
};
