import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { siteConfig } from '@/lib/constant';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: '/opengraph-image.png',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: '/opengraph-image.png',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId,
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          'relative min-h-screen bg-neutral-50 font-sans antialiased dark:bg-neutral-950',
          fonts
        )}
      >
        <ThemeProvider attribute="class">
          <TooltipProvider delayDuration={10}>
            <NuqsAdapter>
              <main className="relative z-10 py-8 font-sans sm:pt-16 md:pt-32">
                {children}
                {/* <div className="fixed left-0 top-0 -z-10 size-full">
                <div className="relative size-full">
                  <div className="absolute size-full bg-[radial-gradient(#e5e7eb_0.5px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] dark:bg-[radial-gradient(#ffffff33_0.5px,transparent_1px)] dark:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#fff_20%,transparent_100%)]"></div>
                </div>
              </div> */}
              </main>
            </NuqsAdapter>
            {/* <div className="absolute inset-0 flex-none opacity-10">
              <div
                className="absolute inset-0 bg-left-top bg-repeat"
                style={{
                  backgroundSize: '22.05px auto',
                  backgroundImage:
                    'url(https://framerusercontent.com/images/zkZcqLYKrbf3IcoLGmkQF4odXvY.svg)',
                }}
              ></div>
            </div> */}
            <SpeedInsights />
            <Analytics />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
