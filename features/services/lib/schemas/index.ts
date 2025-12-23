import { z } from "zod";

export const serviceRequestSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    company: z.string().min(1, "Company is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    projectDetails: z.string().optional(),
    agreement: z.boolean().refine((val) => val === true, {
        message: "You must agree to proceed",
    }),
});

export type ServiceRequestFormData = z.infer<typeof serviceRequestSchema>;
