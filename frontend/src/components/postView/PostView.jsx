import React, { useEffect, useState } from 'react'
import "./style.scss"
import dayjs from "dayjs";
import Slider from 'react-slick';
import { Save } from "../save/Save";
import { LikeIcon } from '../Icons/LikeIcon';
import { CommentIcon } from '../Icons/CommentIcon';
import { DollerIcon } from '../Icons/DollerIcon';
import { ThreeDotIcon } from '../Icons/ThreeDotIcon';
import { ViewIcon } from '../Icons/ViewIcon';
import { CrossIcon } from '../Icons/CrossIcon';
import { CommentBox } from '../commentBox/CommentBox';

export const PostView = ({setViewComment, postDetails}) => {
    const [showChat, setShowChat] = useState(true);
    const [comment, setComment] = useState("");
    const [aspectRatio, setAspectRatio] = useState(null);
    
    if(postDetails.images !== "") { 

    const img = new Image();
    img.src = postDetails.images;
    img.onload = () => {
      const ratio = img.width / img.height;
      setAspectRatio(ratio);
      console.warn(aspectRatio);
    };
}
else {

    const video = document.createElement('video');
    video.src = postDetails.video;
    video.addEventListener('loadedmetadata', () => {
      const ratio = video.videoWidth / video.videoHeight;
      setAspectRatio(ratio);
      console.warn(aspectRatio);
    });}

    const containerStyle = {
        '--aspect-ratio': aspectRatio || 1 // Default to 1 if aspect ratio is not yet calculated
      };

    const handleComment = () => {
        const newComment = {
            "id":  postDetails.comments.length + 1,
            "profilePicture": postDetails.profilePicture,
            "username": postDetails.username,
            "name": postDetails.name,
            "accountType": postDetails.accountType,
            "comment": comment,
            "time": Date()
        }
        postDetails.comments.push(newComment);
    }

    const handleSend = (text) => {
        console.warn(text);
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className={`PostView ${!showChat ? 'full-view' : ''}`}>
        <div className="background-overlay">
            <span className='cancel-icon' onClick={()=>setViewComment(false)}><CrossIcon currentPath="white" /></span>
            <div className="post-outer">
            <span className='ViewChange' onClick={()=>setShowChat(!showChat)}><ViewIcon showChat={showChat} /></span>
                <div className="left" style={containerStyle}>
                {
                        postDetails.images ? (<Slider {...settings}>
                            <div className="slide-item">
                                        <img src={postDetails.images} alt="" />
                                    </div>
                                    <div className="slide-item">
                                        <img src={postDetails.images} alt="" />
                                    </div>
                                    <div className="slide-item">
                                        <img src={postDetails.images} alt="" />
                                    </div>
                            
                        </Slider>) : (
                           <video controls>
                           <source src={postDetails.video} type="video/mp4" />
                         </video>
                        )
                    }
                </div>
                {
                    showChat && (<div className="right">
                    <div className="chatbox">
                        <div className="chatbox-top">
                            <div className="comment-slide">
                                <div className="slide-profile">
                                    <img src={postDetails.avatar} alt="" />
                                    <div className="content">
                                        <h3>{postDetails.name}</h3>
                                        <span>{postDetails.location} | {dayjs(postDetails.time).format('H [hr]')}</span>
                                    </div>
                                </div>
                                <div className="slide-content">
                                    <p>{postDetails.description}</p>
                                    <div className="tags">
                                        {
                                            postDetails.tags.map((items,id)=>(
                                                <span key={id}>{items}</span>
                                            ))
                                        }
                                    </div>
                                    <div>
                                        <div className="control">
                                            <ul>
                                                <li><LikeIcon /><span>{postDetails.likes}</span></li>
                                                <li><CommentIcon /><span>{postDetails.comments.length}</span></li>
                                            </ul>
                                            <ul>
                                                <li><DollerIcon /></li>
                                                <li><Save isSaved={postDetails.isSaved} /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chatbox-middle">
                        
                        </div>
                        <div className="chatbox-bottom">
                            <CommentBox handleSend={handleSend}/>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    </div>
  )
}