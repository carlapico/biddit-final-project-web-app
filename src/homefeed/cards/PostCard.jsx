import "./PostCard.css"

export default function PostCard ({each}) {
    return (
        <>
            <div className="postCard">
                 <h2>{each.userFullName} </h2>

                 <div className="countyAndServices">
                    <p>{each.userCounty}</p>
                    <p> Seeking a {each.servicesSeeking}</p>
                </div>

                <div className="projectDetailsBox">
                    <section>
                        <h3> Project Overview </h3>
                         {each.projectOverview}
                    </section>
                    
                    <section>
                        <h3> Project Requirements </h3>
                        {each.projectRequirements}
                    </section>

                    <section>
                        <h3> Budget and Timeline </h3>
                        <p> Budget: {each.budget} </p>
                        <p> Ideal Timeline: {each.timeline} </p>
                    </section>
                </div>

                <button>Biddit</button>
            </div>
        </>
    )
}
