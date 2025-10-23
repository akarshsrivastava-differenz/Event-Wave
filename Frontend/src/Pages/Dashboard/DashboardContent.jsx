import AttendeeDashboard from "./Attendee/AttendeeDashboard";
import OrganizerDashboard from "./Organizer/OrganizerDashboard";
import { useUser } from "../../contexts/UserContext";

const DashboardContent = () => {
    const { isOrganiser } = useUser();

    return (
        <>
            {isOrganiser ? <OrganizerDashboard /> : <AttendeeDashboard />}
        </>
    );
}

export default DashboardContent;