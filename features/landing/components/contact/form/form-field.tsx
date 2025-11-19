"use client"
import { Controller, useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ContactFormData } from "@/features/landing/lib/schemas"
import clsx from "clsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

interface BaseFieldProps {
    name: keyof ContactFormData
    label: string
    placeholder?: string
    className?: string
    required?: boolean
    form: ReturnType<typeof useForm<ContactFormData>>;
}
interface TextFieldProps extends BaseFieldProps {
    type: 'text'
}

interface SelectFieldProps extends BaseFieldProps {
    type: 'select'
    options: ReadonlyArray<{ value: string; label: string }>
}
interface TextareaFieldProps extends BaseFieldProps {
    type: 'textarea'
}
interface CheckboxFieldProps extends BaseFieldProps {
    type: "checkbox"
}

type FormFieldProps = TextFieldProps | SelectFieldProps | TextareaFieldProps | CheckboxFieldProps

export const FormField = (props: FormFieldProps) => {
    const register = props.form.register;
    const control = props.form.control;
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
                        className="bg-white border border-[#D1D5DB] px-[15px] text-[#1F2937] text-base font-normal rounded-sm"
                    />
                )
            case "select":
                return (
                    <Controller
                        name={props.name}
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value ? String(field.value) : ""}>
                                <SelectTrigger id={`contact-form-${props.name}`} className="bg-white border border-[#D1D5DB] px-[15px] text-[#1F2937] text-sm font-normal rounded-sm w-full">
                                    <SelectValue placeholder={props.placeholder} />
                                </SelectTrigger>
                                <SelectContent>
                                    {props.options.map(option => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    />
                )
            case "textarea":
                return (
                    <Textarea
                        {...register(props.name)}
                        id={props.name}
                        placeholder={props.placeholder}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        className="bg-white border border-[#D1D5DB] px-[15px] py-2 text-[#1F2937] text-base font-normal rounded-sm h-[114px] resize-none"
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
        }
    }
    return (
        <div className={clsx("space-y-[6px]", props.className)}>
            {props.type !== "checkbox" && (
                <Label htmlFor={props.name} className="font-normal text-[#374151] leading-5 text-sm">
                    {props.label} {props.required && "*"}
                </Label>
            )}
            {renderField()}
            {error && <span className="text-xs text-red-500 block">
                {error.message}
            </span>}
        </div>
    )

}