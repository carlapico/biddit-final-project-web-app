
// import { useState } from "react";
// import { Input } from 'antd';
// const { Search } = Input;
import "./NewPost.css"

export default function NewPost () {

// POSTING THE NEW POST IN THE DATABASE
//     const [newPost, setNewPost] = useState('');
//     const addTask = () => {
//         fetch('https://three-do-api-bc.web.app/tasks', {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ newPost, done: false }) // not sure whatt the done: false does here 
//         })
//         .then(results => results.json())
//         .then(data => {
//             setTasklist(data);
//             setTask('');
//         })
//         .catch(console.error);
//   }


    return (
        <> 
            <form className="newPostBox">                
                {/* <input value = {each.userFullName} name="Name" id="" /> */}

                <div className="countyAndServices">
                   <p></p>
                   <p> Seeking a // input box here</p>
               </div>

               <div className="projectDetailsBox">
                   <section>
                       <h3> Project Overview </h3>
                        input box here 
                   </section>
                   
                   <section>
                       <h3> Project Requirements </h3>
                       input box here
                   </section>

                   <section>
                       <h3> Budget and Timeline </h3>
                       <p> Budget: inputbox here </p>
                       <p> Ideal Timeline: inputbox here</p>
                   </section>
               </div>

               <button>Post</button>
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