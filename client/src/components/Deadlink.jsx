import React,{useState} from 'react';
// import {ChangeInp} from "./Request-Course.jsx";

export const Deadlink = () => {
    const [credential,setCredential]=useState({
        name:"",
        gmail:"",
        course:""
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
    const postChange=async (event)=>{
        event.preventDefault();
        const {name,gmail,course}=credential;
        const res=await fetch("/renewlink",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,gmail,course
            })
        });
        
        const dataSuccess=document.querySelector('.alert-success')
        const dataUnsuccess=document.querySelector('.alert-danger')
        const data=await res.json();
        if (data.error==="invalid credential"||!data ) {
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
    return (
        <>
           <div className="request-container text-center">
         <div className="top ">
             <img src="https://i.ibb.co/MPbvX2V/sign-in.png" alt="" />
         </div>
                 <div className="alert-zone text-center"></div>
         <div className="input-container">
         <form action="/deadlink" method="post" autoComplete="off">
             <input type="text" name="name" id="userName" placeholder="Username" onChange={ChangeInp} value={credential.name} required />
             <input type="email" name="gmail" id="userGmail" placeholder="Gmail" onChange={ChangeInp} value={credential.gmail} required />
             <input type="text" name="course" id="userCourse" placeholder="Enter Your Dead Course Link" value={credential.course} onChange={ChangeInp} required />
             <div className="data-info">
             <div className="alert alert-success fs-3" role="alert">
                   Your Request has been reached successfully
            </div>
            <div className="alert alert-danger fs-3" role="alert">
                Please fill the form correctly  
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
