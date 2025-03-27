import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'

function AdminDashboard() {
  return (
    <>
    <div className='p-6 h-screen'>
    <Header/>
   <CreateTask/>
   </div>
    </>
  )
}

export default AdminDashboard