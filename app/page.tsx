"use client"
import TODO from "./_components/TODO";
import { useState } from "react";
import LikhnekaJagahmodel from "./_components/LikhnekaJagahmodel";

export interface todoListType {
  id:string,
  todo:string,
  isComplete:boolean,
} 

const todoList:todoListType[] = [
  
  // {
  //   id:"1",
  //   todo:"Complete Todo app",
  //   isComplete:true,
  // },
  // {
  //   id:"2",
  //   todo:"See lecture",
  //   isComplete:true,
  // },
  // {
  //   id:"3",
  //   todo:"See striver dsa ",
  //   isComplete:true,
  // },
  // {
  //   id:"4",
  //   todo:"Solve Dsa",
  //   isComplete:true,
  // }
]

export default function Home() {

  const [todo,setTodo] = useState<todoListType[]>(todoList);
  const[showModel,setShowModel] = useState<boolean>(false)
return <div>
  <div className="w-full h-full rounded-4xl m-0 p-0 "></div> 
           <div className="flex items-center justify-center w-full h-screen flex-row">
  
            <div className=" w-full h-full rounded-lg bg-[#151515]">
              <div className="flex items-center justify-center w-full h-1/6  bg-amber-400 rounded-lg ">
                <h1 className="text-white text-[20px] font-bold">
                  Todo App
                </h1>
              </div>
     {showModel &&<LikhnekaJagahmodel setShowModel={setShowModel} setTodos={setTodo}/>}
      <div className="relative">
        {
         todo && todo.map((todo:todoListType)=>{
            // console.log(key)
            // localStorage.setItem(todo,tood)
            if(todo.isComplete){
              return <div key={todo.id}>
                {/* console.log(key) */}
              <TODO todo={todo} setTodo={setTodo}  />
              
              <div className="h-3"></div>
            
              </div>
              
              
            }
          })
        }
      
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
          </div>
      
      <div className="w-3/6 text-center text-gray-50 absolute bottom-0 left-60 rounded-xl bg-amber-500 cursor-pointer autofocus-autofocus" onClick={()=>{
        setShowModel(!showModel)
      
      }}>
      add todo &#xf067;

      </div>

    
    </div>
        </div>

}