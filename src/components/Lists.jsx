import React from "react";

import FlightIcon from '@mui/icons-material/Flight';

const Lists = ({ item, children }) => (
  <div className="Item card" style={{ margin: "50px", width: "70%" }}>
    <div className="Item-left" style={{ float: "left" }}>
      <h5>Rs. {item.price}</h5>
      <div>{item.flightNumber}</div>
      <div className="Item-price">
        {item.originCityCode} --> {item.destCityCode}{" "}
      </div>
      <div className="Item-description">Depart: {item.deptDateTime}</div>
      <div className="Item-description">Arrive: {item.retDateTime}</div>
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
