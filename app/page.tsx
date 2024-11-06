import Hero from "@/components/Hero";
import TivissaImage from "../assets/tivissa.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        title="Book your visit to Tivissa today"
        subtitle="Relax and Recharge in a Cozy, Centrally-Located Spanish Hideaway."
        ctaText="Book now"
        imageAlt="Tivissa"
        imageSrc={TivissaImage}
      />
    </div>
  );
}
