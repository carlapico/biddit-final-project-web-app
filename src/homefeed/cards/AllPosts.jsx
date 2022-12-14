import { useEffect, useState } from "react"
import PostCard from "./PostCard"

export default function AllPosts () {
    const [posts, setPosts] = useState([])
    const url = "https://biddit-final-project-cp.web.app/userPosts" //userPosts"
    
    useEffect (() => {
        fetch (url)
            .then ((res) => res.json())
            .then ((data) => setPosts (data))
            .catch ((error) => console.error(error))
    }, [])

    return (
        <>
                {posts.map( (each) => {
                    return (
                        <PostCard each ={each}/>
                    )
                } )}
        </>
    )
}
