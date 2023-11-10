import Image from "next/image";

const SkillsImage = (): JSX.Element => {
  return (
    <div>
      <div className="block pb-4 lg:hidden">
        <Image
          height={200}
          width={400}
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/star-wars-static.jpg?alt=media&token=c90385cb-5ed8-486a-b84b-01012a60a629"
          alt="about-image"
          priority={true}
        />
      </div>
      <div className="hidden lg:flex lg:justify-center lg:pb-4">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/star-wars-crop.webm?alt=media&token=c7f1b7ea-b696-465e-b650-27800dc4fb87"
          autoPlay
          muted
          loop
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default SkillsImage;
