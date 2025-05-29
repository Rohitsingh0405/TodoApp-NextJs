import React, { Dispatch, SetStateAction, useState } from "react";
import { todoListType } from "../page";

export default function LikhnekaJagahmodel({
  setShowModel,
  setTodos,
}: {
  setShowModel: (prev: boolean) => void;
  setTodos: Dispatch<SetStateAction<todoListType[]>>;
}) {
  const [value, setValue] = useState<string>("");

  const handleAdd = () => {
    if (!value.trim()) return; // Prevent empty todos

    setTodos((prev) => {
      const id = crypto.randomUUID(); // Better unique ID
      const task: todoListType = {
        id,
        isComplete: false,
        todo: value.trim(),
      };
      return [...prev, task];
    });

    setShowModel(false);
  };

  return (
    <div className="h-screen w-screen fixed top-0 left-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md space-y-4">
        <h2 className="text-lg font-bold text-center text-gray-800">Add New Todo</h2>

        <input
          type="text"
          placeholder="Enter your todo"
          autoFocus
          className="w-full border text-amber-700 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="flex justify-between">
          <button
            onClick={handleAdd}
            disabled={!value.trim()}
            className={`px-4 py-2 rounded text-white font-medium transition ${
              value.trim()
                ? "bg-amber-500 hover:bg-amber-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Add
          </button>
          <button
            onClick={() => setShowModel(false)}
            className="px-4 py-2 rounded bg-blue-400 hover:bg-blue-500 text-white font-medium transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
