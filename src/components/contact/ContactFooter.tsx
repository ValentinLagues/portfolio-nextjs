import Image from "next/image";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    id: 1,
    label: "Github",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/github.png?alt=media&token=9be2e0b9-808a-49f1-81c8-147d1ac65a7e",
    url: "https://github.com/ValentinLagues",
    alt: "github-logo",
  },
  {
    id: 2,
    label: "Linkedin",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/linkedin.png?alt=media&token=e0768f46-fa08-4588-867a-b1252673192c",
    url: "https://linkedin.com/in/valentin-lagues",
    alt: "linkedin-logo",
  },
];

const ContactFooter = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="relative z-50 flex flex-col items-center w-full gap-4 pb-10 lg:pb-0 lg:pt-8 lg:flex-row">
      <div className="flex flex-row justify-center w-full gap-8 md:w-1/3">
        {socialLinks.map((link) => (
          <div key={link.id} className="relative w-9 h-9 md:w-10 md:h-10">
            <a href={link.url} target="_blank" rel="noreferrer noopener">
              <Image
                src={link.img}
                width={50}
                height={50}
                priority={true}
                alt={link.alt}
              />
            </a>
          </div>
        ))}
      </div>
      <p className="flex flex-row justify-center w-full text-xs text-white md:w-1/3 font-sorw">
        Tel : 06 87 17 48 25
      </p>
      <a
        className="flex flex-row justify-center w-full text-xs text-white md:w-1/3 font-sorw"
        href="https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/CV_Valentin_Lagues.pdf?alt=media&token=f9dc850e-cdd3-4a4e-af37-2477613cde19"
        target="_blank"
        rel="noreferrer noopener"
      >
        <p>{t("footer.resume")}</p>
      </a>
      {/* Downloading not working, pdf bug */}
      {/* <a
        className="flex flex-row justify-center w-full text-xs text-white md:w-1/3 font-sorw"
        href="/docs/CV_Valentin_Lagues.pdf"
        download="Valentin_lagues"
      >
        <p>{t("footer.resume")}</p>
      </a> */}
    </div>
  );
};

export default ContactFooter;
