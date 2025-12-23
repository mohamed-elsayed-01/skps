"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    serviceRequestSchema,
    ServiceRequestFormData,
} from "@/features/services/lib/schemas";

export const useRequestServiceForm = () => {
    const form = useForm<ServiceRequestFormData>({
        resolver: zodResolver(serviceRequestSchema)
    });

    const onSubmit = (data: ServiceRequestFormData) => {
        console.log("Form submitted:", data);
    };

    return {
        form,
        onSubmit: form.handleSubmit(onSubmit),
    };
};
