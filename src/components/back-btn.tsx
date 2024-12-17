'use client';

import { PropsWithChildren } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from './ui/button';

export const BackBtn = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  return (
    <Button onClick={router.back} variant="link" className="pl-0">
      <ArrowLeft className="mr-2 size-4" /> {children}
    </Button>
  );
};
