import React from "react";

function TaskListNumber() {
  return (
    <>
      <div className="mt-5  h-[25%] flex justify-between items-center gap-5 ">
        <div className="bg-blue-200 h-full w-[45%] rounded-xl text-black p-8">
          <p className="text-2xl mb-4 font-bold">0</p>
          <h2 className="font-medium text-2xl">Task</h2>
        </div>
        <div className="bg-yellow-200 h-full w-[45%] rounded-xl text-black p-8">
          <p className="text-2xl mb-4 font-bold">0</p>
          <h2 className="font-medium text-2xl">Task</h2>
        </div>
        <div className="bg-red-200 h-full w-[45%] rounded-xl text-black p-8">
          <p className="text-2xl mb-4 font-bold">0</p>
          <h2 className="font-medium text-2xl">Task</h2>
        </div>
        <div className="bg-green-200 h-full w-[45%] rounded-xl text-black p-8">
          <p className="text-2xl mb-4 font-bold">0</p>
          <h2 className="font-medium text-2xl">Task</h2>
        </div>
      </div>
    </>
  );
}

export default TaskListNumber;
