
// import { useState, useEffect } from 'react'
import { useState } from "react"
import "./NewPost.css"

export default function NewPost () {

    // const [formSubmitted, setFormSubmitted] = useState(false) //this is so it doesn't submit before information is imput
    // const [validForm, setValidForm] = useState(false) // this is to make a form valid
    // const [errorMessage, setErrorMessage] = useState('') // if there is an error when submitting the form 
    // const [form, setForm] = useState({}) // not 100% sure on this 
  
    // console.log('props here', ronsProps, aliciasProps) // these were the props brought in from the example we had // I don't think we need to bring in any props here...
  
    // useEffect(() => {
    //   if (form?.title?.length > 3 && form?.description?.length > 10) { // I need more info to see what is happening here. 
    //     setValidForm(true)
    //   } else {
    //     setValidForm(false)
    //   }
    // }, [form])
  
    // async function formSubmit(e) {
    //   e.preventDefault() // stops the page refresh
  
    //   if (!validForm) {
    //     setErrorMessage('Not a valid form')
    //     return
    //   }
  
    //   try {
    //     const results = await fetch('https://biddit-final-project-cp.web.app/userPosts', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(form),
    //     })
    //     console.log(results)
    //     const data = await results.json()
    //     console.log(data)
  
    //     setFormSubmitted(true)
    //     setErrorMessage('')
    //     setValidForm(true)
  
    //     // setStateFromChild(form) // this is a prop that is being pulled
    //   } catch (error) {
    //     console.error(error)
    //     setErrorMessage('there was an error submitting your comment' + error.toString())
    //   }
    // }
  
    // console.log('this is form =>', form)
  
    // const updateForm = event => {
    //   setForm({ ...form, [event.target.name]: event.target.value })
    // }

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
                       <input type="text" value ={projBudget} name="projectRequirements" onChange={(e)=>setProjBudget(e.target.value)}/>
                       <input type="text" value ={projTimeline} name="projectRequirements" onChange={(e)=>setProjTimeline(e.target.value)}/>
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