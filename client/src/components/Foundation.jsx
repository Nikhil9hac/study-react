import React from 'react';
import studyData from "../Data.js"

export const Foundation = () => {
    let foundation=studyData.filter((val)=>{
        return val.name==="foundation";
    })
    const material_link=foundation[0].material_link;
    return (
        <>
        <div className="foundation-img mt-3 text-center">
            <img src={foundation[0].imgSrc} alt="img"/>
            <p className="mt-4 fs-3" style={{color:"#fff"}}>Foundation Book</p>
        </div>
        <div className="books">
        <ul className="material-widget mt-5">
        {Object.keys(material_link).map((val)=>{
            return(
                <li className="material-link-link" key={material_link[val]}><a
                href={val}
                target="_blank" rel="noreferrer">{material_link[val]}</a></li>
            )
        })}
        </ul>
        </div>
        </>
    )
}
