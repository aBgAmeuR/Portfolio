import '@/styles/index.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Antoine JOSSET',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
