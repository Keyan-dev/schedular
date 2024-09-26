"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ClipboardCopy, Trash } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { useRouter } from "next/navigation";
import { deleteEvent } from "@/actions/event";
import { PulseLoader } from "react-spinners";
import { useToast } from "@/hooks/use-toast";
const EventCard = ({ event, userName }) => {
    const { toast } = useToast()
    const { loading, error, fn: fnDeleteEvent } = useFetch(deleteEvent);
    const router = useRouter();
    const onDelete = async (eventId:string) => {
        await fnDeleteEvent(eventId);
        router.refresh();
        if(error){
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
              })
        }
        else{
        toast({description: "Event deleted successfully"})
        }
    }
    return (
        <div>
            <Card className="h-full justify-between flex flex-col">
                <div>
                <CardHeader>
                    <CardTitle className="text-xl">
                        {event.title}
                    </CardTitle>
                    <CardDescription className="flex justify-between">
                        <span>{event.duration}&nbsp;Minutes | {event.isPrivate?'Private':'Public'}</span>
                        <span>{event._count.booking}&nbsp;Booking(s)</span>
                        </CardDescription>
                </CardHeader>
                <CardContent className="text-pretty">
                    <p className="text-pretty">{event.description}</p>
                </CardContent>  
                </div>
                <CardFooter className="flex gap-3 justify-end items-center">
                    <Button className="flex gap-2"><ClipboardCopy size={16}/>Copy Link</Button>
                    <Button className="flex gap-2 bg-red-600 hover:bg-red-800" onClick={()=>{onDelete(event?.id)}}>{loading && (<PulseLoader className="" size={10} color="#f5f5f5" />)} {!loading &&  <><Trash size={16}/>Delete</>}</Button>
                </CardFooter>
            </Card></div>
    )
}

export default EventCard;