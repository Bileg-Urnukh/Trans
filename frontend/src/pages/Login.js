import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='auth'>
      
        <h1>Нэвтрэх</h1>
        <form>
            <input type='text' placeholder='Хэрэглэгчийн нэр' />
            <input type='password' placeholder='Нууц үг' />
            <button>Нэвтрэх</button>
            <p>Хэрэглэгчийн нэр эсвэл нууц үг буруу байна!</p>
            <span>Шинээр хаяг бүртгүүлэх үү? <Link to="/register">Бүртгүүлэх</Link>
            </span>
        </form>
        </div>
  )
}


export default Login