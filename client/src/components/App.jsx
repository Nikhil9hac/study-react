// this is the home page for Studyup website
import React from 'react';
import Nav from "./Nav.jsx";
import { Material } from './Material';
import studyData from "../Data.js";
import "../sass/header.css";
import "../sass/study-material.css";
import "../sass/footer.css";
import { NavLink} from 'react-router-dom';
export const Header = () => {
    return (
        <>
      <header id="header">
      <Nav/>
  <div className="container-fluid2 mt-5" data-aos="zoom-in" data-aos-duration="1500">
  <div className="leftside text-center">
      <p id="header-word" className="leftside-para1">Study-high</p>
      <p id="header-word" className="leftside-para2 text-light">one platform for all Study Material</p>
      <p id="header-word" className="leftside-para3 text-capitalize text-light">get free notes book solution previous year question and many more</p>
      <div className="btn-group">
        <button id="started" className="header-btn"><a href="#study-material" className="text-decoration-none text-dark">Get Started</a></button>
        <button id="telegran"className="header-btn">
           <a href="https://t.me/joinchat/AM0lqnRrUhc1YjFl" className="text-decoration-none text-dark" >Instant Pdf</a>
          <i className="fab fa-telegram"></i></button></div>
  </div>
  <div className="rightside">
    <img src="https://i.ibb.co/6NjKpMg/rightside.png" alt="img"/></div>
</div>
      </header>
        </>
    )
}

export const Footer = () => {
  return (
      <>
              <div className="study-animation">
          <div className="study-animation-image text-center"><img src="https://i.ibb.co/0rcL5xq/logo.png" alt=""/></div>
          <p id="hub-animation" className="text-center text-light">Study-high</p>
      </div>
      <div className="quick-link">
          <div id="widget1" className="widget">
              <p className="text-center">reference book</p>
              <ul className="widgetlink-2">
                  <li><NavLink to="/material/foundation">Rs aggrawal class 10</NavLink></li>
                  <li><NavLink to="material/foundation">Rd sharma book</NavLink></li>
                  <li><NavLink to="material/foundation">Brain Mapping Academy</NavLink></li>
                  <li><NavLink to="/material/foundation">Pearson IIT Foundation</NavLink></li>
                  <li><NavLink to="/material/foundation">S Chand Book</NavLink></li>
              </ul>
          </div>
          <div id="widget2" className="widget">
              <p className="text-center">competitive exam</p>
              <ul className="widgetlink-3">
                  <li><NavLink to="/material/imo">sof math olymiad</NavLink></li>
                  <li><NavLink to="/material/nso">SOF science olymiad</NavLink></li>
                  <li><NavLink to="/material/ijso">NSEJS IJSO</NavLink></li>
                  <li><NavLink to="/material/ntse">ntse stage 1 and 2</NavLink></li>
                  <li><NavLink to="material/technothlon">technothlon</NavLink></li>
              </ul>
          </div>
      </div>
      <p className="disclaimer text-center">copyright ©2021<span>Study-high</span>all right reserved</p>
      </>
  )
}

export const StudyMaterial=()=>{
    const searcherChanger=()=>{
        // searcher vanilla javascript
        let hideList=0// no of card which display is none
        // targeting all card element
        const cardArray=document.querySelectorAll('.card');
        // targeting search bar
        const searcherVal=document.getElementById('searcherBar').value;
        // writing code for search bar to display card
        cardArray.forEach((element)=>{
        if (searcherVal==="") {
         element.style.display="block";
        }
        else if(searcherVal===element.getAttribute('data-value')){
         element.style.display="block";
        }
        else{
         element.style.display="none"
        }
        // writing the code to increase hidelist for none style element to style hidden para
        let cardStyle=window.getComputedStyle(element).display;
        if(cardStyle==="block"){
         hideList=0;
        }
        else{
         hideList=hideList+1
        }
        });
        // writing the code to display hidePara
        const hidePara=document.querySelector(".hide");
        if(hideList===7){
         hidePara.style.display="block";
        }
        else{
         hidePara.style.display="none";
        }
    }
    return(
        <>
       <section id="study-material">
       <div className="separator text-center" id="separator1">Study Material</div>
    <div className="search text-center mt-4" id="containerSearcher">
      <input className="form-control me-2" type="search" onChange={searcherChanger} placeholder="Search"  aria-label="Search" id="searcherBar"/>
      </div>
        <main className="text-center cardContainer">
        <div className="hide text-light">
                <p className="text-center hidepara">Nothing to See here</p>
            </div>
{studyData.map((val)=>{
  return(
    <Material key={val.name} title={val.name} imgsrc={val.imgSrc} des="get free iit foundation,prmo book nsejs book and many more" links={val.links}/>
  )
})}
</main>
       </section>
</>
    )
}



               