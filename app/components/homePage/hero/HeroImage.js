import HeroBackgroundImage from "./HeroBackgroundImage";

export default function HeroImage({ data }) {
  return (
    <div className="h-full overflow-hidden">
      <HeroBackgroundImage src={data.image.asset} alt={data.imageAlt} />
    </div>
  );
}
