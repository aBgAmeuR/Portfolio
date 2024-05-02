import Link from "next/link";
import { Icons } from "@/components/Icons";
import Image from "next/image";
import { Data } from "@/types/data"

type Props = {
  data: Data
}

function ProjetComponent({ data }: Props) {
  const Iconstechnologies = data.technologies.map((technology) => {
    const Icon = Icons[technology];
    return <Icon key={technology} height={16} width={16} />;
  });

  return (
    <Link
      className="Projet"
      style={{ background: data.color, cursor: "pointer", textDecoration: 'none' }}
      href={`/projet/${data.route}`}
    >
      <div className="left-top">
        <h4>{data.type}</h4>
        <h2>{data.title}</h2>
      </div>
      <div className="left-buttom">
        <h4>Technologies</h4>
        <ul>
          {Iconstechnologies}
        </ul>
      </div>
      <div className="right">
        <Image
          alt={`${data.title} image`}
          src={`/img/${data.image}-min.webp`}
          style={{ userSelect: "none" }}
          width={500}
          height={500}
          priority={true}
        />
      </div>
    </Link>
  );
}

export default ProjetComponent;
