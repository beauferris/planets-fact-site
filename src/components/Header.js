import './Header.css';
import React from 'react';

function Header(props) {

    return (
        <header>
            <button className="home">THE PLANETS</button>
            <div className="buttonh">
                <button onClick={props.onClick} value="Mercury">MERCURY</button>
                <button onClick={props.onClick} value="Venus">VENUS</button>
                <button onClick={props.onClick} value="Earth">EARTH</button>
                <button onClick={props.onClick} value="Mars">MARS</button>
                <button onClick={props.onClick} value="Jupiter">JUPITER</button>
                <button onClick={props.onClick} value="Saturn">SATURN</button>
                <button onClick={props.onClick} value="Uranus">URANUS</button>
                <button onClick={props.onClick} value="Neptune">NEPTUNE</button>
            </div>

        </header>
    )
}

export default Header;