import HeroBackgroundImage from "./HeroBackgroundImage";

export default function HeroImage({ data }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <HeroBackgroundImage src={data.image.asset} alt={data.imageAlt} />
    </div>
  );
}
