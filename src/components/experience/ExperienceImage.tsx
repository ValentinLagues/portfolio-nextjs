import Image from "next/image";

const ExperienceImage = (): JSX.Element => {
  return (
    <div>
      <div className="block pb-4 lg:hidden">
        <Image
          height={200}
          width={400}
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/hacker-static.jpg?alt=media&token=367f7514-1f5f-4547-acd5-18493e000fbf"
          alt="about-image"
          priority={true}
        />
      </div>
      <div className="hidden lg:flex lg:justify-start">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/hacker-crop.webm?alt=media&token=1cd43e41-cc30-4219-8d43-816a22a721bb"
          autoPlay
          muted
          loop
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default ExperienceImage;
