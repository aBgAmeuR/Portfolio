'use client';

import { PropsWithChildren } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { MotionDiv } from './framer-motion';
import { Button } from './ui/button';

export const BackBtn = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <MotionDiv
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Button onClick={handleClick} variant="link" className="pl-0" asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 size-4" /> {children}
        </Link>
      </Button>
    </MotionDiv>
  );
};
