import Image from "next/image";

const AboutImage = (): JSX.Element => {
  return (
    <div className="flex pb-4 lg:pb-0 lg:justify-end">
      <Image
        height={400}
        width={400}
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/profile-pink.png?alt=media&token=a29feb32-15d3-4af7-a81e-7d82f0548bd0"
        alt="about-image"
        priority={true}
      />
    </div>
  );
};

export default AboutImage;
