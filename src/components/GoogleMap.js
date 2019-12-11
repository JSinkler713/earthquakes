import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

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
        zoom={8}
        initialCenter={{ lat: 45, lng: -120 }}
      >
      <Marker key={1} id={1} position={{
        lng: this.props.data[0].geometry.coordinates[0],  
        lat: this.props.data[0].geometry.coordinates[1]  
      }} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapContainer);
