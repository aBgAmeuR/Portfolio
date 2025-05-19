import { PropsWithChildren } from 'react';

import { Icons } from './icons';
import { ThemeToggle } from './theme-toggle';

import { cn } from '@/lib/utils';

type THeaderProps = PropsWithChildren<{
  themeToggle?: boolean;
  withLogo?: boolean;
  className?: string;
}>;

export const Header = ({
  themeToggle,
  withLogo,
  className,
  children,
}: THeaderProps) => {
  return (
    <header
      className={cn(
        'motion-preset-slide-down flex items-center justify-between',
        className
      )}
    >
      {/* <Icons.logo className="size-16 overflow-visible rounded-full border p-2 text-neutral-500 dark:text-neutral-400" /> */}
      <div className="flex items-center gap-4">
        {withLogo ? (
          <Icons.logo className="h-auto w-16 overflow-visible text-neutral-700 dark:text-neutral-300" />
        ) : null}
        <div className="flex flex-col">{children}</div>
      </div>
      {themeToggle ? <ThemeToggle /> : null}
    </header>
  );
};

export const HeaderHeading = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        'flex font-mono text-2xl font-semibold leading-6 tracking-tight text-neutral-900 dark:text-neutral-100',
        className
      )}
      {...props}
    />
  );
};

export const HeaderDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <p
      className={cn(
        'text-sm font-medium text-neutral-500 dark:text-neutral-400',
        className
      )}
      {...props}
    />
  );
};
