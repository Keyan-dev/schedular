import { getUserEvents } from "@/actions/event";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { CalendarDays, PenBox } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { HashLoader } from "react-spinners";
const FallbackEvents = () => {
    return (<div className="flex flex-col items-center justify-center h-2/3 gap-5">
        <HashLoader size={50} color="gray" loading={true} className="" />
        <p className="text-xl text-gray-600">Loading Events..</p>
    </div>)
}
const NoEvent = () => {
    return (
        <div className="flex flex-col items-center justify-center h-2/3 gap-5">
            <CalendarDays className="text-gray-500" size={150} />
            <p className="text-xl text-gray-500 text-center">
                Look like you haven&apos;t created any events yet.</p>
            <Link href={"/events?create=true"}>
                <Button className="flex items-center gap-2"><PenBox size="18" />Create Event</Button>
            </Link>
        </div>
    )
}
const Events = async () => {
    const { events, userName } = await getUserEvents();
    console.log("events", events);
    if (events?.length === 0) {
        return <NoEvent />
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">{
            events.map((event) => (
                <EventCard key={event.id} event={event} userName={userName} />
            ))
        }</div>
    )
}
export default function EventsPage() {
    return (
        <Suspense fallback={(<FallbackEvents />)}>
            <Events />
        </Suspense>
    )
}


