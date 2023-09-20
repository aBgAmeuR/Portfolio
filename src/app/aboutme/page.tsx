import React, { ReactElement } from 'react'
import icons from "@/assets/icons.json";

export default function Aboutme() {

  const getIconCode = (iconName: string): ReactElement => {
    const icon = icons.find((icon) => icon.name === iconName);
    return <div dangerouslySetInnerHTML={{ __html: icon ? icon.code : "" }} />
  }
  return (
    <main id='aboutme'>
      <a href="/" className="back">
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 7.00076C0 7.25667 0.111442 7.50479 0.303672 7.69004L5.88852 13.2649C6.08837 13.4594 6.3104 13.5554 6.5487 13.5554C7.07339 13.5554 7.46157 13.1804 7.46157 12.6701C7.46157 12.4074 7.35491 12.1722 7.18738 12.0132L5.29048 10.0931L2.13518 7.21128L1.83389 7.75276L4.7634 7.92518H15.0658C15.622 7.92518 16 7.54628 16 7.00076C16 6.45523 15.622 6.07637 15.0658 6.07637H4.7634L1.83389 6.24878L2.13518 6.79871L5.29048 3.90847L7.18738 1.98684C7.35491 1.81934 7.46157 1.59256 7.46157 1.32988C7.46157 0.81958 7.07339 0.444607 6.5487 0.444607C6.3104 0.444607 6.08837 0.533692 5.87463 0.748955L0.303672 6.31144C0.111442 6.49673 0 6.74485 0 7.00076Z" fill="white" />
        </svg>
        <span>Retour</span>
      </a>
      <div className='content'>
        <h1>En savoir plus sur moi</h1>
        <h2>Bonjour, je suis Antoine Josset 👋</h2>
        <p>Étudiant en 2e année de BUT Informatique à l'IUT de Laval, je suis passionné par le développement web et les technologies JavaScript.</p>
        <h2>Formation 🎓</h2>
        <p>Actuellement étudiant à l'IUT de Laval, je consolide mes compétences en développement logiciel notamment sur les technologies web modernes.</p>
        <h2>Compétences 💻</h2>
        <ul>
          <li>• {getIconCode("react")}<p>ReactJs: Création d'interfaces utilisateur</p></li>
          <li>• {getIconCode("nodejs")}<p>NodeJs: Développement de serveurs</p></li>
          <li>• {getIconCode("typescript")}<p>TypeScript: Typage statique pour un code plus propre</p></li>
          <li>• {getIconCode("java")}<p>Java: Développement d'applications backend et gestion de bases de données</p></li>
        </ul>
        <h2>Ce qui me caractérise 🌱</h2>
        <p>Je valorise le minimalisme, la simplicité et l'ordre dans tous mes projets. Cette philosophie guide mon approche pour créer des solutions à la fois élégantes et efficaces.</p>
        <h2>Loisirs 🌲</h2>
        <p>Je pratique la randonnée pédestre. C'est une façon pour moi de me ressourcer de découvrir de nouveaux horizons.</p>
        <h2>Contact 📬</h2>
        <p>Pour en savoir plus ou pour collaborer, <a href='mailto:antoine.josset35@gmail.com' target="_blank">contactez-moi.</a></p>
      </div>
    </main>
  )
}
