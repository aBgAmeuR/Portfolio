import { PropsWithChildren } from 'react';

import { Icons } from '../icons';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const IconsList = ({ children }: PropsWithChildren) => {
  return (
    <TooltipProvider delayDuration={10}>
      <div className="flex gap-1">{children}</div>
    </TooltipProvider>
  );
};

export const IconItem = ({ icon }: { icon: keyof typeof Icons }) => {
  const Icon = Icons[icon];
  const tooltipContent = icon.slice(0, 1).toUpperCase() + icon.slice(1);

  return (
    <Tooltip>
      <TooltipTrigger className="flex h-5 items-center">
        <Icon className="size-4 transition-all duration-100 ease-in-out hover:size-5" />
      </TooltipTrigger>
      <TooltipContent className="bg-neutral-50  text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <p>{tooltipContent}</p>
      </TooltipContent>
    </Tooltip>
  );
};
