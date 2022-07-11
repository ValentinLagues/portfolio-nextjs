import Image from "next/image";

const AboutImage = (): JSX.Element => {
  return (
    <div>
      <div className="relative block pb-4 md:hidden">
        <Image
          className="block md:hidden"
          height={250}
          width={500}
          src="https://res.cloudinary.com/dnw0kiu56/image/upload/v1657500314/portfolio/SW-static_zgzb4k.jpg"
          alt="about-image"
          priority={true}
        />
      </div>
      <div className="hidden md:block">
        <video
          src="https://res.cloudinary.com/dnw0kiu56/video/upload/v1657531640/portfolio/SW_bu7ihx.webm"
          autoPlay
          muted
          loop
          width={500}
          height={250}
        />
      </div>
    </div>
  );
};

export default AboutImage;
