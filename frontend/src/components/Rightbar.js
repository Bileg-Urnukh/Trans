import React from 'react'
import Box from '@mui/material/Box';
//import FormControl from '@mui/material/FormControl';
//import { Input, InputLabel, Button } from '@mui/material';




const Rightbar = () => {
  return (
    <Box   bgcolor="white"  flex={2} p={2} 
    
    sx={{ display: { xs: "none", sm: "block" } }}>

     <div style={{ marginTop: 0, padding: 0 }}>
    <div style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/8.jpg'})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  fontSize: "5rem",
  height: "250px"   
  
}}>    

</div>
        </div>
  <section>

 
  <a href="https://www.transdep.mn/post.php?p=45" class="button"><span>АЧАА ТЭЭВРИЙН ЗӨВШӨӨРӨЛ </span></a>
  <a href="https://www.transdep.mn/post.php?p=52" class="button"><span>ЖУУЛЧИН ТЭЭВРИЙН ЗӨВШӨӨРӨЛ </span></a>
  <a href="https://www.transdep.mn/post.php?p=53" class="button"><span>ЗОРЧИГЧ ТЭЭВРИЙН ЗӨВШӨӨРӨЛ </span></a>

  </section>
  
    </Box>
      
  )
}

export default Rightbar
