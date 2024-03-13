import React, { useState } from 'react'
import "./style.scss"
import { ThreeDotIcon } from '../../../components/Icons/ThreeDotIcon'
import { CommentBox } from '../../../components/commentBox/CommentBox'

export const MessagesContent = () => {
  const handleSend = (text) => {
      console.warn(text);
  }
  return (
    <div className='MessagesContent'>
        <div className="message-head">
        <div className="chat-profile">
            <div className="profile-img">
              <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
             
            </div>
            <div className="content">
              <h3>Profile</h3>
              <p><span className="chat-status"></span>Active Now</p>
            </div>
          </div>
          <span className="chat-option">
            <ThreeDotIcon />
          </span>
        </div>
        <div className="message-body">
          <span className='chat-date'>Thuresday, Sept 6</span>
          <div className="chat-received">
            <div className="profile-img">
                <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              
              </div>
              <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe in perferendis eaque natus exercitationem temporibus?</p>
                <span className="time">12:12 AM</span>
              </div>
          </div>
          <div className="chat-sent">
              <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur</p>
                <span className="time">12:12 AM</span>
              </div>
              <span className="chat-option">
                <ThreeDotIcon />
              </span>
          </div>

          <span className='chat-date'>Thuresday, Sept 6</span>
          <div className="chat-received">
            <div className="profile-img">
                <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              
              </div>
              <div className="content">
                <p>Lorem, ipsum </p>
                <span className="time">12:12 AM</span>
              </div>
          </div>
          <div className="chat-sent">
              <div className="content">
                <p>Lorem, ipsum dolor sit </p>
                <span className="time">12:12 AM</span>
              </div>
              <span className="chat-option">
                <ThreeDotIcon />
              </span>
          </div>

          <span className='chat-date'>Thuresday, Sept 6</span>
          <div className="chat-received">
            <div className="profile-img">
                <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              
              </div>
              <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe in perferendis eaque natus exercitationem temporibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe in perferendis eaque natus exercitationem temporibus?</p>
                <span className="time">12:12 AM</span>
              </div>
          </div>
          <div className="chat-sent">
              <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe in perferendis eaque natus exercitationem temporibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe in perferendis eaque natus exercitationem temporibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe in perferendis eaque natus exercitationem temporibus?</p>
                <span className="time">12:12 AM</span>
              </div>
              <span className="chat-option">
                <ThreeDotIcon />
              </span>
          </div>

          <span className='chat-date'>Thuresday, Sept 6</span>
          <div className="chat-received">
            <div className="profile-img">
                <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              
              </div>
              <div className="content">
                <p>Lorem,</p>
                <span className="time">12:12 AM</span>
              </div>
          </div>
          <div className="chat-sent">
              <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe in perferendis eaque natus exercitationem temporibus?</p>
                <span className="time">12:12 AM</span>
              </div>
              <span className="chat-option">
                <ThreeDotIcon />
              </span>
          </div>

          <span className='chat-date'>Thuresday, Sept 6</span>
          <div className="chat-received">
            <div className="profile-img">
                <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              
              </div>
              <div className="content">
                <p>Lorem, ipsum dolor exercitationem temporibus?</p>
                <span className="time">12:12 AM</span>
              </div>
          </div>
          <div className="chat-sent">
              <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe in perferendis exercitationem temporibus?</p>
                <span className="time">12:12 AM</span>
              </div>
              <span className="chat-option">
                <ThreeDotIcon />
              </span>
          </div>

          <span className='chat-date'>Thuresday, Sept 6</span>
          <div className="chat-received">
            <div className="profile-img">
                <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              
              </div>
              <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe in perferendis eaque natus exercitationem temporibus?</p>
                <span className="time">12:12 AM</span>
              </div>
          </div>
          <div className="chat-sent">
              <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe in perferendis eaque natus exercitationem temporibus?</p>
                <span className="time">12:12 AM</span>
              </div>
              <span className="chat-option">
                <ThreeDotIcon />
              </span>
          </div>

          <span className='chat-date'>Thuresday, Sept 6</span>
          <div className="chat-received">
            <div className="profile-img">
                <img src="http://localhost:5173/src/images/square/square-1.jpg" alt="" />
              
              </div>
              <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe in perferendis eaque natus exercitationem temporibus?</p>
                <span className="time">12:12 AM</span>
              </div>
          </div>
          <div className="chat-sent">
              <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe in perferendis eaque natus exercitationem temporibus?</p>
                <span className="time">12:12 AM</span>
              </div>
              <span className="chat-option">
                <ThreeDotIcon />
              </span>
          </div>
        </div>
        <div className="message-foot">
          <CommentBox handleSend={handleSend}/>
        </div>
    </div>
  )
}
