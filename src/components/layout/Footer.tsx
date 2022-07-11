import Image from "next/image";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    id: 1,
    label: "Github",
    img: "https://res.cloudinary.com/dnw0kiu56/image/upload/v1657181316/portfolio/github_clk5a4.png",
    url: "https://github.com/ValentinLagues",
    alt: "github-logo",
  },
  {
    id: 2,
    label: "Linkedin",
    img: "https://res.cloudinary.com/dnw0kiu56/image/upload/v1657181405/portfolio/linkedin_d8nfes.png",
    url: "https://linkedin.com/in/valentin-lagues",
    alt: "linkedin-logo",
  },
];

const ContactFooter = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="relative z-50 flex flex-col items-center w-full gap-4 pb-10 lg:flex-row">
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
        06 87 17 48 25
      </p>
      <a
        href="/docs/CV_Valentin_Lagues.pdf"
        download="ValentinLagues.pdf"
        className="flex flex-row justify-center w-full text-xs text-white md:w-1/3 font-sorw"
      >
        <p>{t("footer.resume")}</p>
      </a>
    </div>
  );
};

export default ContactFooter;
