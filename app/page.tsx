"use client";
import TODO from "./_components/TODO";
import { useEffect, useState } from "react";
import LikhnekaJagahmodel from "./_components/LikhnekaJagahmodel";

export interface todoListType {
  id: string;
  todo: string;
  isComplete: boolean;
}

const todoList: todoListType[] = [
  // // Example todos (you can enable for testing)
  // { id: "1", todo: "Complete Todo app", isComplete: false },
  // { id: "2", todo: "See lecture", isComplete: true },
];

export default function Home() {
  const [todo, setTodo] = useState<todoListType[]>(todoList);
  const [showModel, setShowModel] = useState<boolean>(false);
  useEffect(()=>{
    const a = localStorage.getItem("TODO")
    if(a){
      try{
        const b = JSON.parse(a)
        setTodo(b)

      }catch(e){
        console.log(e)
      }
    }
  },[])
  useEffect(()=>{
  
    localStorage.setItem("TODO",JSON.stringify(todo))
  },[todo])
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center px-4 py-6">
      
      {/* Header */}
      <div className="w-full max-w-3xl bg-amber-400 rounded-lg py-4 mb-6 text-center">
        <h1 className="text-2xl font-bold text-white">Todo App</h1>
      </div>

      {/* Modal */}
      {showModel && <LikhnekaJagahmodel setShowModel={setShowModel} setTodos={setTodo} />}

      {/* Todo List Container */}
      <div className="w-full max-w-3xl bg-[#151515] rounded-lg p-6 space-y-4 shadow-lg">

        {/* Incomplete Todos */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-amber-400">Incomplete Tasks</h2>
          {todo.filter(t => !t.isComplete).length === 0 && (
            <p className="text-gray-400">No incomplete tasks</p>
          )}
          {todo.map(t => !t.isComplete && (
            <div key={t.id} className="mb-2">
              <TODO todo={t} setTodo={setTodo} />
            </div>
          ))}
        </div>

        {/* Completed Todos */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <h2 className="text-xl font-semibold mb-2 text-green-400">Completed Tasks</h2>
          {todo.filter(t => t.isComplete).length === 0 && (
            <p className="text-gray-400">No completed tasks</p>
          )}
          {todo.map(t => t.isComplete && (
            <div key={t.id} className="mb-2">
              <del className="opacity-70">
                <TODO todo={t} setTodo={setTodo} />
              </del>
            </div>
          ))}
        </div>
      </div>

      {/* Add Todo Button */}
      <button
        className="mt-8 px-6 py-3 bg-amber-500 hover:bg-amber-600 transition-all rounded-xl text-white font-semibold shadow-md"
        onClick={() => setShowModel(!showModel)}
      >
        Add Todo +
      </button>
    </div>
  );
}
