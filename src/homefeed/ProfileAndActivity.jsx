import ActivityCard from "./cards/ActivityCard";
import ProfileCard from "./cards/ProfileCard";
import "./ProfileAndActivity.css"

export default function ProfileAndActivity () {
    return(
        <div className="leftSide">
            <ProfileCard /> 
            <ActivityCard />
        </div>
    )
}