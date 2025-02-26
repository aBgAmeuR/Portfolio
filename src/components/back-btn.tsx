'use client';

import { PropsWithChildren } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from './ui/button';

export const BackBtn = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  return (
    <Button onClick={router.back} variant="link" className="justify-start pl-0">
      <ArrowLeft className="size-4" /> {children}
    </Button>
  );
};
