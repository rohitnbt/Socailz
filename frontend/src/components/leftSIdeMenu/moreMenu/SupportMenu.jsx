import React from 'react'
import { Link } from "react-router-dom";
import { HomeIcon } from "../../Icons/HomeIcon";

export const SupportMenu = ({setShowMore}) => {
  return (
    <>
    <ul className='sub-menu'>
        <li><Link to="" onClick={()=>setShowMore(false)}><HomeIcon /><span>Tips & Tricks</span></Link></li>
        <li><Link to="" onClick={()=>setShowMore(false)}><HomeIcon /><span>Feedback</span></Link></li>
        <li><Link to="" onClick={()=>setShowMore(false)}><HomeIcon /><span>Help & Support</span></Link></li>
    </ul>
    </>
  )
}
