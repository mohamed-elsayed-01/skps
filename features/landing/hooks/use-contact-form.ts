"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, ContactFormSchema } from "@/features/landing/lib/schemas";
const useContactForm = () => {
    const form = useForm<ContactFormData>({
        resolver: zodResolver(ContactFormSchema),
        mode: "onChange"
    });

    const onSubmit = (data: ContactFormData) => {
        console.log("Form Data:", data);
    };

    return {
        form,
        onSubmit
    }
}

export default useContactForm