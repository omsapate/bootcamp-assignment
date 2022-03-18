import "./App.css";

import items from "./data/data";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FlightIcon from '@mui/icons-material/Flight';


import PageList from "./components/PageList";
import SliderF from "./components/SliderF";

const airports = [
  "Pune (PNQ)",
  "Delhi (DEL)",
  "Bengaluru (BLR)",
  "Mumbai (BOM)",
];

const isDate = (date) => {
  return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
};

const ErrorLabel = (props) => {
  return <label style={{ color: "red" }}>{props.message}</label>;
};

function App() {
  let origin, destination;
  const [isReturn, setFlightType] = useState(false);
  const [status, setFormValid] = useState({ isValid: false });
  let invalidFields = {};

  const [originCity, setOriginCity] = React.useState("");
  const [destCity, setDestCity] = React.useState("");
  const [deptDate, setDeptDate] = React.useState("");
  const [retDate, setretDate] = React.useState("");
  const [passengerCount, setPassagerCount] = React.useState(1);

  const [rows, setRows] = React.useState(items);
  const [sliderState, setSliderState] = React.useState("");

  const handleChangeOriginCity = (e) => setOriginCity(e.target.value);
  const handleChangeDestCity = (e) => setDestCity(e.target.value);
  const handleChangeDeptDate = (e) => setDeptDate(e.target.value);
  const handleChangeRetDate = (e) => setretDate(e.target.value);
  const handlePassengerCount = (e) => setPassagerCount(e.target.value);

  const handleChangeSlider = (e) => console.log(sliderState);

  console.log(rows, originCity);



  const handleSubmit = (event) => {
    alert("Results filtered");
    event.preventDefault();
  };

  useEffect(() => {
    setRows(items);
  }, [items]);

  //
  useEffect(() => {
    let filterData = items;
    console.log(filterData[9].price);
    //
    if (originCity?.length > 0) {
      const filteredRows = filterData.filter((row) => {
        return row.originCity?.toLowerCase().includes(originCity.toLowerCase());
      });
      setRows(filteredRows);
    }
    if (destCity?.length > 0) {
      const filteredRows = filterData.filter((row) => {
        return row.destCity?.toLowerCase().includes(destCity.toLowerCase());
      });
      setRows(filteredRows);
    }
    if (originCity?.length == 0 && destCity?.length == 0) {
      setRows(items);
    }
    if (sliderState >= 0) {
      // filterData = filterData.filter((item) => {return item.price<=parseInt(sliderState[1]) })
      filterData = filterData.filter((item) => {
        return item.price <= 6000;
      });
    }

    // setRows(filterData)
    console.log(filterData);
    console.log(sliderState[1]);
  }, [originCity, sliderState]);

  console.log(sliderState);
  // console.log(rows)

  return (
    <div className="App">
      <div className="App-header">
        
        <h2><FlightIcon /> Flight Search App</h2>
        
      </div>

      <section className="container-fluid" style={{ padding: "30px 20px" }}>
        <aside
          className="Search-section"
          style={{ float: "left", textAlign: "center", width: "30%" }}
        >
          <Card>
            <Card.Body>
              <Form
                className="search-form-container"
                style={{ textAlign: "left" , padding: "15px"}}
                onSubmit={handleSubmit}
              >
                <Form.Group >
                  <Form.Check
                    inline
                    checked={!isReturn}
                    type="radio"
                    label="One way"
                    name="flightType"
                    id="formHorizontalRadios1"
                    onChange={(e) => setFlightType(false)}
                  />
                  <Form.Check
                    inline
                    checked={isReturn}
                    type="radio"
                    label="Return"
                    name="flightType"
                    id="formHorizontalRadios2"
                    onChange={(e) => setFlightType(true)}
                  />
                </Form.Group>

                <Form.Group controlId="formGridOrigin" style={{ padding: "5px 0"}}>
                <Form.Control
                    label="origin"
                    options={airports}
                    placeholder="Enter Origin"
                    value={originCity}
                    onChange={handleChangeOriginCity}
                  />
                  {status.origin && (
                    <ErrorLabel message="Please enter a valid airport"></ErrorLabel>
                  )}
                </Form.Group>

                <Form.Group controlId="formGridDestination" style={{ padding: "5px 0"}}>
                <Form.Control
                    label="destination"
                    options={airports}
                    placeholder="Enter Destination"
                    value={destCity}
                    onChange={handleChangeDestCity}
                  />
                  {status.destination && (
                    <ErrorLabel message="Please enter a valid airport but not same as origin"></ErrorLabel>
                  )}
                </Form.Group>

                <Form.Group controlId="formGridDateOfDep" style={{ padding: "5px 0"}}>
                  <Form.Label>Departure Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="dateOfDep"
                    placeholder="yyyy-mm-dd"
                    required
                    value={deptDate}
                    onChange={handleChangeDeptDate}
                  />
                  {status.departureDate && (
                    <ErrorLabel message="Please enter a valid departure date"></ErrorLabel>
                  )}
                </Form.Group>

                {isReturn && (
                  <Form.Group controlId="formGridDateOfReturn" style={{ padding: "5px 0"}}>
                    <Form.Label>Return Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="dateOfReturn"
                      placeholder="yyyy-mm-dd"
                      required
                      value={retDate}
                      onChange={handleChangeRetDate}
                    />
                    {status.returnDate && (
                      <ErrorLabel message="Please enter a valid return date"></ErrorLabel>
                    )}
                  </Form.Group>
                )}

                <Form.Group controlId="exampleForm.ControlSelect1" style={{ padding: "10px 0"}}>
                  <Form.Control
                    as="select"
                    name="numOfPassengers"
                    placeholder="Number of Passengers"
                    value={passengerCount}
                    onChange={handlePassengerCount}
                  >
                    <option>Number of Passengers</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <div className="card" style={{ margin: "20px 0" }}>
            <div className="label">
              <label>
                <h5>Filter Flight Price Range</h5>
              </label>
              <SliderF
                // sentValue={(val) => console.log(val)}
                sentValue={(val) => setSliderState(val)}
                onChange={handleChangeSlider}
              />
            </div>
          </div>
        </aside>

        <section
          className="Results-section"
          style={{ float: "right", margin: "50px 0px", minWidth: "70%" }}
        >
          <section className="flight-search-info">
            <div className="text-center">
              <h3>
                {originCity} to {destCity}
              </h3>
              <p>
                {rows.length} flights found, {deptDate}
              </p>
            </div>
            <PageList style={{ margin: "10px", width: "100%" }} items={rows} />
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;
