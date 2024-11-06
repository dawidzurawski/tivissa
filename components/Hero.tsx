import Image, { StaticImageData } from "next/image";
import Button from "./Button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageSrc, imageAlt }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto p-6 md:p-12">
      <div className="md:w-1/2">
        {title && (
          <h1 className="text-3xl md:text-5xl text-zinc-800 tracking-tighter font-bold mb-2">
            {title}
          </h1>
        )}
        {subtitle && <p className="text-zinc-500 mb-6">{subtitle}</p>}
        <Button>Book now</Button>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 md:pl-6">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={400}
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
