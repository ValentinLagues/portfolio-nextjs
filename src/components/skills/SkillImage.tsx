import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface IPlayer {
  id: number;
  pic: string | StaticImageData;
  alt: string;
}

interface IProps {
  pic: IPlayer;
  modalIsOpen: number;
  setModalIsOpen: React.Dispatch<React.SetStateAction<number>>;
}

export default function SkillImage({
  pic,
  modalIsOpen,
  setModalIsOpen,
}: IProps) {
  const [picSelected, setPicSelected] = useState("");

  useEffect(() => {
    if (modalIsOpen === pic.id) {
      setPicSelected("border-x-2 border-y-4 border-yellow-600");
    } else {
      setPicSelected("border-x-2 border-y-4 border-white");
    }
  }, [modalIsOpen, pic.id]);

  const handleClick = () => {
    if (modalIsOpen !== pic.id) {
      setModalIsOpen(pic.id);
    } else {
      setModalIsOpen(0);
    }
  };

  return (
    <div className={`${picSelected} relative cursor-pointer h-48 w-48`}>
      <Image
        objectFit="cover"
        layout="fill"
        src={pic.pic}
        onClick={() => handleClick()}
        priority={true}
        alt={pic.alt}
      />
    </div>
  );
}
