import React from "react";
import { Route,Switch } from "react-router";
import { Header,StudyMaterial } from './components/App';
import { Techno } from "./components/Techno";
import { Foundation } from "./components/Foundation";
import Nav from "./components/Nav";
import { Course } from "./components/Course";
import { Footer } from "./components/App";
import { RequestCourse } from "./components/Request-Course";
import { Deadlink } from "./components/Deadlink";

export const Router=()=>{
    return(
       <>
        <Switch>
            <Route exact path="/" component={()=>{
                return(
                    <>
                <Header/>
                <StudyMaterial/>
                    <Footer/>
                </>
                )
    }}/>
            <Route exact path="/material" component={()=>{
   
                return(
                    <>
                    <Nav/>
                    <StudyMaterial/>
                    </>
                )
            }}/>
            <Route exact path="/material/foundation" component={()=>{
                return(
                    <>
                    <Nav/>
                    <Foundation/>
                    </>
                )
            }} />
                <Route exact path="/material/technothlon" component={()=>{
                    return(
                        <>
                        <Nav/>
                        <Techno/>
                        </>
                    )
                }}/>
            <Route exact path="/material/:fname" component={()=>{
                
                return(
                    <>
                    <Nav/>
                    <Course/>
                    </>
                )
            }}/>
            <Route exact path="/request-course"component={()=>{
                return(
                    <>
                    <Nav/>
                    <RequestCourse/>
                    </>
                )
            }}/>
            <Route exact path="/deadlink" component={()=>{
                return(
                    <>
                <Nav/>
                <Deadlink/>
                </>
                )
            }}/>
        </Switch>
       </>
    )
}