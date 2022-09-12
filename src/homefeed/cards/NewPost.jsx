
// import { useState, useEffect } from 'react'
import { useState } from "react"
import "./NewPost.css"

export default function NewPost () {

    const [name, setName] = useState("")
    const [county, setCounty] = useState("")
    const [service, setService] = useState ("")
    const [overview, setOverview] = useState("")
    const [requirement, setRequirement] = useState("")
    const [projBudget, setProjBudget] = useState("")
    const [projTimeline, setProjTimeline] = useState("")

    const handleSubmit=()=>{

        fetch("https://biddit-final-project-cp.web.app/userPosts",{
        method:"Post",
        headers : {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({ userFullName:name, userCounty:county, servicesSeeking:service, projectRequirements:requirement, projectBudget:projBudget,projectTimeline:projTimeline})
        
    })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }


    return (
        <> 
            <form className="newPostBox"> 
                <div className="newPostTopBox">
                    <img src="https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg" alt="default avatar for user" />
                    <div className="newNameAndCounty">
                        <label> Name
                            <input type="text" value = {name} name="userName" onChange={(e) => setName(e.target.value)} />    
                        </label>

                        <label> County
                            <input type="text" value = {county} name="userCounty" onChange={(e) => setCounty(e.target.value)} />
                        </label>
                    </div>

                    <div className="newServices">
                        <label> Seeking a: 
                            <input type="text" value = {service} name="servicesSeeking" onChange={(e) => setService(e.target.value)} />
                        </label>
                    </div>
                </div>        

               <div className="newProjectDetailsBox">
                   <section className="newCardSection">
                        <h3> Project Overview </h3>
                        <input type="text" value = {overview} name="projectOverview" onChange={(e) => setOverview(e.target.value)} />
                   </section>
                   
                   <section className="newCardSection">
                       <h3> Project Requirements </h3>
                       <input type="text" value ={requirement} name="projectRequirements" onChange={(e)=>setRequirement(e.target.value)}/>
                   </section> 

                   <section className="newCardSection">
                       <h3> Budget and Timeline </h3>
                       <div>
                       <input type="text" value ={projBudget} name="projectBudget" onChange={(e)=>setProjBudget(e.target.value)}/>
                       <input type="text" value ={projTimeline} name="projectTimeline" onChange={(e)=>setProjTimeline(e.target.value)}/>
                       </div>
                   </section>
               </div>


               <div className="newPostButtonBox">
                    <button className="newPostButton" onClick={(e)=>{
                        e.preventDefault()
                        handleSubmit()}}>Post</button>
                </div>
           </form>
            
        </>
    )
}