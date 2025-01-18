import { ExternalLink } from 'lucide-react';

import { Footer } from '@/components/footer';
import { Header, HeaderDescription, HeaderHeading } from '@/components/header';
import { Icons } from '@/components/icons';
import { LinkBtn } from '@/components/link-btn';
import {
  ProjectCard,
  ProjectCardContent,
  ProjectCardDescription,
  ProjectCardFooter,
  ProjectCardImage,
  ProjectCardLink,
  ProjectCardLinks,
  ProjectCardTextContent,
  ProjectCardTitle,
  ProjectCardVideo,
} from '@/components/project-card';
import {
  SectionAPropos,
  SectionAProposLinks,
  SectionAProposText,
  SectionAProposTitle,
} from '@/components/section-apropos';
import {
  SectionProjects,
  SectionProjectsContent,
  SectionProjectsDescription,
  SectionProjectsHeader,
  SectionProjectsTitle,
} from '@/components/section-projects';
import { IconItem, IconsList } from '@/components/ui/icons-list';
import { StackBadge as SB } from '@/components/ui/stack-badge';

const PROJECTS = [
  {
    title: 'Harmony',
    description:
      'Application Web qui vous donne des statistiques avancées sur votre compte Spotify. Données à partir du package Spotify.',
    image: '/images/harmony-min.webp',
    video: '/videos/harmony.webm',
    icons: ['nextjs', 'typescript', 'shadcnUI', 'tailwindcss', 'spotify'],
    code: 'https://github.com/aBgAmeuR/Harmony',
    test: 'https://harmony.antoinejosset.fr',
    link: '/p/harmony',
  },
  {
    title: 'PictoSeq',
    description:
      'Application qui facilite la création de séquentiels de pictogrammes pour les personnes en situation de handicap.',
    image: '/images/pictoseq-min.webp',
    icons: ['java'],
    code: 'https://github.com/Matbobe/PictoSeq',
    link: '/p/pictoseq',
  },
  {
    title: 'Booktopia',
    description:
      'Site e-commerce de livres, permet de rechercher, ajouter à une liste de souhaits, acheter des livres et gérer le catalogue.',
    image: '/images/booktopia-min.webp',
    icons: ['php', 'symfony'],
    code: 'https://github.com/aBgAmeuR/Booktopia',
    link: '/p/booktopia',
  },
  {
    title: 'Progiso',
    description:
      'Plateforme de gestion de projet conçue pour simplifier la gestion des projets des petites et moyennes équipes.',
    image: '/images/progiso-min.webp',
    icons: ['nextjs', 'typescript', 'shadcnUI', 'tailwindcss'],
    code: 'https://github.com/aBgAmeuR/Progiso',
    test: 'https://progiso.vercel.app',
    link: '/p/progiso',
  },
] as const;

export default function Page() {
  return (
    <>
      <Header className="container mb-8" themeToggle withLogo>
        <HeaderHeading>Antoine JOSSET</HeaderHeading>
        <HeaderDescription>
          Développeur full stack basé à Rennes, France.
        </HeaderDescription>
      </Header>
      <SectionAPropos>
        <SectionAProposTitle>À propos</SectionAProposTitle>
        <SectionAProposText animDirection="left">
          Je suis passionné de développement informatique depuis plusieurs
          années. Actuellement en 3e année de BUT Informatique à Laval, je
          m&apos;immerge pleinement dans chaque projet, en me concentrant sur un
          code propre et des solutions efficaces.
        </SectionAProposText>
        <SectionAProposText animDirection="right">
          Je développe mes compétences en développement logiciel grâce aux
          technologies <SB icon="typescript">TypeScript</SB> telles que{' '}
          <SB icon="nextjs">Next.js</SB> et <SB icon="nodejs">Node.js</SB>,
          ainsi qu&apos;aux outils de front-end comme{' '}
          <SB icon="tailwindcss">Tailwind</SB>. Pour le back-end, je me
          spécialise en <SB icon="java">Java</SB>, <SB icon="rust">Rust</SB> et{' '}
          <SB icon="symfony">Symfony</SB>. J&apos;utilise également{' '}
          <SB icon="git">Git</SB> et <SB icon="sql">Sql</SB> pour la gestion de
          versions et des bases de données.
        </SectionAProposText>
        <SectionAProposLinks>
          <LinkBtn
            icon="github"
            label="GitHub"
            link="https://github.com/aBgAmeuR"
            animDelay={1}
          >
            @aBgAmeuR
          </LinkBtn>
          <LinkBtn
            icon="mail"
            link="mailto:antoine.josset35@gmail.com"
            animDelay={2}
          >
            antoine.josset35@gmail.com
          </LinkBtn>
          <LinkBtn
            icon="spotify"
            label="Spotify"
            link="https://open.spotify.com/user/flps7duvtycn9yto85qwxpqtp"
            animDelay={3}
          >
            Antoine
          </LinkBtn>
        </SectionAProposLinks>
      </SectionAPropos>
      <SectionProjects>
        <SectionProjectsHeader>
          <SectionProjectsTitle>Projets</SectionProjectsTitle>
          <SectionProjectsDescription>
            Voici une sélection de mes projets.
          </SectionProjectsDescription>
        </SectionProjectsHeader>
        <SectionProjectsContent>
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              animDelay={((index % 4) + 1) as 1 | 2 | 3 | 4}
            >
              {'video' in project ? (
                <ProjectCardVideo
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  width="1920"
                  height="993"
                />
              ) : (
                <ProjectCardImage
                  src={project.image}
                  width="1920"
                  height="993"
                  alt="Project image"
                />
              )}
              <ProjectCardContent>
                <ProjectCardTextContent>
                  <ProjectCardTitle>{project.title}</ProjectCardTitle>
                  <ProjectCardDescription>
                    {project.description}
                  </ProjectCardDescription>
                </ProjectCardTextContent>
                <ProjectCardFooter>
                  <IconsList>
                    {project.icons.map((icon, index) => (
                      <IconItem key={index} icon={icon} />
                    ))}
                  </IconsList>
                  <ProjectCardLinks>
                    {'test' in project && (
                      <ProjectCardLink
                        href={project.test}
                        variant="primary"
                        target="_blank"
                      >
                        Tester
                        <ExternalLink className="size-3" />
                      </ProjectCardLink>
                    )}
                    <ProjectCardLink
                      href={project.code}
                      variant="secondary"
                      target="_blank"
                    >
                      Code
                      <Icons.github className="ml-1 size-4" />
                    </ProjectCardLink>
                  </ProjectCardLinks>
                </ProjectCardFooter>
              </ProjectCardContent>
            </ProjectCard>
          ))}
        </SectionProjectsContent>
      </SectionProjects>
      <Footer />
    </>
  );
}
