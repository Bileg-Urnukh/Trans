import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"


function Register() {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })
const handleChange = e =>{
setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
}

 const handleSubmit = async e =>{
  e.preventDefualt();
 try{

  const res = await axios.post("/auth/register", inputs)
  console.log(res)
 }catch(err){
  console.log(err)
}
 }

  return (
    <div className='auth'>
        <h1>Шинэ хэрэглэгч бүртгэх</h1>
        <form>
            <input required type='text' placeholder='Хэрэглэгчийн нэр' name='username' onChange={handleChange} />
            <input required type='email' placeholder='И-мэйл хаяг' name='email' onChange={handleChange}/>
            <input required type='password' placeholder='Нууц үг' name='password' onChange={handleChange}/>
          
            <button onClick={handleSubmit}>Бүртгүүлэх</button>
            <p>Хэрэглэгчийн нэр эсвэл нууц үг буруу байна!</p>
            <span>Шинээр хаяг бүртгүүлэх үү? <Link to="/login">Нэвтрэх</Link>
            </span>
        </form>
        </div>
  )
}

export default Register