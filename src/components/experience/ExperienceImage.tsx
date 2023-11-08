import Image from "next/image";

const ExperienceImage = (): JSX.Element => {
  return (
    <div>
      <div className="relative block pb-4 md:hidden">
        <Image
          height={250}
          width={500}
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/hacker-static.jpg?alt=media&token=367f7514-1f5f-4547-acd5-18493e000fbf"
          alt="about-image"
          priority={true}
        />
      </div>
      <div className="hidden md:block">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/hacker.webm?alt=media&token=4364040e-bdda-4c77-9598-99929b469e2a"
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

export default ExperienceImage;
