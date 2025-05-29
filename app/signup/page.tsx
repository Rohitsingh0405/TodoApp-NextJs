import React from "react"
export default function SignUp(){
    return(
        <div className="flex justify-center items-center h-screen w-screen bg-black">            
        <div className="w-80 h-100 flex flex-col items-center bg-amber-400 border-2 border-black rounded-lg gap-2">
            <div className="text-center font-bold text-2xl text-white">                
                <h1>Sign Up</h1>
            </div>
            <div>
                <input type="text" placeholder="Username" className="w-full h-10 p-2 border-2 border-black rounded-lg"/>
            </div>
            <div>
                <input type="password" placeholder="Password" className="w-full h-10 p-2 border-2 border-black rounded-lg"/>
            </div>
            <div>
            
                <input type="email" placeholder="Email" className="w-full h-10 p-2 border-2 border-black rounded-lg"/>
            </div>
            
            <div>
                <button className="w-full h-10 p-2 border-2 border-black rounded-lg bg-amber-400 text-white">Sign Up</button>
            </div>
            </div>
 </div>           
            )
}       