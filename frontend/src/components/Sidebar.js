import React from 'react'
import Box from '@mui/material/Box';


const Sidebar = () => {
  return (
    <Box 
    bgcolor="white" 
    textcolor="blue"
    flex={1}
     p={1} 
    sx={{ display: { xs: "none", sm: "block" } }}
    style={{
      display: "flex",
      justifyContent: "space-between",
      margin:  0,
      padding: 10,
    }}
    
    >   
    
<div class="container">
    <div class="row">
    <div class="col-md-3">
      <div class="card-counter primary">
        <i class="fa fa-home"></i>
        <span class="count-numbers">12</span>
        <span class="count-name">ДОТООДЫН ЧИГЛЭЛ</span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card-counter danger">
        <i class="fa fa-globe"></i>
        <span class="count-numbers">599</span>
        <span class="count-name">УЛС ХООРОНДЫН ЧИГЛЭЛ</span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card-counter success">
        <i class="fa fa-car"></i>
        <span class="count-numbers">6875</span>
        <span class="count-name">ТЭЭВРИЙН ХЭРЭГСЭЛ</span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card-counter info">
        <i class="fa fa-users"></i>
        <span class="count-numbers">35</span>
        <span class="count-name">ЗОРЧИГЧ</span>
      </div>
    </div>
  </div>
</div>  

    </Box>
  );
};

export default Sidebar
