import Image from 'next/image';
import Link from 'next/link';

interface Props {
  name: string;
  description: string;
  href: string;
  imageAlt: string;
  imageSrc: string | null;
}

export default function ListItem({
  name,
  description,
  href,
  imageAlt,
  imageSrc,
}: Props) {
  const renderImageArea =
    imageSrc !== null ? (
      <div className="w-48 h-48">
        <Image
          alt={imageAlt}
          src={imageSrc}
          className="w-full h-full object-cover"
          loading="lazy"
          width={192}
          height={192}
        />
      </div>
    ) : null;

  return (
    <li>
      <Link
        aria-label="list-item-link"
        href={href}
        className="flex flex-col w-48 h-72 justify-center rounded-xl overflow-hidden bg-black hover:bg-red-700 transition"
      >
        {renderImageArea}
        <div className="flex flex-col justify-center items-center w-full h-36">
          <span className="text-white text-center">{name}</span>
          <span className="text-white text-center">{description}</span>
        </div>
      </Link>
    </li>
  );
}
