"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type LoginData={
  success:boolean,
  token:string
}

export default function Login() {
  const navigation = useRouter()
    const [userlogin,setUserlogin] = useState("")
    const [passlogin,setPasslogin] = useState("")
    
     const handleSubmit1 = async () => {
     const message = await fetch(
       `http://localhost:8080/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username:userlogin,
            password:passlogin,
          }),
        }
      );
      // console.log(await message.json());
      const LoginData:LoginData = await message.json();
      console.log(LoginData)
      localStorage.setItem("Token",LoginData.token)
      // console.log(await message.json())
      navigation.push("/")
      // Save in local storage
      // Redirect to home page
  
    }; 

  
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <div className="w-full max-w-sm bg-amber-400 border-2 border-black rounded-lg p-6 space-y-4 shadow-lg">
        
        <h1 className="text-center font-bold text-3xl text-white">Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full h-10 px-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          onChange={(e)=>{
            setUserlogin(e.target.value)
          }}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full h-10 px-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          onChange={(e)=>{
            setPasslogin(e.target.value)
          }}
        />

        <button
          className="w-full h-10 bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
        onClick={handleSubmit1} >
          Login
        </button>

        <button
          className="w-full h-10 bg-white text-black font-semibold rounded-lg border-2 border-black hover:bg-black hover:text-white transition"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
