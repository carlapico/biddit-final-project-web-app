// this card is lowest priority to complete 
import "./ActivityCard.css"

export default function ActivityCard () {
    return (
        <>
            <div className="activityCardBox">
                <h2>Active Projects</h2>
                    {/* <p>Project 1</p> <button>Mark as Completed</button>
                    <p>Project 2</p> <button>Mark as Completed</button>
                    <p>Project 3</p> <button>Mark as Completed</button> */}
                <h2>Active Bids </h2>

                <h2>Completed Projects</h2>
            </div>
        {/* Need get route for all of this 
            active projects 
                service sought 
                mark as completed button // this needs a post route
            active bids
                services sought 
                service company name 
            completed projects
                services rendered
                service company name */}
        </>
    )
}