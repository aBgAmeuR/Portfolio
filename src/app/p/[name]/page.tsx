import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Footer } from '@/components/footer';
import { LinkBtn } from '@/components/link-btn';
import { Button } from '@/components/ui/button';
import { IconItem, IconsList } from '@/components/ui/icons-list';
import { WobbleCard } from '@/components/ui/wobble-card';

export default function Page() {
  return (
    <main className="container z-50">
      <Button variant="link" className="mb-4 pl-0" asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 size-4" /> Retour à la page principale
        </Link>
      </Button>
      <WobbleCard>
        <div
          style={{ aspectRatio: 1920 / 993 }}
          className="overflow-hidden rounded-xl shadow-sm"
        >
          <Image
            src="/images/harmony.webp"
            width="1920"
            height="993"
            alt="Project image"
            className="size-full"
          />
        </div>
      </WobbleCard>
      <h1 className="mt-8 flex font-mono text-2xl font-semibold leading-6 tracking-tight text-neutral-900 dark:text-neutral-100">
        Harmony
      </h1>
      <p className="mt-4 text-justify leading-7 text-neutral-500 dark:text-neutral-400">
        Harmony est une application web qui fournit des statistiques avancées
        sur un compte Spotify. L&apos;application analyse le &quot;Spotify Data
        Package&quot;, que l&apos;utilisateur peut demander dans les paramètres
        de son compte Spotify. Harmony génère des statistiques à partir du
        package de données Spotify directement sur l&apos;appareil de
        l&apos;utilisateur, garantissant que rien n&apos;est envoyé à aucun
        serveur externe.
      </p>
      <div className="mt-4 flex flex-wrap gap-4">
        <LinkBtn
          icon="github"
          label="GitHub"
          link="https://github.com/aBgAmeuR/Harmony"
          animDelay={0.1}
        >
          Voir le code
        </LinkBtn>
        <LinkBtn
          icon="harmony"
          label="Harmony"
          link="https://harmony2.vercel.app/"
          animDelay={0.1}
        >
          Tester
        </LinkBtn>
      </div>
      <h2 className=" mt-6 font-mono font-semibold text-neutral-800 dark:text-neutral-200">
        Fonctionnalités
      </h2>
      <ul className="ml-6 mt-2 list-disc">
        <li className="text-justify font-mono font-medium text-neutral-800 dark:text-neutral-200">
          Top Artistes, Titres & Albums:{' '}
          <span className="font-sans font-normal leading-7 text-neutral-500 dark:text-neutral-400">
            Fournit des statistiques détaillées sur les artistes, titres et
            albums les plus écoutés.
          </span>
        </li>
        <li className="text-justify font-mono font-medium text-neutral-800 dark:text-neutral-200">
          Analyse Temporelle:{' '}
          <span className="font-sans font-normal leading-7 text-neutral-500 dark:text-neutral-400">
            Permet de voir comment les goûts musicaux évoluent au fil du temps.
          </span>
        </li>
        <li className="text-justify font-mono font-medium text-neutral-800 dark:text-neutral-200">
          Insights:{' '}
          <span className="font-sans font-normal leading-7 text-neutral-500 dark:text-neutral-400">
            Offre des aperçus sur les habitudes d&apos;écoute.
          </span>
        </li>
        <li className="text-justify font-mono font-medium text-neutral-800 dark:text-neutral-200">
          Statistiques:{' '}
          <span className="font-sans font-normal leading-7 text-neutral-500 dark:text-neutral-400">
            Donne des statistiques détaillées sur les habitudes d&apos;écoute.
          </span>
        </li>
      </ul>
      <h2 className="mt-6 font-mono font-semibold text-neutral-800 dark:text-neutral-200">
        Technologies utilisées
      </h2>
      <IconsList className="mt-2">
        <IconItem bigIcon icon="nextjs" />
        <IconItem bigIcon icon="typescript" />
        <IconItem bigIcon icon="rust" />
        <IconItem bigIcon icon="webassembly" />
      </IconsList>

      <Footer />
    </main>
  );
}
