import React from "react";

export default function Login(){
    return(
        <div>
            <div className="bg-[#7a3a90] h-100 w-60 rounded-xl">
                <div className="w-50 h-1/2 flex flex-col items-center align-middle justify-center gap-2 mt-20">
                    <div className="h-10 w-5/6 border-2 text-white rounded-4xl flex items-center ">
                    <input className="ml-5" type="text" placeholder="Username" /></div>
                    <div className="h-10 w-5/6 border-2 text-white rounded-4xl flex items-center">
                    <input className="ml-5" type="text" placeholder="Password" />
                    </div>
                    
                    <div>
                        <button className=" h-10 w-30 bg-white rounded-3xl cursor-pointer ">

                        Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}