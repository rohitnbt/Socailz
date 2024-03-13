import React from 'react'
import { Link } from "react-router-dom";
import { HomeIcon } from "../../Icons/HomeIcon";

export const SettingMenu = ({setShowMore}) => {
  return (
    <>
    <ul className='sub-menu'>
        <li><Link to="" onClick={()=>setShowMore(false)}><HomeIcon /><span>Account</span></Link></li>
        <li><Link to="" onClick={()=>setShowMore(false)}><HomeIcon /><span>Notification</span></Link></li>
        <li><Link to="" onClick={()=>setShowMore(false)}><HomeIcon /><span>Privacy & safety</span></Link></li>
        <li><Link to="" onClick={()=>setShowMore(false)}><HomeIcon /><span>Mute & Block</span></Link></li>
    </ul>
    </>
  )
}
