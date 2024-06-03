import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit =async()=>{
        try{
            if(confirmPassword!==password){
                alert("Password Mismatch")
            }else{
                const res= await axios.post('/proxy/api/user/insertUser',{email,password,confirm_password:confirmPassword})
                localStorage.setItem("token", res.data.user_token)
                navigate('/home')
            } 
        }catch(e){
            console.log(e)
            alert(e.response.data.message)
        }
    }

  return (
    <div className="bg-black flex justify-center items-center h-screen">
      <div className="">
        <div className="m-10 h-56">
          <img className="rounded-full h-full" src="zorologo.jpeg" />
        </div>
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          onChange={(e)=>setEmail(e.target.value)}
        ></input>
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          onChange={(e)=>setPassword(e.target.value)}
        ></input>
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="confirm password"
        >
          Confirm Password
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="confirm password"
          type="password"
          placeholder="******************"
          onChange={(e)=>setConfirmPassword(e.target.value)}
        ></input>
        <div className="flex gap-2">
        <button onClick={handleSubmit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign Up
      </button>
      <button onClick={()=>navigate('/login')} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Login
      </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
