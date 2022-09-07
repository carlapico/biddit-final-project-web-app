import Header from "../components/Header";
import ProfileCard from "./cards/ProfileCard"
import NewPost from "./cards/NewPost"
import Feed from "./cards/Feed"
import ActivityCard from "./cards/ActivityCard"
import "./HomePage.css"

export default function HomeFeed () {
    return (
        <>
            <Header/> 
            <ProfileCard />
            <ActivityCard />
            <NewPost />
            <Feed /> 
        </>
    )
}

