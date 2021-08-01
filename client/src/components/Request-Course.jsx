import React, { useState } from 'react';
import "../sass/request.css";

export const RequestCourse = () => {
    const [credential,setCredential]=useState({
        name:"",
        gmail:"",
        course:"",
        message:""
    })
    const ChangeInp=(event)=>{
        const {name,value}=event.target;
        setCredential((preValue)=>{
            return{
                ...preValue,
                [name]:value
            }
        })
    }
    const postChange=async(event)=>{
        event.preventDefault();
        const {name,gmail,course,message}=credential;
        const res= await fetch('/course',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,gmail,course,message
            })
        })
        const dataSuccess=document.querySelector('.alert-success')
        const dataUnsuccess=document.querySelector('.alert-danger')
        const data=await res.json();
        console.log(data);
        if (data.error==="invalid credential"||!data) {
            dataUnsuccess.style.display="block";
            setTimeout(()=>{
                dataUnsuccess.style.display="none";
            },2000)
        }
        else{
            dataSuccess.style.display="block";
            setCredential({
                name:"",gmail:"",course:""
            })
            setTimeout(()=>{
                dataSuccess.style.display="none";
            },1500)
        }
       
        }
        return(
            <>
             <div className="request-container text-center">
         <div className="top ">
             <img src="https://i.ibb.co/MPbvX2V/sign-in.png" alt="" />
         </div>
            <div className="alert-zone text-center"></div>
         <div className="input-container mt-5">
         <form  method="POST" autoComplete="off">
             <input type="text" name="name" id="userName" placeholder="Username" onChange={ChangeInp} value={credential.name} required />
             <input type="email" name="gmail" id="userGmail" placeholder="Gmail" onChange={ChangeInp} value={credential.gmail} required />
             <input type="text" name="course" id="userCourse" placeholder="Enter Your Course" onChange={ChangeInp} value={credential.course} required />
             <textarea name="message" id="userMessage" cols="50" rows="10" placeholder="Enter Your Message About Course" onChange={ChangeInp} value={credential.message}></textarea>
             <div className="data-info">
             <div className="alert alert-success fs-4 mt-3" role="alert">
                   Your Request has been reached successfully !!
            </div>
            <div className="alert alert-danger fs-4 mt-3" role="alert">
                Please fill the form correctly  !!
                </div>
             </div>
             <div>
                 <button id="submitBtn" onClick={postChange}>Submit</button>
             </div>
             </form>
         </div>
     </div>
        </>
    )
}
