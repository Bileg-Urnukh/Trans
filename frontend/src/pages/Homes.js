
import React from 'react'
import { Link  } from "react-router-dom";


function Homes () {
  
    const posts = [
 
        {
           id: 1,
           title: "Видео",
          desc: "2022 онд хэрэгжүүлсэн онцлох ажлууд",
         img: "../1.jpg",
       },
       
         {
           id: 2,
           title: "Мэдээ",
           desc: "Тээврийн хэрэгслийн өмчлөгч та улсын хэмжээнд зохион байгуулж байгаа Тээврийн хэрэгслийн шинэчилсэн бүртгэл, үзлэг тооллогод идэвхтэй хамрагдахыг уриалж байна.",
           img: "../2.jpg",
         },
         {
            id: 2,
            title: "Фото",
            desc: "Тээврийн хэрэгслийн өмчлөгч та улсын хэмжээнд зохион байгуулж байгаа Тээврийн хэрэгслийн шинэчилсэн бүртгэл, үзлэг тооллогод идэвхтэй хамрагдахыг уриалж байна.",
            img: "../4.jpg",
          },
       
      
       ];
       return (
        <div className="homes">
          <div className="posts">
            {posts.map((post) => (
              <div className="post" key={post.id}>
                <div className="img">
                  <img src={`../upload/${post.img}`} alt="" />
                </div>
                <div className="content">
                  <Link className="link" to={`/post/${post.id}`}>
                    <h1>{post.title}</h1>
                  </Link>
                  <p>{post.desc}</p>
                  <button>Дэлгэрнгүй</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Homes