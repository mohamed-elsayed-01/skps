"use client"
import { Button } from "@/components/ui/button";
import { REQUEST_SERVICE_FORM_CONFIG } from "../constants/forms";
import { useRequestServiceForm } from "../hooks/use-request-service-form"
import { FormField } from "./form-field"


const RequestForThisServiceForm = () => {
    const { form, onSubmit } = useRequestServiceForm();
    return (
        <div className="w-full bg-[#F6F6F6] pt-[87px] pb-[57px] mt-[73px]">
            <div className="w-full  max-w-[884.19px] mx-auto">
                <span className="block text-[#111827] font-bold leading-9 text-3xl">Request for This Service</span>
                <p className="block mt-[16px] text-[#4B5563] leading-6 text-base">
                    Fill out the form below to discuss your specific requirements with our engineering team. We&apos;ll respond within 24 hours.
                </p>
                <form onSubmit={onSubmit} noValidate className="mt-[32px] w-full grid grid-cols-[repeat(2,1fr)] gap-6">
                    <FormField form={form} {...REQUEST_SERVICE_FORM_CONFIG.fields.fullName} />
                    <FormField form={form} {...REQUEST_SERVICE_FORM_CONFIG.fields.company} />
                    <FormField form={form} {...REQUEST_SERVICE_FORM_CONFIG.fields.email} />
                    <FormField form={form} {...REQUEST_SERVICE_FORM_CONFIG.fields.phone} />
                    <FormField form={form} className="col-span-2" {...REQUEST_SERVICE_FORM_CONFIG.fields.projectDetails} />
                    <FormField form={form} {...REQUEST_SERVICE_FORM_CONFIG.fields.agreement} />
                    <div className="col-span-2 mt-3">
                        <Button className="bg-accent hover:bg-accent text-white hover:text-white text-base leading-6 py-[22px]">
                            Submit Request
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RequestForThisServiceForm
