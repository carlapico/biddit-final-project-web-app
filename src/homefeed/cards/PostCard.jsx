export default function PostCard ({each}) {
    return (
        <>
            <div>
                 <h2>{each.userFullName} </h2>
                 <p>{each.userCounty}</p>
                 <p>{each.servicesSeeking}</p>
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
                    {each.budget}
                    {each.timeline}
                </section>
            </div>
        </>
    )
}
