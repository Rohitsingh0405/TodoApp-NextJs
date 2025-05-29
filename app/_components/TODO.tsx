import React, {Dispatch,SetStateAction} from "react";
import { todoListType } from "../page";

function TODO(
  {
  todo: { id, isComplete, todo },
  setTodo,
}: {
  todo: todoListType;
  setTodo:Dispatch<SetStateAction<todoListType[]>>
}) {

  const toggleButton = () => {
    if(isComplete){
      setTodo((prevtodo)=>
        prevtodo.map((todo)=>
        todo.id === id ? {...todo,isComplete:false} : todo
        )
      )
    }
    else{
      setTodo((prevTodo)=>
      prevTodo.map((todo)=>
      todo.id === id ? {...todo,isComplete:true}: todo)
    )
    }
  };

  return (
    <div className="">
      <div className=" h-10 w-full rounded-md bg-[#201f1f] flex flex-row items-center  "onClick={toggleButton}>
       <div className="w-4 h-4 rounded-2xl border-1 bg-amber-400 flex items-center " > 
             
           {
            !isComplete && 
             <div className="text-black font-bold">
                    &#10003;
                    </div>
              
            } 
            </div>
      
        <div className="text-white font-thin ml-2 cursor-pointer" onClick={toggleButton}>
          
          {todo}
        </div>
      </div>
    </div>
  );
}
export default TODO;
