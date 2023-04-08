import Map from "mapmyindia-react";
import React from "react";
class MapComp extends React.Component {
   render () {
    return (
       <Map
         markers={[
             {
                 position: [18.5314, 73.845],
                 draggable: true,
                 title: "Marker title",
                 onClick: e => {
                     console.log("clicked ");
                 },
                 onDragend: e => {
                     console.log("dragged");
                 }
             }
         ]}
         />
    )
  }
}
export default MapComp;
