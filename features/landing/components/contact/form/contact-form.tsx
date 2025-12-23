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
                        {...CONTACT_FORM_CONFIG.fields.firstName}
                        className="col-span-1"
                    />
                    <FormField
                        form={form}
                        {...CONTACT_FORM_CONFIG.fields.lastName}
                        className="col-span-1"
                    />
                    <FormField
                        form={form}
                        {...CONTACT_FORM_CONFIG.fields.email}
                        className="col-span-1"
                    />
                    <FormField
                        form={form}
                        {...CONTACT_FORM_CONFIG.fields.phone}
                        className="col-span-1"
                    />
                    <FormField
                        form={form}
                        {...CONTACT_FORM_CONFIG.fields.company}
                        className="col-span-2"
                    />
                    <FormField
                        form={form}
                        {...CONTACT_FORM_CONFIG.fields.serviceCategory}
                        className="col-span-2"
                    />
                    <FormField
                        form={form}
                        {...CONTACT_FORM_CONFIG.fields.projectDescription}
                        className="col-span-2"
                    />
                    <FormField
                        form={form}
                        {...CONTACT_FORM_CONFIG.fields.privacyPolicy}
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