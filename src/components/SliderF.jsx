import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

import React from 'react';
const SliderF = (props) => {
  const [value, setValue] = React.useState([0, 15000]);

  const handleChange = (event, newValue) => {
   props.sentValue(newValue);
    setValue(newValue);
    // var new = newValue;
    // props.sentValue(value);
  };

  // console.log(value[0])

  return (
    <Box sx={{paddingLeft: "25px", width: "90%" }}>

      <Slider max={15000} valueLabelDisplay="auto" value={value} onChange={handleChange} />
      Price(max 15000)
    </Box>
  )
}

export default SliderF;
