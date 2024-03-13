import React, { useEffect, useState } from 'react'
import "./style.scss"

import logo from "../../assets/socialz-logo.svg"
import MoreIcon from '../../images/icons/more.svg'
import PostIcon from '../../images/icons/post.svg'
import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from '../Icons/HomeIcon'
import { SavedIcon } from '../Icons/SavedIcon'
import { MoreMenu } from './moreMenu/MoreMenu'
import { PreciousIcon } from '../Icons/PreciousIcon'
import { BestofIcon } from '../Icons/BestofIcon'
import { TemptationIcon } from '../Icons/TemtationsIcon'
import { NotificationIcon } from '../Icons/NotificationIcan'
import { MessagesIcon } from '../Icons/MessagesIcon'
import { ProfileIcon } from '../Icons/ProfileIcon'

export const LeftSideMenu = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');
  const  [showMore, setShowMore] = useState(false)
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  return (
    <>
      { (currentPath === "/login" || currentPath === "/signup") ? "" : (
        <div className='leftSideMenu'>
        <div className='leftSideContent'>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul>
              <li><Link to="/"><HomeIcon currentPath={currentPath} /><span>Home</span></Link></li>
              <li><Link to="/precious"><PreciousIcon currentPath={currentPath} /><span>Precious</span></Link></li>
              <li><Link to="/bestof"><BestofIcon currentPath={currentPath} /><span>Best of</span></Link></li>
              <li><Link to="/temptations"><TemptationIcon currentPath={currentPath} /><span>Temptations</span></Link></li>
              <li><Link to="/saved"><SavedIcon currentPath={currentPath} /><span>Saved</span></Link></li>
              <li><Link to="/notification"><NotificationIcon currentPath={currentPath} /><span>Notifications</span></Link></li>
              <li><Link to="/messages"><MessagesIcon currentPath={currentPath} /><span>Messages</span></Link></li>
              <li><Link to="/profile"><ProfileIcon currentPath={currentPath} /><span>Profile</span></Link></li>
              <li><Link onClick={()=>setShowMore(!showMore)}><img src={MoreIcon} alt="home" className='icon' /><span>More</span></Link></li>
              <li><Link><img src={PostIcon} alt="home" className='icon' /><span>Post</span></Link></li>
            </ul>
            {
                showMore && (<MoreMenu setShowMore={setShowMore} />)
            }
        </div>
      </div>
      )}
    </>
  )
}
