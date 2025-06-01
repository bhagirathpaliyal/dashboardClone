import React, { useState } from 'react'
import AccountToggle from './AccountToggle'
import Search from './Search'
import RouteSelect from './RouteSelect'
import Plan from './plan'

const Sidebar = ({isOpen,setIsOpen}) => {
    
  return (
    <div className={`${isOpen?'flex-1':'hidden'} `}>
        <div className='sticky top-4 h-[calc(100vh-32px-48px)] overflow-y-scroll'><AccountToggle/>
        <Search/>
        <RouteSelect/>
    
    </div>

   <Plan/>
    </div>
  )
}

export default Sidebar