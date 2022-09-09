
// import { useState, useEffect } from 'react'
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



    return (
        <> 
            <form className="newPostBox">         

                <input type="text" value= "Name" name="userFullName" />

                <div className="countyAndServices">
                   <p> user County </p>
                   <p> Seeking a // input box here</p>
               </div>

               <div>
                   <section>
                       <h3> Project Overview </h3>
                       <input type="text" value = "Project Overview here..." name="projectOverview" />
                   </section>
                   
                   <section>
                       <h3> Project Requirements </h3>
                       <input type="text" value = "Project Requirements here..." name="projectRequirements" />
                   </section>

                   <section>
                       <h3> Budget and Timeline </h3>
                       <input type="text" value = "Budget here..." name="budget" />
                       <input type="text" value= "Timeline here..." name="timeline" />
                   </section>
               </div>


               <div className="newPostButtonBox">
                    <button className="newPostButton">Post</button>
                </div>
           </form>
            
            {/* Need a post route here to post to the feed. 
                get route for: 
                    profile pic 
                    name 
                    county 
            {/* Seeking a ... dropdown menu for services 
                get route is needed here  ----- lowest priority for the post card */}

            {/* Form 
                Project Overview input text box 

                project requirement input text box 
                
                budget input box 

                timeline date input box 
                
                post button  */}
            
        </>
    )
}