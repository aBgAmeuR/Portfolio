import { PropsWithChildren } from 'react';

export const SectionProjects = ({ children }: PropsWithChildren) => {
  return (
    <section className="bg-background container relative flex w-full max-w-3xl flex-col gap-4 px-16 py-6">
      {children}
      <div className="bg-border absolute inset-y-0 right-0 w-px flex-none self-stretch overflow-hidden"></div>
      <div className="bg-border absolute inset-y-0 left-0 w-px flex-none self-stretch overflow-hidden"></div>
      <div className="bg-border absolute bottom-0 left-1/2 z-20 h-px w-screen flex-none -translate-x-1/2 overflow-hidden"></div>
    </section>
  );
};

export const SectionProjectsHeader = ({ children }: PropsWithChildren) => {
  return <div className="motion-preset-slide-down">{children}</div>;
};

export const SectionProjectsTitle = ({ children }: PropsWithChildren) => {
  return (
    <h3 className="font-mono font-semibold text-neutral-800 dark:text-neutral-200">
      {children}
    </h3>
  );
};

export const SectionProjectsDescription = ({ children }: PropsWithChildren) => {
  return (
    <p className="text-base text-neutral-500 dark:text-neutral-400">
      {children}
    </p>
  );
};

export const SectionProjectsContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
  );
};
