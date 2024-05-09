import React, { useState } from 'react'
import './GoogleApps.css'
import { LayoutGridIcon } from 'lucide-react'
import AppIcon from './AppIcon'


function GoogleApps() {
    const [showApps, setShowApps] = useState(false)
  
  return (
    <div>
      <button className='apps-button' onClick={()=>{setShowApps(!showApps)}}>
        <img src="apps_icon.svg" alt="" />
      </button>
      {showApps && 
      <div className='dropdown-grid'>
      <AppIcon />
      <AppIcon />
      <AppIcon />
      <AppIcon />
      <AppIcon />
      <AppIcon />
      <AppIcon />
      <AppIcon />
      <AppIcon />
    </div>}
    </div>
  )
}

export default GoogleApps
