import emailjs from "emailjs-com";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useState } from "react";
import Image from "next/image";

type ContactSubmitForm = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = (): React.ReactElement => {
  const { t } = useTranslation();
  const [mailSent, setMailSent] = useState(false);

  const emailFormResolver = yup.object().shape({
    name: yup.string().required(`${t("contact.errorName")}`),
    email: yup
      .string()
      .email(`${t("contact.errorValidEmail")}`)
      .required(`${t("contact.errorEmail")}`),
    message: yup.string().required(`${t("contact.errorMessage")}`),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSubmitForm>({
    resolver: yupResolver(emailFormResolver),
    criteriaMode: "all",
  });

  const onSubmit = async (data: FieldValues) => {
    const params = {
      to_name: "Valentin Lagues",
      from_name: data.name,
      from_email: data.email,
      email: process.env.NEXT_PUBLIC_OWNER_EMAIL,
      message: data.message,
    };
    const sentEmail = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE as string,
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE as string,
      params,
      process.env.NEXT_PUBLIC_EMAIL_JS_USER
    );
    if (sentEmail.status === 200) {
      reset();
      setMailSent(true);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 my-4 text-white bg-black border-white border-x-2 border-y-4">
      {mailSent === false && (
        <form
          className="md:px-28 lg:px-44 xl:px-52"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col h-24 mb-3">
            <label className="text-2xl md:text-3xl font-sorbw flickertitle">
              {t("contact.labelName")}
            </label>
            <input
              placeholder={t("contact.placeholderName")}
              type="text"
              {...register("name")}
              className={`focus:placeholder:invisible w-full font-retro text-sm md:text-base p-2 mt-1 bg-transparent border-2 border-white text-white ${
                errors.name ? "is-invalid" : ""
              }`}
            />
            <div className="mt-2 text-xs text-red-600 font-retro">
              {errors.name?.message}
            </div>
          </div>
          <div className="flex flex-col h-24 my-3">
            <label className="text-2xl md:text-3xl font-sorbw title">
              {t("contact.labelEmail")}
            </label>
            <input
              placeholder={t("contact.placeholderEmail")}
              type="email"
              {...register("email")}
              className={`focus:placeholder:invisible w-full font-retro text-sm md:text-base p-2 mt-1 bg-transparent border-2 border-white text-white ${
                errors.email ? "is-invalid" : ""
              }`}
            />
            <div className="mt-2 text-xs text-red-600 font-retro">
              {errors.email?.message}
            </div>
          </div>
          <div className="flex flex-col my-3 h-36">
            <label className="text-2xl md:text-3xl font-sorbw flickertitle2">
              {t("contact.labelMessage")}
            </label>
            <textarea
              placeholder={t("contact.placeholderMessage")}
              {...register("message")}
              className={`focus:placeholder:invisible w-full font-retro text-sm md:text-base p-2 mt-1 bg-transparent border-2 border-white text-white ${
                errors.message ? "is-invalid" : ""
              }`}
              cols={50}
              rows={5}
            />
            <div className="mt-2 text-xs text-red-600 font-retro">
              {errors.message?.message}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="flex justify-center px-6 py-4 mt-8 text-xs md:text-base font-sorw navbartitle hover:scale-125"
              type="submit"
            >
              {t("contact.button")}
            </button>
          </div>
        </form>
      )}
      {mailSent === true && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative hidden p-4 md:block">
            <Image
              height={150}
              width={300}
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/jackSOR.gif?alt=media&token=852bdf0e-9279-49db-b15a-d2b323954737"
              alt="email-sent-image"
              priority={true}
            />
          </div>
          <p className="text-xs text-center text-white md:text-base font-sorw">
            {t("contact.mailSent")}
          </p>
          <button
            className="flex justify-center py-4 mt-8 text-xs md:text-base font-sorw navbartitle hover:scale-125"
            onClick={() => setMailSent(false)}
          >
            {t("contact.sentButton")}
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
