import ContactFooter from "@components/contact/ContactFooter";
import SectionContainer from "@components/sectionContainer";
import ContactForm from "./ContactForm";
import ContactTitle from "./ContactTitle";

const ContactComponent = (): JSX.Element => {
  return (
    <SectionContainer sectionId="contact">
      <div className="w-full h-full min-h-screen pt-20 md:pt-10">
        <ContactTitle />
        <ContactForm />
        <ContactFooter />
      </div>
    </SectionContainer>
  );
};

export default ContactComponent;
