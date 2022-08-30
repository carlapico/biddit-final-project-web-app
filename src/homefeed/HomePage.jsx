import Header from "../components/Header";
import ProfileCard from "./cards/ProfileCard"
import NewPost from "./cards/NewPost"
import FeedCard from "./cards/FeedCard"
import ActivityCard from "./cards/ActivityCard"

export default function HomeFeed () {
    return (
        <>
            <Header /> 
            <ProfileCard />
            <NewPost />
            <FeedCard /> 
            <ActivityCard />
        </>
    )
}

