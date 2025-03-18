import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Courses from "../Courses/Courses";

const LayoutCourses=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Courses className="courses" />
          
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutCourses