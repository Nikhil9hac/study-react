import React from 'react';
import studyData from "../Data.js";
import { changeDoc } from './Course.jsx';

export const Techno = () => {
    let findCourse=studyData.filter((val)=>{
        return val.name==='technolthlon';
    })

    const material=findCourse[0].material;
    const register=findCourse[0].registration;
    console.log(register);
    const offline=register["offline"];
    const online=register["online"];
    return (
        <>
        <div className="olymiad">
            <div className="olymiad-image text-center"><img src={findCourse[0].imgSrc} alt=""/></div>
            <div className="olymiad-option text-center">
                <button className="olymiad-inform"onClick={changeDoc}><i className="fas fa-info"
                        style={{color:"grey"}}></i>
                    <p>Details</p>
                </button>
                <button className="olymiad-register"onClick={changeDoc}><i className="fas fa-registered" style={{color:"grey"}}></i>
                    <p>Register</p>
                </button>
                <button className="olymiad-question"onClick={changeDoc}><i className="fas fa-file" style={{color:"grey"}}></i>
                    <p >PYQS</p>
                </button></div>
        </div>
        <div className="olymaid-target" id="target" data-target="ntse" style={{color:"#fff"}}>
            <p className="text-center  zone"><u>Details</u></p>
            <div className="details">
                <p className="question">{findCourse[0].question1}</p>
                <p className="answer">{findCourse[0].answer1}</p>
                <p className="question">{findCourse[0].question2}</p>
                <p className="answer">{findCourse[0].answer2}</p>
                <ul className="material-widget">
                    {material.map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
                <p className="question">{findCourse[0].question3}</p>
                <p className="answer">{findCourse[0].answer3}</p>
            </div>
            <div className="pyqs" >
                <p className="text-center" style={{fontWeight:"600"}}>Download Study Material and boost your
                    preoparation 🚀</p>

                    <a className="fs-4 mt-4" href="https://technothlon.techniche.org.in/downloads/prevpapers">Download Previous Year Question Paper</a>
                
            </div>
            </div>
            <div className="registration" style={{padding:"27px",color:"#fff"}}>
                <ul className="register-widget">
                    {Object.keys(register).includes('offline')?<p className="fs-2 m-3 text-info" style={{letterSpacing:'1.5px'}}>Offline</p>:null}
                   {Object.keys(register).includes('offline')?
                   offline.map((val)=><li>{val}</li>):null
                   }
                </ul> 
                <ul className="register-widget">
                    {Object.keys(register).includes('online')?
                    <p className="fs-2 m-3 text-info" style={{letterSpacing:'1.5px'}}>Online</p>:null}
                   {Object.keys(register).includes('online')?
                   online.map((val)=><li>{val}</li>):null
                   }
                </ul> 
         </div>

        </>
    )
}
