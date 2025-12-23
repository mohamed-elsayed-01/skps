export const REQUEST_SERVICE_FORM_CONFIG = {
    fields: {
        fullName: {
            name: "fullName",
            type: "text",
            label: "Full Name",
            required: true,
            placeholder: "Enter your full name",
        },
        company: {
            name: "company",
            type: "text",
            label: "Company",
            required: true,
            placeholder: "Enter your company name",
        },
        phone: {
            name: "phone",
            type: "text",
            label: "Phone",
            required: true,
            placeholder: "Enter your phone number",
        },
        email: {
            name: "email",
            type: "text",
            label: "Email",
            required: true,
            placeholder: "Enter your email address",
        },
        agreement: {
            name: "agreement",
            type: "checkbox",
            label: "I agree to the processing of my data as per SKPS's privacy policy",
            placeholder: "I agree to the processing of my data as per SKPS's privacy policy",
            required: true,
        },
        projectDetails: {
            name: "projectDetails",
            type: "textarea",
            label: "Project Details",
            placeholder: "Enter your project details",
            required: false,
        },
    },
} as const;