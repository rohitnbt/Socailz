import React from 'react'
import "./style.scss"

export const Tabing = ({tabs, currentTab, setCurrentTab}) => {
  return (
    <nav className="tabing">
      <ul>
          {
            tabs.map((item)=>(
              <li key={item} onClick={()=>setCurrentTab(item)} className={currentTab===item ? 'active' : ''}>{item}</li>
            ))
          }
      </ul>
    </nav>
  )
}
