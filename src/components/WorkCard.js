import "./WorkCardStyle.css"
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="images" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                  <p>{props.text}</p>
                  <div className="pro-btn">
                    <NavLink to={props.view} className="btn-img">View</NavLink>
                    <NavLink to="url.com" className="btn-img">Source</NavLink>
                  </div>
                </div>
            </div>
  )
}

export default WorkCard
