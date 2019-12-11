import React from "react";

let Earthquakes = (props)=> {
    return(
      <ul>
          {
          props.data.map((item, i) => {
            return <li key={i}>{item.properties.title}  - {item.properties.time}</li>
         })
        }
      </ul>)
    
}

export default Earthquakes 
