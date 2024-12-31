import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
   <div className='font-roboto w-full'>

    <h1 className='text-3xl font-semibold'>Welcome to Bugherd</h1>
   

    


   <Outlet/>
  
   </div>
  )
}

export default Dashboard