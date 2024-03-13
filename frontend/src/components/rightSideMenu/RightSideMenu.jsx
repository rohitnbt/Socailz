import React, { useEffect, useState } from 'react'
import "./style.scss"

import { LocalStorage } from '../localStorage/LocalStorage'
import { useLocation } from 'react-router-dom'
import { HomeIcon } from '../Icons/HomeIcon'
import { MessagesIcon } from '../Icons/MessagesIcon'
import { NotificationIcon } from '../Icons/NotificationIcan'
import { WalletIcon } from '../Icons/WalletIcon'
import { TemptationIcon } from '../Icons/TemtationsIcon'
import { SmallHome } from './smallHome/SmallHome'
import { SmallMessages } from './smallMessages/SmallMessages'
import { SmallWallet } from './smallWallet/SmallWallet'
import { SmallTemptation } from './smallTemptation/SmallTemptation'
import { SmallNotification } from './smallNotification/SmallNotification'

export const RightSideMenu = () => {
  const [currentPath, setCurrentPath] = useState('');
  const [currentMenu, setCurrentMenu] = useState('/');
  const location = useLocation();
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  return (
    <>
    {
      (currentPath === "/login" || currentPath === "/signup" || currentPath === "/messages") ? "": (<div className='rightSideMenu'>
      <div className='rightSideContent'>
        <div className="header">
          <LocalStorage />
          <ul>
            <li onClick={()=>setCurrentMenu("/")}><HomeIcon currentPath={currentMenu}/></li>
            <li onClick={()=>setCurrentMenu("/messages")}><MessagesIcon currentPath={currentMenu}/></li>
            <li onClick={()=>setCurrentMenu("/notification")}><NotificationIcon currentPath={currentMenu}/></li>
            <li onClick={()=>setCurrentMenu("/wallet")}><WalletIcon currentPath={currentMenu}/></li>
            <li onClick={()=>setCurrentMenu("/temptations")}><TemptationIcon currentPath={currentMenu}/></li>
          </ul>
        </div>
        {currentMenu === "/temptations" ? (
          <SmallTemptation />
        ) : currentMenu === "/messages" ? (
          <SmallMessages />
        ) : currentMenu === "/notification" ? (
          <SmallNotification />
        ) : currentMenu === "/wallet" ? (
          <SmallWallet />
        ) : (
          <SmallHome />
        )}
        
       
       
        
        
      </div>
    </div>)
    }
    </>
  )
}
