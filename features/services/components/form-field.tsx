"use client"

import { Controller, useForm } from "react-hook-form"
import { ServiceRequestFormData } from "../lib/schemas"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import clsx from "clsx"

interface BaseFieldProps {
    name: keyof ServiceRequestFormData
    label: string
    placeholder?: string
    className?: string
    required?: boolean
    form: ReturnType<typeof useForm<ServiceRequestFormData>>;
}

interface TextFieldProps extends BaseFieldProps {
    type: 'text'
}

interface TextareaFieldProps extends BaseFieldProps {
    type: 'textarea'
}
interface CheckboxFieldProps extends BaseFieldProps {
    type: "checkbox"
}

type FormFieldProps = TextFieldProps | TextareaFieldProps | CheckboxFieldProps


export const FormField = (props: FormFieldProps) => {
    const register = props.form.register;
    const error = props.form.formState.errors[props.name];


    const renderField = () => {
        switch (props.type) {
            case "text":
                return (
                    <Input {...register(props.name)}
                        id={props.name}
                        placeholder={props.placeholder}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        className="bg-white px-4 py-5"
                    />
                )
            case "textarea":
                return (
                    <Textarea {...register(props.name)}
                        id={props.name}
                        placeholder={props.placeholder}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        className="bg-white p-4 h-[128px] "
                    />
                )
            case "checkbox":
                return (
                    <Controller
                        name={props.name}
                        control={props.form.control}
                        defaultValue={false}
                        render={({ field }) => (
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id={props.name}
                                    checked={field.value as boolean}
                                    onCheckedChange={field.onChange}
                                />

                                <Label
                                    htmlFor={props.name}
                                    className="text-sm text-[#374151] font-normal cursor-pointer"
                                >
                                    {props.label}{" "}
                                </Label>
                            </div>
                        )}
                    />
                )
            default:
                return null;
        }
    }


    return (
        <div className={clsx("col-span-1", props.className)}>
            {props.type !== "checkbox" && (
                <Label htmlFor={props.name} className="font-medium text-[#374151] leading-6 text-base">
                    {props.label} {props.required && "*"}
                </Label>
            )}
            <div className="w-full mt-2">
                {renderField()}
            </div>
            {error && <span className="text-xs text-red-500 block mt-2">
                {error.message}
            </span>}
        </div>
    )


};