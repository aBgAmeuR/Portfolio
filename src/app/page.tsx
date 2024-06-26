import { Footer } from '@/components/footer';
import { Header, HeaderDescription, HeaderHeading } from '@/components/header';
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

export default function Page() {
  return (
    <>
      <Header className="container mb-8" themeToggle withLogo>
        <HeaderHeading>Antoine JOSSET</HeaderHeading>
        <HeaderDescription>
          Développeur full stack basé à Laval, France.
        </HeaderDescription>
      </Header>
      <SectionAPropos>
        <SectionAProposTitle>À propos</SectionAProposTitle>
        <SectionAProposText animDirection="left">
          Je suis passionné de développement informatique depuis plusieurs
          années. Actuellement en 2e année de BUT Informatique à Laval, je
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
            animDelay={0.1}
          >
            @aBgAmeuR
          </LinkBtn>
          <LinkBtn
            icon="mail"
            link="mailto:antoine.josset35@gmail.com"
            animDelay={0.2}
          >
            antoine.josset35@gmail.com
          </LinkBtn>
          <LinkBtn
            icon="spotify"
            label="Spotify"
            link="https://open.spotify.com/user/flps7duvtycn9yto85qwxpqtp"
            animDelay={0.3}
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
          <ProjectCard animDelay={0.1}>
            <ProjectCardImage
              src="/images/harmony-min.webp"
              width="640"
              height="360"
              alt="Project image"
            />
            <ProjectCardContent>
              <ProjectCardTextContent>
                <ProjectCardTitle>Harmony</ProjectCardTitle>
                <ProjectCardDescription>
                  Application Web qui vous donne des statistiques avancées sur
                  votre compte Spotify.
                </ProjectCardDescription>
              </ProjectCardTextContent>
              <ProjectCardFooter>
                <IconsList>
                  <IconItem icon="nextjs" />
                  <IconItem icon="typescript" />
                  <IconItem icon="rust" />
                  <IconItem icon="webassembly" />
                </IconsList>
                <ProjectCardLinks>
                  <ProjectCardLink href="/p/harmony" variant="secondary">
                    En savoir plus
                  </ProjectCardLink>
                </ProjectCardLinks>
              </ProjectCardFooter>
            </ProjectCardContent>
          </ProjectCard>
          <ProjectCard animDelay={0.2}>
            <ProjectCardImage
              src="/images/pictoseq-min.webp"
              width="1920"
              height="993"
              alt="Project image"
            />
            <ProjectCardContent>
              <ProjectCardTextContent>
                <ProjectCardTitle>PictoSeq</ProjectCardTitle>
                <ProjectCardDescription>
                  Application qui facilite la création de séquentiels de
                  pictogrammes pour les personnes en situation de handicap.
                </ProjectCardDescription>
              </ProjectCardTextContent>
              <ProjectCardFooter>
                <IconsList>
                  <IconItem icon="java" />
                </IconsList>
                <ProjectCardLinks>
                  <ProjectCardLink href="/p/pictoseq" variant="secondary">
                    En savoir plus
                  </ProjectCardLink>
                </ProjectCardLinks>
              </ProjectCardFooter>
            </ProjectCardContent>
          </ProjectCard>
          <ProjectCard animDelay={0.3}>
            <ProjectCardImage
              src="/images/booktopia-min.webp"
              width="1920"
              height="993"
              alt="Project image"
            />
            <ProjectCardContent>
              <ProjectCardTextContent>
                <ProjectCardTitle>Booktopia</ProjectCardTitle>
                <ProjectCardDescription>
                  Site e-commerce de livres, permet de rechercher, ajouter à une
                  liste de souhaits, acheter des livres et gérer le catalogue.
                </ProjectCardDescription>
              </ProjectCardTextContent>
              <ProjectCardFooter>
                <IconsList>
                  <IconItem icon="php" />
                  <IconItem icon="symfony" />
                </IconsList>
                <ProjectCardLinks>
                  <ProjectCardLink href="/p/booktopia" variant="secondary">
                    En savoir plus
                  </ProjectCardLink>
                </ProjectCardLinks>
              </ProjectCardFooter>
            </ProjectCardContent>
          </ProjectCard>
          <ProjectCard animDelay={0.4}>
            <ProjectCardImage
              src="/images/progiso-min.webp"
              width="1920"
              height="993"
              alt="Project image"
            />
            <ProjectCardContent>
              <ProjectCardTextContent>
                <ProjectCardTitle>Progiso</ProjectCardTitle>
                <ProjectCardDescription>
                  Plateforme de gestion de projet conçue pour simplifier la
                  gestion des projets des petites et moyennes équipes.
                </ProjectCardDescription>
              </ProjectCardTextContent>
              <ProjectCardFooter>
                <IconsList>
                  <IconItem icon="nextjs" />
                  <IconItem icon="typescript" />
                  <IconItem icon="shadcnUI" />
                  <IconItem icon="tailwindcss" />
                </IconsList>
                <ProjectCardLinks>
                  <ProjectCardLink href="/p/progiso" variant="secondary">
                    En savoir plus
                  </ProjectCardLink>
                </ProjectCardLinks>
              </ProjectCardFooter>
            </ProjectCardContent>
          </ProjectCard>
        </SectionProjectsContent>
      </SectionProjects>
      <Footer />
    </>
  );
}
