import { constants } from "buffer";
import React, { Dispatch, SetStateAction, useState } from "react";
import { todoListType } from "../page";
export default function LikhnekaJagahmodel({
    setShowModel,
    setTodos,
}:{
    setShowModel:(prev:boolean)=>void;
    setTodos: Dispatch<SetStateAction<todoListType[]>>;
}){
const [value,setValue] = useState<string>("")
    return <div className="h-screen w-screen fixed top-0 left-0 z-20 bg-black/50 flex flex-col items-center justify-center">
        <div className="w-70 h-30 bg-white flex flex-col items-center justify-around">
            {/* <div className="underline text-black">Add Todo</div> */}
            <input type="text" placeholder="Enter your todo" className="w-full text-center border-2" onChange={(e)=>{
                setValue(e.target.value);
            }}/>
            <div className="cursor-pointer " onClick={()=>{
                setTodos((prev)=>{
                    const id = JSON.stringify(prev.length +1);
                    const task:todoListType ={
                        id,
                        isComplete:true,
                        todo:value,
                    }

                    return [...prev,task]
                    
                }
        )
        setShowModel(false)
            }}>add</div>
            <div className=" cursor-pointer w-15 h-6 bg-blue-400 rounded-2xl flex justify-center " onClick={()=>{
                setShowModel(false)
            }}>close</div>
        </div>
    
    </div>
}
