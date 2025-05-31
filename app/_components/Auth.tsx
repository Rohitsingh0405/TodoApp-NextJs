"use client"

import React from "react";
import Login from "../login/page";


export default function Auth({children}:{children:React.ReactNode}){
   const autoCheck = () =>{
    const token = localStorage.getItem("Token")
        if(!token){
            return false
        }
        return true
   }
   
    return(
        <div>
          { autoCheck() ? children:<Login/> }
        </div>
    )
}