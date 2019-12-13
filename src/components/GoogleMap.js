import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import img from './icon.png'

class MapContainer extends Component {
  render() {
    const styles = {
      width: '35%',
      height: '100%'
    }
    
    return (
      <Map
        style={styles}
        google={this.props.google}
        zoom={2}
        initialCenter={{ lat: 40, lng: -110 }}
      >
        {
          this.props.data.map((quake, i) => {
            return <
              Marker
                title={quake.properties.title}
                key={i}
                icon={img}
                id={i}
                position={{
                  lng: quake.geometry.coordinates[0],  
                  lat: quake.geometry.coordinates[1]  
                }}
              />
          })
        }
      </Map>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapContainer);
