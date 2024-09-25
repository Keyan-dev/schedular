import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ClipboardCopy, Trash } from "lucide-react";
const EventCard = ({ event, userName }) => {
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
                    <Button className="flex gap-2 bg-red-600 hover:bg-red-800"> <Trash size={16}/>Delete</Button>
                </CardFooter>
            </Card></div>
    )
}

export default EventCard;