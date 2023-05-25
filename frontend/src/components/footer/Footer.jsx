import React from "react"
//import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { Input, InputLabel, Button } from '@mui/material';
import Stack from '@mui/material/Stack';

import "./footer.css"

const Footer = () => {
  return (
    
    <>
 
      <div className='legal  '>
        <div className='container flexSB'>
        </div>
   
        <Stack direction="row" spacing={1} justifyContent="space-between" > 
        <form style={{ width: "40%" }}>
         <center><h3>Санал хүсэлт</h3></center> 
        
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Нэр</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">И-мэйл</InputLabel>
            <Input id="email" type="email" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Бичих хэсэг</InputLabel>
            <Input id="email" multiline rows={5} />
          </FormControl>

          <Button variant="contained" color="primary" size="medium">
            Илгээх
          </Button>       
        </form>
       <ul>
       <h3>Холбоо барих</h3><br></br>
     
       <img src="./img/l.png"   alt="алдаа" width="40" height="40px"></img>  Хан - Уул дүүрэг 3-р хороо АВТОТЭЭВРИЙН ҮНДЭСНИЙ ТӨВ
       <br></br>
<br></br>
 <img src="./img/e.png"   alt="алдаа" width="40" height="40px"></img> info@transdep.mn
 <br></br>
 <br></br>
 <img src="./img/p.png"  alt="алдаа" width="40" height="40px"></img> 1900-1234
 <br></br>
 <br></br> <br></br>
<a href="https://www.youtube.com/@user-se8ci8ro9c"><i class="fa fa-facebook" aria-hidden="true"></i> social facebook</a> 
<br></br>
<a href="https://twitter.com/atutuv"><i class="fa fa-twitter" aria-hidden="true"></i> social twitter</a> 
<br></br>
<a href="https://www.youtube.com/watch?v=-ByLmRMKT-M"><i class="fa fa-youtube" aria-hidden="true"></i> social youtube channel</a> 
</ul>
</Stack>
       <br></br> 
       <center><p>АВТОТЭЭВРИЙН ҮНДЭСНИЙ ТӨВ © МЭДЭЭЛЛИЙН ТЕХНОЛОГИЙН ХЭЛТЭС</p></center> 
      </div>
     
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 0,
          padding: 0
        }}
      >   
      </div>    
    </>
    
  )
}

export default Footer
