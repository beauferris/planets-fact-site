import React from 'react';
import './Info.css';

function Information(props) {
  
    return (
        <div className="middle">

        <div className="planet-img">
            <img src={(props.img)}></img>
            <img class="zoom" style={{display:props.display}} src ={(props.img_zoom)}></img>
        </div>

        <div className="info">
            <span className="title">{props.name}</span>
            <span className="summary">{props.summary}</span>
            <button onClick={props.onClick} value="overview" >01 Overview</button>
            <button onClick={props.onClick} value="structure">02 Internal Structure</button >
            <button onClick={props.onClick} value="geology">03 Surface Geology</button >
        </div>

        </div>
    )
}

export default Information;