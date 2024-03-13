import React from 'react'
import "./style.scss"
import { SearchIcon } from '../../../components/Icons/SearchIcon'
import { AddChatIcon } from '../../../components/Icons/AddChatIcon'

export const MessagesMain = () => {
  return (
    <div className='MessagesMain'>
      <div className="message-head">
        <div className="page-header">
          <h3>Messages</h3>
          <span><AddChatIcon /></span>
        </div>
        <div className="search-box">
          <SearchIcon />
          <input type="text" placeholder='Search...' />
        </div>
      </div>
      <div className="message-body">
        <span className="chat-type">Favorites</span>
        <div className="chat-slide">
          <div className="chat-profile">
            <div className="profile-img">
              <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              <span className="chat-status"></span>
            </div>
            <div className="content">
              <h3>Profile</h3>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="chat-time">
            <span className="time">12:12 AM</span>
            <span className="chat-number">7</span>
          </div>
        </div>
        <div className="chat-slide">
          <div className="chat-profile">
            <div className="profile-img">
              <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              <span className="chat-status"></span>
            </div>
            <div className="content">
              <h3>Profile</h3>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="chat-time">
            <span className="time">12:12 AM</span>
            <span className="chat-number">7</span>
          </div>
        </div>
        <div className="chat-slide">
          <div className="chat-profile">
            <div className="profile-img">
              <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              <span className="chat-status"></span>
            </div>
            <div className="content">
              <h3>Profile</h3>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="chat-time">
            <span className="time">12:12 AM</span>
            <span className="chat-number">7</span>
          </div>
        </div>
        <div className="chat-slide">
          <div className="chat-profile">
            <div className="profile-img">
              <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              <span className="chat-status"></span>
            </div>
            <div className="content">
              <h3>Profile</h3>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="chat-time">
            <span className="time">12:12 AM</span>
            <span className="chat-number">7</span>
          </div>
        </div>
        <span className="chat-type">Chat</span>
        <div className="chat-slide">
          <div className="chat-profile">
            <div className="profile-img">
              <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              <span className="chat-status"></span>
            </div>
            <div className="content">
              <h3>Profile</h3>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="chat-time">
            <span className="time">12:12 AM</span>
            <span className="chat-number">7</span>
          </div>
        </div>
        <div className="chat-slide">
          <div className="chat-profile">
            <div className="profile-img">
              <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              <span className="chat-status"></span>
            </div>
            <div className="content">
              <h3>Profile</h3>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="chat-time">
            <span className="time">12:12 AM</span>
            <span className="chat-number">7</span>
          </div>
        </div>
        <div className="chat-slide">
          <div className="chat-profile">
            <div className="profile-img">
              <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              <span className="chat-status"></span>
            </div>
            <div className="content">
              <h3>Profile</h3>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="chat-time">
            <span className="time">12:12 AM</span>
            <span className="chat-number">7</span>
          </div>
        </div>
        <div className="chat-slide">
          <div className="chat-profile">
            <div className="profile-img">
              <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              <span className="chat-status"></span>
            </div>
            <div className="content">
              <h3>Profile</h3>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="chat-time">
            <span className="time">12:12 AM</span>
            <span className="chat-number">7</span>
          </div>
        </div>
      </div>
    </div>
  )
}
