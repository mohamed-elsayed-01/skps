import ContactForm from "@/features/landing/components/contact/form/contact-form";
import QuickContact from "@/features/landing/components/contact/quick-contact";

const ContactSection = () => {
    return (
        <div className="max-w-7xl mx-auto pt-[64px] pb-[156px]">
            <div className="w-full grid grid-cols-5 gap-12">
                <div className="col-span-3">
                    <ContactForm />
                </div>
                <div className="col-span-2">
                    <QuickContact />
                </div>
            </div>
        </div>
    )
};

export default ContactSection;