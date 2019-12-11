import React, { Component } from 'react';
import Earthquakes from './components/Earthquakes.js'
import GoogleMap from './components/GoogleMap.js'


class App extends Component {
  state = {
    earthquakes: [],
  }


  componentDidMount() {
    fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson")
      .then(response => response.json())
      .then(data => {
        this.setState({earthquakes: data.features })
      })
      .catch(error => console.log(error))
  }
  

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here..
          <GoogleMap data={this.state.earthquakes}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          {
          this.state.earthquakes.length === 0
          ? "loading..."
          : <Earthquakes data={this.state.earthquakes} />
          }
        </div>
         
      </div>
    );
  }
}

export default App;
