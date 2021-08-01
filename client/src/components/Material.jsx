import React from 'react';
import { NavLink } from 'react-router-dom';

export const Material = (props) => {
    return (
       <>
        <div className="card " data-value={props.title} data-value2={props.title} id="image1" data-aos="fade-right"
                data-aos-duration="1200">
                    <div className="material-image-container">
                    <img src={props.imgsrc} className="card-img-top" alt={props.title}/>
                    </div>
                <div className="card-body">
                    <h5 className="card-title text-capitalize mb-5">{props.title}</h5>
                    <p className="card-text text-capitalize">{props.des}</p>
                   <button className="btn btn-primary study-material-button text-capitalize mt-3"><NavLink to={props.links} style={{ color:"#fff",textDecoration:"none"}}>click here</NavLink></button>
                </div>
            </div>
       </>
    )
}
