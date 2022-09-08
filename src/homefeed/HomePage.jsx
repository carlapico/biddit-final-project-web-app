import Header from "../components/Header";
import "./HomePage.css"
import ProfileAndActivity from "./ProfileAndActivity";
import CompleteFeed from "./CompleteFeed";

export default function HomeFeed () {
    return (
        <>
            <Header/> 
            <ProfileAndActivity /> 
            <CompleteFeed /> 
        </>
    )
}

