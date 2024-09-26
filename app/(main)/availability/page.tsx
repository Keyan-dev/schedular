
import { getUserAvailability } from "@/actions/availability";
import AvailabilityForm from "./_components/AvailabilityForm";
import { defaultAvailability } from "./defaultData";
const Availability = async () => {
    const availability = await getUserAvailability();
    console.log(availability)
    return (
        <div>
            <AvailabilityForm initialData={availability || defaultAvailability} />
        </div>
    )
}

export default Availability