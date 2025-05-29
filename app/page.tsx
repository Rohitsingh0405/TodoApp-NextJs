"use client"
import Image from "next/image";
import TODO from "./_components/TODO";
import { todo } from "node:test";
import { useState } from "react";
import LikhnekaJagahmodel from "./_components/LikhnekaJagahmodel";
import Login from "./login/page";
export interface todoListType {
  id:string,
  todo:string,
  isComplete:boolean,
} 

const todoList:todoListType[] = [
  
  {
    id:"1",
    todo:"Complete Todo app",
    isComplete:true,
  },
  {
    id:"2",
    todo:"See Harkirat lecture",
    isComplete:true,
  },
  {
    id:"3",
    todo:"See striver dsa ",
    isComplete:true,
  },
  {
    id:"4",
    todo:"Solve Dsa",
    isComplete:true,
  }
]

export default function Home() {

  const [todo,setTodo] = useState<todoListType[]>(todoList);
  const[showModel,setShowModel] = useState<boolean>(false)
return <div >
     {showModel &&<LikhnekaJagahmodel setShowModel={setShowModel} setTodos={setTodo}/>}
      <div>
        {
         todo && todo.map((todo:todoListType)=>{
            // console.log(key)
            if(todo.isComplete){
              return <div key={todo.id}>
                {/* console.log(key) */}
              <TODO todo={todo} setTodo={setTodo}  />
              <div className="h-3"></div>
            
              </div>
              
              
            }
          })
        }
      </div>
      <div>
        {

          todo.map((todo:todoListType)=>{
            if(!todo.isComplete){
              return <div key={todo.id}>
                <div className="flex flex-row ">
                  
                <del className="text-amber-400 ">
                  <TODO todo={todo} setTodo={setTodo} />
                  </del>
                </div>
                  <div className="h-3"></div>
                </div>
            }
          })
        }
      </div>
      <div className="text-center text-gray-50 absolute-bottom left-1/2 rounded-xl bg-amber-500 cursor-pointer " onClick={()=>{
      setShowModel(!showModel)
      
      }}>
      add todo &#xf067;

      </div>
    
    </div>

}