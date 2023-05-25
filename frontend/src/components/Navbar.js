import React from 'react'

function Navbar() {
  return (
     <div id="container">
      <div id="ribbon"></div>  
         <div id="logo">      
         </div>
         <div style={{backgroundColor:"yellow", padding: "50px", borderRadius:"60px", }} >
       
         <ul>
         <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#"> БИДНИЙ ТУХАЙ &nbsp;<i class="fa fa-caret-down"></i> </a>
         <div class="d1"> 
         <div id="up_arrow"></div>
          <ul>
        
               <li><a href="#">ТАНИЛЦУУЛГА</a></li>
               <li><a href="#">ЭРХЭМ ЗОРИЛГО</a></li>
               <li><a href="#">УДИРДЛАГЫН БАГ</a></li>
               <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#"> БҮТЦИЙН НЭГЖҮҮД &nbsp;<i class="fa fa-caret-down"></i> </a>
               <div class="d6">
               <div id="up_arrow"></div>
               <ul> 

               <li><a href="#">МОНГОЛ УЛСЫН ХУУЛЬ</a></li>
               <li><a href="#">ЗАСГИЙН ГАЗРЫН ТОГТООЛ</a></li>
               <li><a href="#">САЙДЫН ТУШААЛ</a></li>
               <li><a href="#">ЗАХИРЛЫН ТУШААЛ</a></li>
               <li><a href="#">ДҮРЭМ ЖУРАМ</a></li>
               <li><a href="#">СТАНДАРТ</a></li>
               <li><a href="#">ЗАХИРГААНЫ ХЭМ ХЭМЖЭЭНИЙ АКТУУД</a></li>
               <li><a href="#">ХУУЛЬ,ДҮРЭМ,ЖУРМЫН ЖАГСААЛТ</a></li>

             </ul>
             </div>
               </li>

               <li><a href="#">БҮТЦИЙН ЗОХИОН БАЙГУУЛАЛТ</a></li>
               <li><a href="#">ХОЛБАОО БАРИХ </a></li>
             
          </ul>
         </div>
         </li>
           <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#"> ХУУЛЬ ЭРХ ЗҮЙ &nbsp;<i class="fa fa-caret-down"></i> </a>
           <div class="d2">
               <div id="up_arrow"></div>
             <ul> 
           
               <li><a href="#">СУДАЛГАА ХӨГЖЛИЙН ЧАНАРЫН УДИРДЛАГЫН ТӨВ</a></li>
               <li><a href="#">ХЯНАЛТ ШИНЖИЛГЭЭ ДОТООД АУДИТЫН АЛБА</a></li>
               <li><a href="#">ЗАХИРГАА СУРГАЛТ ХҮНИЙ НӨӨЦИЙН ХЭЛТЭС</a></li>
               <li><a href="#">МЭДЭЭЛЛИЙН ТЕХНОЛОГЫН ХЭЛТЭС</a></li>
               <li><a href="#">САНХҮҮ ЭДИЙН ЗАСГИЙН ХЭЛТЭС</a></li>
               <li><a href="#">ТЭЭВРИЙН ХЭРЭГСЛИЙН БҮРТГЭЛИЙН ХЭЛТЭС</a></li>
               <li><a href="#">ТЕХНИКИЙН ХЯНАЛТЫН ХЭЛТЭС</a></li>
               <li><a href="#">ЗОРЧИГЧ ТЭЭВРИЙН ХЭЛТЭС</a></li>
               <li><a href="#">АЧАА ТЭЭВРИЙН ХЭЛТЭС</a></li>
               <li><a href="#">ХӨДӨЛГӨӨНИЙ УДИРДЛАГЫН ХЭЛТЭС</a></li>

             </ul>
             </div>
             </li>
          
           
        <li class="dropdown" onmouseover="hover(this);" onmouseout="out(this);"><a href="#">БАТАЛГААЖУУЛАЛТ &nbsp;<i class="fa fa-caret-down"></i></a>
             <div class="d3">
               <div id="up_arrow"></div>
             <ul> 
             <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#">БИДНИЙ ТУХАЙ &nbsp;<i class="fa fa-caret-down"></i> </a>
           <div class="d2">
               <div id="up_arrow"></div>
             <ul> 
            
               <li><a href="#">ТАНИЛЦУУЛГА</a></li>
               <li><a href="#">ЧАНАРЫН БОДЛОГО</a></li>
               <li><a href="">ШУДАРГА БАЙДЛЫН МЭДЭГДЭЛ</a></li>
               

             </ul>
             </div>
             </li>
             <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#"> ХУУЛЬ ЭРХ ЗҮЙ &nbsp;<i class="fa fa-caret-down"></i> </a>
           <div class="d2">
               <div id="up_arrow"></div>
             <ul> 
               <li><a href="#">СТАНДАРТЧИЛАЛ, ТЕХНИКИЙН ЗОХИЦУУЛАЛТ, ТОХИРЛЫН ҮНЭЛГЭЭНИЙ ИТГЭМЖЛЭЛИЙН ТУХАЙ ХУУЛЬ</a></li>
               <li><a href="#">БАЙГУУЛЛАГЫН НУУЦЫН ТУХАЙ ХУУЛЬ</a></li>
               <li><a href="#">ХУВЬ ХҮНИЙ НУУЦЫН ТУХАЙ ХУУЛЬ</a></li>
               <li><a href="#">ИРГЭДЭЭС ТӨРИЙН БАЙГУУЛЛАГА, АЛБАН ТУШААЛТАНД ГАРГАСАН ӨРГӨДӨЛ, ГОМДЛЫГ ШИЙДВЭРЛЭХ ТУХАЙ ХУУЛЬ</a></li>
               <li><a href="#">ЖАГСААЛТ, ЖУРАМ ШИНЭЧЛЭЛ БАТЛАХ ТУХАЙ ТОГТООЛ</a></li>
               <li><a href="#">БАТАЛГААЖУУЛАЛТЫН ҮЙЛ ЯВЦЫН ЖУРАМ</a></li>
               <li><a href="#">БАТАЛГААЖУУЛАЛТЫГ ТҮДГЭЛЗҮҮЛЭХ, ЦУЦЛАХ, ХАМРАХ ХҮРЭЭГ БАГАСГАХ ЖУРАМ</a></li>
               <li><a href="#">БАТАЛГААЖУУЛАЛТЫН ГЭРЭЭ</a></li>             
             </ul>
             </div>
             </li>
               <li><a href="#">ҮНЭ ТАРИФ</a></li>
           
               <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#"> АВТО ТЭЭВРИЙН ХЭРЭГСЛИЙН ЗАСВАР ҮЙЛЧИЛГЭЭНИЙ БАТАЛГААЖУУЛАЛТ&nbsp;<i class="fa fa-caret-down"></i> </a>
           <div class="d2">
               <div id="up_arrow"></div>
             <ul> 
               <li><a href="#">ӨРГӨДЛИЙН МАЯГТ</a></li>
               <li><a href="#">СУДАЛГААНЫ МАЯГТ</a></li>
               <li><a href="#">ӨӨРИЙГӨӨ ҮНЭЛЭХ ҮНЭЛГЭЭНИЙ ХУУДАС</a></li>
             </ul>
             </div>
             </li>
             
               <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#"> НИЙТИЙН ЗОРЧИГЧ ТЭЭВРИЙН  ҮЙЛЧИЛГЭЭНИЙ БАТАЛГААЖУУЛАЛТ&nbsp;<i class="fa fa-caret-down"></i> </a>
           <div class="d2">
               <div id="up_arrow"></div>
             <ul> 
               <li><a href="#">ӨРГӨДЛИЙН МАЯГТ</a></li>
               <li><a href="#">СУДАЛГААНЫ МАЯГТ</a></li>
               <li><a href="#">ӨӨРИЙГӨӨ ҮНЭЛЭХ ҮНЭЛГЭЭНИЙ ХУУДАС</a></li>
             </ul>
             </div>
             </li>
           
               <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#"> АЧАА ТЭЭВРИЙН ҮЙЛЧИЛГЭЭНИЙ БАТАЛГААЖУУЛАЛТ&nbsp;<i class="fa fa-caret-down"></i> </a>
           <div class="d2">
               <div id="up_arrow"></div>
             <ul> 
               <li><a href="#">ӨРГӨДЛИЙН МАЯГТ</a></li>
               <li><a href="#">СУДАЛГААНЫ МАЯГТ</a></li>
               <li><a href="#">ӨӨРИЙГӨӨ ҮНЭЛЭХ ҮНЭЛГЭЭНИЙ ХУУДАС</a></li>
             </ul>
             </div>
             </li>
               <li><a href="#">БАТАЛГААЖСАН ҮЙЛЧИЛГЭЭНИЙ ЖАГСААЛТ</a></li>
               <li><a href="#">ХОЛБОО БАРИХ УТАС: 700700117, CERTIFICATION@TRANSDEP.MN</a></li>
             </ul>
             </div>
           </li>
           <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#"> ҮЙЛЧИЛГЭЭ &nbsp;<i class="fa fa-caret-down"></i> </a>
           <div class="d4">
               <div id="up_arrow"></div>
             <ul> 
               <li><a href="#">ҮНЭ ТАРИФ</a></li>
           
               <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#"> ОНЛАЙН ПРОГРАММ&nbsp;<i class="fa fa-caret-down"></i> </a>
           <div class="d2">
               <div id="up_arrow"></div>
             <ul> 
               <li><a href="#">АВТОБУСНЫ ТАСАЛБАР ЗАХИАЛАХ</a></li>
               <li><a href="#">АВТО ҮЙЛЧИЛГЭЭНИЙ АНГИЛАЛ ТОГТООЛГОХ</a></li>
               <li><a href="#">ТЭЭВРИЙН НЭГДСЭН СИСТЕМ</a></li>
               <li><a href="#">ТЭЭВРИЙН ХЭРЭГСЛИЙН ДУГААР ЗАХИАЛАХ</a></li>
               <li><a href="#">ДУГААРЫН ДУУДЛАГА ХУДАЛДАА</a></li>
               <li><a href="#">ДОТООДЫН АЧАА ТЭЭВЭР</a></li>
               <li><a href="#">БҮРТГЭЛИЙН ТӨЛБӨРИЙН ПРОГРАММ</a></li>
             </ul>
             </div>
             </li>
            
               <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#"> ЗӨВШӨӨРӨЛ&nbsp;<i class="fa fa-caret-down"></i> </a>
           <div class="d2">
               <div id="up_arrow"></div>
             <ul> 
               <li><a href="#">АЧАА ТЭЭВЭРЛЭЛТИЙН ЗӨВШӨӨРӨЛ</a></li>
               <li><a href="#">ЖУУЛЧИН ТЭЭВРИЙН ЗӨВШӨӨРӨЛ</a></li>
               <li><a href="#">ЗОРЧИГЧ ТЭЭВРИЙН ЗӨВШӨӨРӨЛ</a></li>
             </ul>
             </div>
             </li>
               <li><a href="#">ТЭЭВРИЙН ХЭРЭГСЛИЙН БҮРТГЭЛЭЭС ХАСУУЛАХ</a></li>
               <li><a href="#">МЭРГЭШСЭН ЖОЛООЧЫН ШАЛГАЛТ</a></li>
               <li><a href="#">БҮРДҮҮЛЭХ БАРИМТ БИЧГИЙН ЖАГСААЛТ</a></li>         
               </ul>
             </div>
          
         </li>
           <li class="dropdown"><a href="#">ИЛ ТОД БАЙДАЛ &nbsp;<i class="fa fa-caret-down"></i> </a> </li>
            <div class="d5">
              <div id="u_a_c"><div id="up_arrow"></div></div>
             <ul>
               
          
               <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#"> ҮЙЛ АЖИЛЛАГАА&nbsp;<i class="fa fa-caret-down"></i> </a>
           <div class="d2">
               <div id="up_arrow"></div>
             <ul> 
               <li><a href="#">ТЕХНИКИЙН ХЯНАЛТЫН ҮЗЛЭГ</a></li>
               <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#"> ТЭЭВЭР ЗОХИЦУУЛАЛТ&nbsp;<i class="fa fa-caret-down"></i> </a>
           <div class="d2">
               <div id="up_arrow"></div>
             <ul> 
               <li><a href="#">ТАНИЛЦУУЛГА</a></li>
               <li><a href="#">ОЛГОСОН ЗӨВШӨӨРЛИЙН МЭДЭЭЛЭЛ</a></li>
               <li><a href="#">ХЯНАЛТ ШАЛГАЛТЫН ТАЙЛАН</a></li>
             </ul>
             </div>
             </li>
               <li><a href="#">ТЭЭВРИЙН УДИРДЛАГА</a></li>
               <li><a href="#">ТЭЭВРИЙН ХЭРЭГСЛИЙН БҮРТГЭЛ</a></li>
               <li><a href="#">АВТО ҮЙЛЧИЛГЭЭ</a></li>
               <li><a href="#">МЭРГЭШСЭН ЖОЛООЧИЙН ТАСАГ</a></li>
             </ul>
             </div>
             </li>
             
               <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#"> ХУДАЛДАН АВАХ АЖИЛЛАГАА&nbsp;<i class="fa fa-caret-down"></i> </a>
           <div class="d2">
               <div id="up_arrow"></div>
             <ul> 
               <li><a href="#">2016</a></li>
               <li><a href="#">2017</a></li>
               <li><a href="#">2018</a></li>
               <li><a href="#">2019</a></li>
               <li><a href="#">2020</a></li>
               <li><a href="#">2021</a></li>
               <li><a href="#">2022</a></li>
               <li><a href="#">2023</a></li>
             </ul>
             </div>
             </li>
               <li><a href="#">ТӨСӨВ САНХҮҮ</a></li>
          
               <li class onmouse="hover(this);" onmouseout="out(this);"><a href="#"> ХҮНИЙ НӨӨЦ&nbsp;<i class="fa fa-caret-down"></i> </a>
           <div class="d2">
               <div id="up_arrow"></div>
             <ul> 
               <li><a href="#">ХҮНИЙ НӨӨЦИЙН СТРАТЕГИЬ БОДЛОГО</a></li>
               <li><a href="#">АЛБАН ХААГЧИЙН ҮЙЛ АЖИЛЛАГАА, ҮНЭЛГЭЭ</a></li>
               <li><a href="#">АЛБАН ХААГЧИЙН ЁСЗҮЙН ДҮРЭМ, УДИРДАМЖ</a></li>
               <li><a href="#">АЖЛЫН БАЙР </a></li>
               <li><a href="#">ОРОН ТООНЫ СУДАЛГАА</a></li>
               <li><a href="#">СЭТГЭЛ ХАНАМЖИЙН СУДАЛГААНЫ ТАЙЛАН</a></li>
          
             </ul>
             </div>
             </li>
               <li><a href="#">ЗАСГИЙН ГАЗАР ХООРОНДЫН ХЭЛЭЛЦЭЭР</a></li>
               <li><a href="#">ТӨСӨЛ ХӨТӨЛБӨР </a></li>
               <li><a href="#">ТАЙЛАН</a></li>
               <li><a href="#">МОНГОЛ БИЧГИЙН ҮНДЭСНИЙ ХӨТӨЛБӨР</a></li>
               
             </ul>
             </div>
             <div><li><a href="https://shilendans.gov.mn/organization/43185">ШИЛЭН ДАНС</a></li></div>
         </ul>           
         </div>         
      </div>   
  )
}

export default Navbar

