import { z } from "zod";

export const ContactFormSchema = z.object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(1, "Phone is required"),
    company: z.string().min(1, "Company is required"),
    serviceCategory: z.string().min(1, "Service Category is required"),
    projectDescription: z.string().min(1, "Project Description is required"),
    privacyPolicy: z.boolean().refine(val => val === true, "You must agree"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
