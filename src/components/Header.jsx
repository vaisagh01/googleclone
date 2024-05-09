import React from 'react'
import './Header.css'
import { LayoutGrid, CircleUserRound } from 'lucide-react';
import GoogleApps from './GoogleApps';

function Header() {
  return (
    <div className='home-header'>
        <a href="www.gmail.com">Gmail</a>
        <a href="www.photos.com">Images</a>
        <div className="home-icons">
            <GoogleApps/>
            <img className='avatar' src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png" alt="" />
        </div>
    </div>
  )
}

export default Header
