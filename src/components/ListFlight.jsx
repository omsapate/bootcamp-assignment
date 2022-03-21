import React from "react";

import FlightIcon from '@mui/icons-material/Flight';
import { margin } from "@mui/system";

const Lists = ({ item, children }) => (
  <div className="Item card" style={{ margin: "10px", width: "90%" }}>
    <div className="Item-left" style={{ float: "left" }}>
    <div className="Item-price">
        {/* <p style={{ marginLeft: "30%", fontSize:"30px"}}>{item.Origin} --{'>'} {item.Destination}{" "}</p> */}
        <table style={{width: "100%" }}>
          <tr >
            <th > {item.Origin} </th>
            <th style={{textAlign:"right"}}>{item.Destination}</th>
          </tr>
          <tr>
            <td>Depart: {item.DepartureTime}</td>
            <td style={{textAlign:"right"}}>Arrive: {item.ArrivalTime}</td>
          </tr>
          
        </table>
        {/* <div className="Item-description">Depart: {item.DepartureTime} Arrive: {item.ArrivalTime}</div>
        <div className="Item-description">Arrive: {item.ArrivalTime}</div> */}
        
      </div >
      <div style={{textAlign:"center", padding:"10px"}}>
          <h5 >Rs. {item.Price}</h5>
          <div>{item.FlightNo}</div>
          <div>{item.DepartureDate}</div>
      </div>
      
   
      
      {/* <div className="Item-description">Depart: {item.DepartureTime}</div>
      <div className="Item-description">Arrive: {item.ArrivalTime}</div> */}
    </div>

    <div className="Item-right" style={{ float: "right" }}>
      <FlightIcon />
      <button
        className="Item-book btn btn-secondary"
        onClick={item.onClickHandler}
        type="submit"
       
      >
        Book
      </button>
      {children}
    </div>
  </div>
);

Lists.onClickHandler = (event) => {
  alert("Flight booked successfully :)");
  event.preventDefault();
};



export default Lists;
