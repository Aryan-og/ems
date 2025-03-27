import React from 'react'

function TaskList() {
  return (
    <>
    <div id='tasklist' className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16">
        <div className="bg-blue-200 h-full w-[24%] rounded-xl text-white p-5 overflow-hidden">
          <div className='flex items-center justify-between '>
            <h3 className='p-1 rounded-sm bg-red-500 font-medium'>High</h3>
            <h4 className='textbold font-semibold'>12 march 2025</h4>
           
          </div>
          <h2 className='font-bold text-xl mt-2 mb-3 overflow-auto'>This is a task 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum quos minus a modi perferendis eos voluptatem.</p>
        </div>
  

     
      </div>
    </>
  )
}

export default TaskList