import { notFound } from 'next/navigation';

import { BackBtn } from '@/components/back-btn';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ImageHeader } from '@/components/image-header';
import { LinkBtn } from '@/components/link-btn';
import {
  ProjectSubTitle,
  ProjectText,
  ProjectTitle,
} from '@/components/project-page';
import { Feature, SectionFeatures } from '@/components/section-features';
import { IconItem, IconsList } from '@/components/ui/icons-list';
import { projectsPagesContent } from '@/content/project-page';

type TPageProps = {
  params: {
    name?: string;
  };
};

export default function Page({ params }: TPageProps) {
  const project = projectsPagesContent.find(
    (p) => p.title.toLocaleLowerCase() == params.name?.toLocaleLowerCase()
  );

  if (!project) notFound();

  return (
    <main className="container z-50">
      <Header className="mb-4" themeToggle>
        <BackBtn>Retour à la page principale</BackBtn>
      </Header>
      <ImageHeader src={project.image} />
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectText>{project.description}</ProjectText>
      <div className="mt-4 flex flex-wrap gap-4">
        {project.links.map((link, i) => (
          <LinkBtn
            key={i}
            icon={link.icon}
            label={link.label}
            link={link.link}
            animDelay={0.1 * (i + 1)}
          >
            {' '}
            {link.text}
          </LinkBtn>
        ))}
      </div>
      <ProjectSubTitle>Fonctionnalités</ProjectSubTitle>
      <SectionFeatures>
        {project.features.map((feature, i) => (
          <Feature key={i} title={feature.title} delay={0.1 * (i + 1)}>
            {feature.desc}
          </Feature>
        ))}
      </SectionFeatures>
      <ProjectSubTitle>Technologies utilisées</ProjectSubTitle>
      <IconsList className="mt-2" anim>
        {project.technologies.map((icon, i) => (
          <IconItem key={i} bigIcon icon={icon} />
        ))}
      </IconsList>
      <Footer />
    </main>
  );
}
