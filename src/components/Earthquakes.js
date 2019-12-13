import React from "react";

let Earthquakes = (props)=> {
  let currentSeconds = new Date().getTime()  
  return(
      <ul>
          {
          props.data.map((item, i) => {
            return <li key={i}>{item.properties.title}  - {Math.floor((currentSeconds - item.properties.time)/(60*60*1000))} hrs and {Math.floor(Math.floor((currentSeconds - item.properties.time)%(60*60*1000))/(60*1000))} minutes ago</li>
          })
        }
      </ul>)
    
}

export default Earthquakes 
