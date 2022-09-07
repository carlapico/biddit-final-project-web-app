import "./ProfileCard.css"

export default function ProfileCard () {
    return (
        <> 
            <div className="profileCardBox">
                <img src="https://miro.medium.com/fit/c/176/176/1*pWl9qTTcbNpJGa2wll6awg.jpeg" alt="empty profile picture" />
                <h2>Picture and Name</h2>
                <p> user County </p>
                <p> user Projects</p>
            </div>
            {/* get route 
                profile pic 
                name 
                county 
                projects completed  */}
        </>
    )
}