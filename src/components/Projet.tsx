import Link from "next/link";
import icons from "../assets/icons.json";
import Image from "next/image";
import { Data } from "@/types/data"

type Props = {
  data: Data
}

function ProjetComponent({ data }: Props) {
  function image() {
    return (
      <div>
        <Image
          alt={`${data.title} image`}
          src={`/img/${data.image}-min.webp`}
          style={{ userSelect: "none" }}
          width={500}
          height={500}
          priority={true}
        />
      </div>
    );
  }

  function getIconCode(iconName: string) {
    const icon = icons.find((icon) => icon.name === iconName);

    return icon ? icon.code : "";
  }

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
          {data.technologies.map((tech, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: getIconCode(tech) }}
            />
          ))}
        </ul>
      </div>
      <div className="right">{image()}</div>
    </Link>
  );
}

export default ProjetComponent;
