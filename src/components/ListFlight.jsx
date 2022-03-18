import React from "react";

import FlightIcon from '@mui/icons-material/Flight';

const Lists = ({ item, children }) => (
  <div className="Item card" style={{ margin: "50px", width: "70%" }}>
    <div className="Item-left" style={{ float: "left" }}>
      <h5>Rs. {item.Price}</h5>
      <div>{item.FlightNo}</div>
      <div className="Item-price">
        {item.Origin} --{'>'} {item.Destination}{" "}
      </div>
      <div className="Item-description">Depart: {item.DepartureTime}</div>
      <div className="Item-description">Arrive: {item.ArrivalTime}</div>
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
