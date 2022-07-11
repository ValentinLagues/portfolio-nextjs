import Image from "next/image";

const AboutImage = (): JSX.Element => {
  return (
    <div className="relative pb-4">
      <Image
        height={250}
        width={500}
        src="https://res.cloudinary.com/dnw0kiu56/image/upload/v1657181453/portfolio/SW_lfeepg.gif"
        alt="about-image"
        priority={true}
      />
    </div>
  );
};

export default AboutImage;
