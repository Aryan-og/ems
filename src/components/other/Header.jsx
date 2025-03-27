import React from 'react'

function Header() {
  return (
<>
<div className='flex justify-between items-center'>
    <h1 className='text-2xl'>Hello <br /><span className='text-3xl font-bold'>Arthur</span></h1>
    <button className='bg-red-500 rounded-xl p-3 text-2xl  font-medium'>login</button>
</div>
</>  
)
}

export default Header