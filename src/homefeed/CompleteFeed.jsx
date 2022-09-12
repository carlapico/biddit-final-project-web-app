import AllPosts from "./cards/AllPosts"
import NewPost from "./cards/NewPost"
import { useState } from "react"

export default function CompleteFeed() {
  const [open, setOpen] = useState(false)
  return (
    <div className="rightSide">
      <NewPost />
      <AllPosts />
    </div>
  )
}
