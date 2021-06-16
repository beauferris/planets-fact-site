import './App.css';
import React, { useState } from 'react';
import Information from './components/Information';
import Stats from './components/Stats';
import Header from './components/Header';
import data from './data.json';

function App() {
  const [state, setState] = useState({
    name: 'Earth',
    content: `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`,
    rotation: "0.99 Days",
    revolution: "365.26 Days",
    radius: "6,371 KM",
    temperature: "16°c",
    img:"./assets/planet-earth.svg",
    display: 'none',
    geology:"./assets/geology-earth.png"
  });

  const changePlanet = (event) => {
    let planet = event.target.value;

    console.log(planet);

    data.forEach(d => {
      if (d.name === planet) {
        setState({
          name: d.name,
          content: d.overview.content,
          rotation: d.rotation,
          revolution: d.revolution,
          radius: d.radius,
          temperature: d.temperature,
          img:d.images.planet,
          geology:d.images.geology
        })
      }
    });
  }
  const clicked = (event) => {
    let summary_type = event.target.value;
    let img_type = event.target.value;
    let display = 'none';
    if(img_type==="overview"){
      img_type = "planet";
    }else if(img_type==="structure"){
      img_type = "internal";
    }else if(img_type==="geology"){
      img_type = "planet";
      display = "block";

    }

    data.forEach(d => {
      if (d.name === state.name) {
        setState({
          ...state,
          content: d[summary_type].content,
          img: d.images[img_type],
          display: display,
          active: true
        });
      }
    })
  }

  return (
    <div className="main">
      <Header onClick={changePlanet}></Header>

      <Information
        display = {state.display}
        img_zoom = {state.geology}
        img = {state.img}
        onClick={clicked}
        name={state.name}
        summary={state.content}></Information>

      <Stats revolution={state.revolution}
        rotation={state.rotation}
        radius={state.radius}
        temperature={state.temperature}></Stats>
    </div>
  );
}

export default App;
