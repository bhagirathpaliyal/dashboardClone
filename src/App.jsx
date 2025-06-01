import React, { useState } from 'react'
import Header from './components/Header'
import Dashboard from './components/dashboard/dashboard'
import  Sidebar  from './components/sidebar/Sidebar'

const App = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='text-stone-900 bg-stone-100'>
      <div className='flex p-4 gap-4'>
      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen}/>
      <Dashboard setIsOpen={setIsOpen} isOpen={isOpen}/> </div>
    </div>
  )
}

export default App