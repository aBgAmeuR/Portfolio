import React, { ReactElement } from 'react'
import icons from "@/assets/icons.json";
import data from "@/content/about.json";
import Link from 'next/link';

export default function Aboutme() {

  const getIconCode = (iconName: string): ReactElement => {
    const icon = icons.find((icon) => icon.name === iconName);
    return <div dangerouslySetInnerHTML={{ __html: icon ? icon.code : "" }} />
  }
  return (
    <main id='aboutme'>
      <Link href="/" className="back">
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 7.00076C0 7.25667 0.111442 7.50479 0.303672 7.69004L5.88852 13.2649C6.08837 13.4594 6.3104 13.5554 6.5487 13.5554C7.07339 13.5554 7.46157 13.1804 7.46157 12.6701C7.46157 12.4074 7.35491 12.1722 7.18738 12.0132L5.29048 10.0931L2.13518 7.21128L1.83389 7.75276L4.7634 7.92518H15.0658C15.622 7.92518 16 7.54628 16 7.00076C16 6.45523 15.622 6.07637 15.0658 6.07637H4.7634L1.83389 6.24878L2.13518 6.79871L5.29048 3.90847L7.18738 1.98684C7.35491 1.81934 7.46157 1.59256 7.46157 1.32988C7.46157 0.81958 7.07339 0.444607 6.5487 0.444607C6.3104 0.444607 6.08837 0.533692 5.87463 0.748955L0.303672 6.31144C0.111442 6.49673 0 6.74485 0 7.00076Z" fill="white" />
        </svg>
        <span>{data.retour}</span>
      </Link>
      <div className='content'>
        <h1>{data.titre}</h1>
        <h2>{data.presentation.titre}</h2>
        <p>{data.presentation.text}</p>
        <h2>{data.formation.titre}</h2>
        <p>{data.formation.text}</p>
        <h2>{data.competences.titre}</h2>
        <ul>
          <li>• {getIconCode("react")}<p>{data.competences.text[0]}</p></li>
          <li>• {getIconCode("nextjs")}<p>{data.competences.text[1]}</p></li>
          <li>• {getIconCode("nodejs")}<p>{data.competences.text[2]}</p></li>
          <li>• {getIconCode("typescript")}<p>{data.competences.text[3]}</p></li>
          <li>• {getIconCode("java")}<p>{data.competences.text[4]}</p></li>
        </ul>
        <h2>{data.caracterise.titre}</h2>
        <p>{data.caracterise.text}</p>
        <h2>{data.loisirs.titre}</h2>
        <p>{data.loisirs.text}</p>
        <h2>{data.contact.titre}</h2>
        <p dangerouslySetInnerHTML={{ __html: data.contact.text }} />
      </div>
    </main>
  )
}
