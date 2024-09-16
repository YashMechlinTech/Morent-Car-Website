import React, { useState } from 'react';
import { Rating, Box } from '@mui/material';

function RatingComponent() {
  const [value, setValue] = useState(2); // Default value setting  to 2 i will make it  fixable later with the backend. 
  return ( 
   
      <Rating sx={{marginLeft:'-1.5vh',marginTop:'-2vh', fontSize:'3.5vh'}}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    
  );
}

export default RatingComponent;
