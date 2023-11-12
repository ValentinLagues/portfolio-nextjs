import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import sectionsLinks from "src/config/sectionsLinks";

const variations = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Menus = (): JSX.Element => {
  const { t } = useTranslation();

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }
    const y = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <Disclosure
      as="nav"
      className="fixed flex flex-col w-full lg:px-8 lg:items-center"
    >
      {({ open }: { open: boolean }) => (
        <>
          <div className="flex items-center w-full h-full">
            <div className="w-full">
              <div className="flex items-center justify-center h-1 sm:h-full">
                <div className="hidden w-full lg:block ">
                  <nav className="justify-between w-full md:flex md:flex-row">
                    {sectionsLinks.map((link) => (
                      <div key={link.id}>
                        <p
                          className={`gap-8 lg:text-base xl:text-lg text-white hover:scale-125 cursor-pointer ${link.style}`}
                          onClick={() => {
                            handleClick(link["section-id"]);
                          }}
                        >
                          {t(`header.label${link.label}`)}
                        </p>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="flex justify-between w-full lg:hidden">
                <Disclosure.Button className="items-center justify-center text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="absolute z-10 w-8 h-8 top-6 right-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="absolute z-10 w-12 h-12 p-2 top-4 right-4"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="w-full bg-gradient-to-t from-black to-transparent lg:hidden">
            <motion.div
              variants={variations}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.3,
              }}
            >
              <Disclosure.Button className="">
                <nav className="flex flex-col items-start w-full py-5 space-y-1">
                  {sectionsLinks.map((link) => (
                    <div key={link.id} className="px-5 py-1 ">
                      <motion.div
                        animate={{ x: 40 }}
                        transition={{
                          ease: "easeOut",
                        }}
                        variants={variations}
                      >
                        <p
                          className={`text-base md:text-xl text-white cursor-pointer navbartitle`}
                          onClick={() => handleClick(link["section-id"])}
                        >
                          {t(`header.label${link.label}`)}
                        </p>
                      </motion.div>
                    </div>
                  ))}
                </nav>
              </Disclosure.Button>
            </motion.div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Menus;
