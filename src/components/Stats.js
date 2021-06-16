import './Stats.css';

function Stats(props) {
  return (
    <div className="stats">
      <div>
        <span className="data_title"> Rotation Time</span><br></br>
        <span className="main-info">{props.rotation}</span>
      </div>

      <div>
        <span className="data_title">Revolution Time</span><br></br>
        <span className="main-info">{props.revolution}</span>
      </div>

      <div>
        <span className="data_title">Radius</span><br></br>
        <span className="main-info">{props.radius}</span>
      </div>

      <div>
        <span className="data_title">Average Temp.</span><br></br>
        <span className="main-info">{props.temperature}</span>
      </div>

   
    </div>
  )
}

export default Stats;