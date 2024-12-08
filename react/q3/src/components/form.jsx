import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const emailRef = useRef(null); // Uncontrolled for email
    const [name, setName] = useState("");
    const notify = () => toast("user must be more than 3 characters");
    const handleSubmit =(e)=>{
        e.preventDefault()
        if (name.length<3){
            notify()
            return;
        }
        console.log("name :", name)
        console.log("email :", emailRef.current.value)

    }
    
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='enter the name' value={name} onChange={(e)=>setName(e.target.value)} required/>
        <input type="email"placeholder='enter the email'  ref={emailRef}/>
        <input type="submit" value={"submit"}/>
        <ToastContainer />
      </form>
    </div>
  )
}

export default Form;
