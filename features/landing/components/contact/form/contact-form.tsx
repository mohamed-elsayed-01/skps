"use client"
import { CONTACT_FORM_CONFIG } from "@/features/landing/constants/forms";
import { FormField } from "./form-field";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import useContactForm from "@/features/landing/hooks/use-contact-form";

const ContactForm = () => {
    const { form, onSubmit } = useContactForm();
    return (
        <div>
            <span className="text-[#111827] text-4xl font-normal leading-10 block">Connect with Us</span>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                <div className="grid grid-cols-2 gap-6 mt-[39px]">
                    <FormField
                        form={form}
                        label={CONTACT_FORM_CONFIG.fields.firstName.label}
                        name={CONTACT_FORM_CONFIG.fields.firstName.name}
                        type={CONTACT_FORM_CONFIG.fields.firstName.type}
                        placeholder={CONTACT_FORM_CONFIG.fields.firstName.placeholder}
                        required={CONTACT_FORM_CONFIG.fields.firstName.required}
                        className="col-span-1"
                    />
                    <FormField
                        form={form}
                        label={CONTACT_FORM_CONFIG.fields.lastName.label}
                        name={CONTACT_FORM_CONFIG.fields.lastName.name}
                        type={CONTACT_FORM_CONFIG.fields.lastName.type}
                        placeholder={CONTACT_FORM_CONFIG.fields.lastName.placeholder}
                        required={CONTACT_FORM_CONFIG.fields.lastName.required}
                        className="col-span-1"
                    />
                    <FormField
                        form={form}
                        label={CONTACT_FORM_CONFIG.fields.email.label}
                        name={CONTACT_FORM_CONFIG.fields.email.name}
                        type={CONTACT_FORM_CONFIG.fields.email.type}
                        placeholder={CONTACT_FORM_CONFIG.fields.email.placeholder}
                        required={CONTACT_FORM_CONFIG.fields.email.required}
                        className="col-span-1"
                    />
                    <FormField
                        form={form}
                        label={CONTACT_FORM_CONFIG.fields.phone.label}
                        name={CONTACT_FORM_CONFIG.fields.phone.name}
                        type={CONTACT_FORM_CONFIG.fields.phone.type}
                        placeholder={CONTACT_FORM_CONFIG.fields.phone.placeholder}
                        required={CONTACT_FORM_CONFIG.fields.phone.required}
                        className="col-span-1"
                    />
                    <FormField
                        form={form}
                        label={CONTACT_FORM_CONFIG.fields.company.label}
                        name={CONTACT_FORM_CONFIG.fields.company.name}
                        type={CONTACT_FORM_CONFIG.fields.company.type}
                        placeholder={CONTACT_FORM_CONFIG.fields.company.placeholder}
                        required={CONTACT_FORM_CONFIG.fields.company.required}
                        className="col-span-2"
                    />
                    <FormField
                        form={form}
                        label={CONTACT_FORM_CONFIG.fields.serviceCategory.label}
                        name={CONTACT_FORM_CONFIG.fields.serviceCategory.name}
                        type={CONTACT_FORM_CONFIG.fields.serviceCategory.type}
                        placeholder={CONTACT_FORM_CONFIG.fields.serviceCategory.placeholder}
                        required={CONTACT_FORM_CONFIG.fields.serviceCategory.required}
                        options={CONTACT_FORM_CONFIG.fields.serviceCategory.options}
                        className="col-span-2"
                    />
                    <FormField
                        form={form}
                        label={CONTACT_FORM_CONFIG.fields.projectDescription.label}
                        name={CONTACT_FORM_CONFIG.fields.projectDescription.name}
                        type={CONTACT_FORM_CONFIG.fields.projectDescription.type}
                        placeholder={CONTACT_FORM_CONFIG.fields.projectDescription.placeholder}
                        required={CONTACT_FORM_CONFIG.fields.projectDescription.required}
                        className="col-span-2"
                    />
                    <FormField
                        form={form}
                        label={CONTACT_FORM_CONFIG.fields.privacyPolicy.label}
                        name={CONTACT_FORM_CONFIG.fields.privacyPolicy.name}
                        type={CONTACT_FORM_CONFIG.fields.privacyPolicy.type}
                        placeholder={CONTACT_FORM_CONFIG.fields.privacyPolicy.placeholder}
                        required={CONTACT_FORM_CONFIG.fields.privacyPolicy.required}
                        className="col-span-2"
                    />
                </div>
                <Button className="bg-accent text-white font-normal text-base py-[24px] px-5! mt-[26px] hover:bg-accent/90 cursor-pointer">
                    Submit Request <ArrowRight />
                </Button>
            </form>
        </div>
    )
};

export default ContactForm;