"use client";
import { eventSchema, eventSchemaType } from "@/lib/validators"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Button } from "./ui/button"
import {createEvent} from "@/actions/event"
import { PulseLoader } from "react-spinners"
import useFetch from "@/hooks/use-fetch"
import { useRouter } from "next/navigation";
import { FC } from "react";
interface EventFormProps{
    onSubmitForm:()=>void
}
const EventForm :FC<EventFormProps>= ({onSubmitForm}) => {
    const { register, handleSubmit, formState: { errors }, control } = useForm<eventSchemaType>({ resolver: zodResolver(eventSchema), defaultValues: { duration: 30, isPrivate: true } })
    const { loading, error, fn: fnCreateEvent } = useFetch(createEvent);
    const router = useRouter();

    const onSubmit = async (data: eventSchemaType) => {
        await fnCreateEvent(data);
        if(!loading && !error) onSubmitForm();
        router.refresh();
    }
    return (
        <form className="px-6 flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700"> Title</label>
                <Input id="title" {...register("title")} className="mt-1" placeholder="Enter the event title" />
                {errors.title && (<p className="text-red-500 text-sm mt-1">{`${errors?.title?.message}`}</p>)}
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <Textarea id="description" {...register("description")} className="mt-1" placeholder="Enter the event description" />
                {errors.description && (<p className="text-red-500 text-sm mt-1">{`${errors?.description?.message}`}</p>)}
            </div>
            <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration</label>
                <Input id="duration" type="number" {...register("duration", { valueAsNumber: true })} className="mt-1" placeholder="Enter the event duration in minutes" />
                {errors.duration && (<p className="text-red-500 text-sm mt-1">{`${errors?.duration?.message}`}</p>)}
            </div>
            <div>
                <label htmlFor="isPrivate" className="block text-sm font-medium text-gray-700">Event privacy</label>
                <Controller name="isPrivate" control={control} render={({ field }) => (
                    <Select value={field.value ? "true" : "false"} onValueChange={(value) => field.onChange(value === "true")}>
                        <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a event privacy" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="true">Private</SelectItem>
                                <SelectItem value="false">Public</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                )} />
                {errors.isPrivate && (<p className="text-red-500 text-sm mt-1">{`${errors?.isPrivate?.message}`}</p>)}
            </div>
            {error && (<p className="text-red-500 text-sm mt-1">{`${error}`}</p>)}
            <Button disabled={loading ?? false} >{loading ? (<PulseLoader className="" size={10} color="#f5f5f5" />) : 'Create Event'}</Button>
        </form>
    )
}

export default EventForm