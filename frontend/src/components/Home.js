import React from 'react'
import Stack from '@mui/material/Stack';

function Home() {
  return  (     
    <div style={{backgroundColor:"#fff", padding: "50px", borderRadius:"10px" }}>
          <b><h3>МЭДЭЭ МЭДЭЭЛЭЛ</h3></b>      
	<div style={{backgroundColor:"white", display:"flex", justifyContent:"space-between", padding: "30px 0px 20px"}}>
    <div class="col-md-4">
        <div class="card rounded">
            <div class="card-image">
                <span class="card-notify-badge"><img src="./img/atut.jpg"   alt="алдаа" width="90" height="30px"></img></span>
                <img src="./img/5.jpg"   alt="алдаа" width="100%" height="200px"></img>
            </div>
            <div class="card-image-overlay m-auto">
            <span style={{backgroundColor:"yellow", padding:"8px", borderRadius:"10px"}}>2023-05-23</span>
            </div>
            <div class="card-body text-center">
                <div class="ad-title m-auto">
                    <h5>Тээврийн хэрэгслийн шинэчилсэн бүртгэл</h5>
                    <p>  Тээврийн хэрэгслийн өмчлөгч та улсын хэмжээнд зохион байгуулж байгаа 
        Тээврийн хэрэгслийн шинэчилсэн бүртгэл, 
        үзлэг тооллогод идэвхтэй хамрагдахыг уриалж байна..</p>
                </div>
                <a class="ad-btn" href="#">ЦААШ УНШИХ</a>
            </div>
        </div>
    </div>
    
    <div class="col-md-4">
        <div class="card rounded">
            <div class="card-image">
                <span class="card-notify-badge"><img src="./img/atut.jpg"   alt="алдаа" width="90" height="30px"></img></span>
                
                <img src="./img/banner2.png"   alt="алдаа" width="100%" height="200px"></img>
            </div>
            <div class="card-image-overlay m-auto">
            <span style={{backgroundColor:"yellow", padding:"8px", borderRadius:"10px"}}>2023-05-23</span>
               
            </div>
            <div class="card-body text-center">
                <div class="ad-title m-auto">
                    <h5>Тээврийн хэрэгслийн шинэчилсэн бүртгэл</h5>
                    <p>  Тээврийн хэрэгслийн өмчлөгч та улсын хэмжээнд зохион байгуулж байгаа 
                         Тээврийн хэрэгслийн шинэчилсэн бүртгэл, 
                         үзлэг тооллогод идэвхтэй хамрагдахыг уриалж байна..</p>
                </div>
                <a class="ad-btn" href="#">ЦААШ УНШИХ</a>
            </div>
        </div>
    </div>

    <div class="col-md-4">
        <div class="card rounded">
            <div class="card-image">
                <span class="card-notify-badge"><img src="./img/atut.jpg"   alt="алдаа" width="90" height="30px"></img></span>            
                <img src="./img/8.jpg"   alt="Card image cap" width="100%" height="200px"></img>
            </div>
            <div class="card-image-overlay m-auto">
            <span style={{backgroundColor:"yellow", padding:"8px", margin:"0", borderRadius:"10px"}}>2023-05-23</span>
               
            </div>
            <div class="card-body text-center">
                <div class="ad-title m-auto">
                    <h5>Тээврийн хэрэгслийн шинэчилсэн бүртгэл</h5>
                    <p>  Тээврийн хэрэгслийн өмчлөгч та улсын хэмжээнд зохион байгуулж байгаа 
        Тээврийн хэрэгслийн шинэчилсэн бүртгэл, 
        үзлэг тооллогод идэвхтэй хамрагдахыг уриалж байна..</p>
                </div>
                <a class="ad-btn" href="#">ЦААШ УНШИХ</a>
            </div>
        </div>
    </div>

</div>

  <Stack direction="row" spacing={1} justifyContent="center" margin={3}> 

<img src="./img/img-2208.png"   alt="алдаа" width="330" height="300px"></img>  
   <p> <center><h4><b>АЛСЫН ХАРАА</b></h4> Автотээврийн цогц үйлчилгээ үзүүлэгч дэлхийн жишигт хүрсэн байгууллага болно. </center>
<b>ЭРХЭМ ЗОРИЛГО:</b> Автотээврийн талаар төрөөс баримтлах бодлого, зорилтын хүрээнд хэрэглэгчийн эрэлт, хэрэгцээнд нийцсэн, эдийн засгийн үр ашигтай, аюулгүй, ая тухтай тээврийн цогц үйлчилгээг үзүүлэхэд оршино.<br></br>
<b>ЗОРИЛТУУД:</b>
<br></br><b>1.</b> Тээврийн ухаалаг системд суурилсан, хямд, хүртээмжтэй, тээврийн бусад төрөлтэй уялдсан тээврийн үйлчилгээг тогтвортой үзүүлж, нэгдсэн удирдлага зохицуулалтаар хангана.<br></br>
<b>2.</b> Тээврийн хэрэгслийн тээвэрлэлтийн болон техник ашиглалтын шаардлагыг хангасан байдалд тавих хяналтыг дэлхий нийтээр мөрдөж байгаа стандарт, техникийн зохицуулалт, дэвшилтэт технологид нийцүүлж зам тээврийн осол, түүнээс учирч буй хохирлыг бууруулна.<br></br>
<b>3.</b> Хамтын ажиллагааг өргөжүүлж, судалгаа шинжилгээнд үндэслэсэн, эдийн засаг, нийгмийн эрэлтэд нийцсэн, чанартай, шуурхай, аюулгүй, мэргэжлийн өндөр түвшний үйлчилгээг үзүүлэх тээврийн дэд бүтцийг хөгжүүлнэ.<br></br>
<b>4.</b> Мэргэжил, ур чадвар, зөв менежмент хосолсон өрсөлдөх чадвар бүхий хүний нөөцийг бүрдүүлнэ.
</p>

</Stack>

<Stack direction="row" spacing={1} >   

<ul>  <img src="./img/links.png"   alt="алдаа" width="30" height="20px"></img>
       <a href="https://eticket.transdep.mn/"> АВТОБУСНЫ ТАСАЛБАР ЗАХИАЛАХ</a> 
        <br></br>
        <img src="./img/links.png"   alt="алдаа" width="30" height="20px"></img>
     <a href="https://www.autobox.mn/"> АВТО ҮЙЛЧИЛГЭЭНИЙ АНГИЛАЛ ТОГТООЛГОХ</a> 
    <br></br>
    <img src="./img/links.png"   alt="алдаа" width="30" height="20px"></img>
    <a href="http://localhost:3000/login"> ТЭЭВРИЙН НЭГДСЭН СИСТЕМ</a> 
    <br></br>
    <img src="./img/links.png"   alt="алдаа" width="30" height="20px"></img>
    <a href="https://burtgel.transdep.mn/"> ТЭЭВРИЙН ХЭРЭГСЛИЙН ДУГААР ЗАХИАЛАХ</a>    
</ul>  
<ul>
    <img src="./img/links.png"   alt="алдаа" width="30" height="20px"></img>
    <a href="https://auction.transdep.mn/"> ДУГААРЫН ДУУДЛАГА ХУДАЛДАА</a> 
    <br></br>
    <img src="./img/links.png"   alt="алдаа" width="30" height="20px"></img>
    <a href="https://logistic.transdep.mn/+"> ДОТООДЫН АЧАА ТЭЭВЭР</a> 
    <br></br>
    <img src="./img/links.png"   alt="алдаа" width="30" height="20px"></img>
    <a href="https://www.transdep.mn/epay/"> БҮРТГЭЛИЙН ТӨЛБӨРИЙН ПРОГРАММ</a> </ul>
  </Stack>   
      </div>   
  )
}

export default Home