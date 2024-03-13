import React, { useState } from "react";
import Slider from "react-slick";
import "./style.scss"
import { IoMdMore } from "react-icons/io";
import dayjs from "dayjs";

import LikeIcon from '../../images/icons/like.svg'
import CommentIcon from '../../images/icons/comment.svg'
import SendIcon from '../../images/icons/send.svg'
import ChartIcon from '../../images/icons/chart.svg'
import DollarIcon from '../../images/icons/dollar-active.svg'
import { Verify } from "../verify/verify";
import { Save } from "../save/Save";
import { PostView } from "../postView/PostView";

export const PostLayout = ({item}) => {
    const [viewComment, setViewComment] = useState(false);
    const [postDetails, setPostDetails] = useState(null)
    const handlePost = (item) => {
        setViewComment(true);
        setPostDetails(item);
    }

    
    viewComment ? document.body.classList.add('body-no-scroll') : document.body.classList.remove('body-no-scroll');
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
            <div className='post-layout'>
                <div className="header">
                    <div className="profile">
                        <div className="profile-img">
                            {
                                item.hasStory ? (<div className="border">
                                <img src={item.avatar} alt="" />
                            </div>) : (
                                <img src={item.avatar} alt="" />
                                )
                            }
                        </div>
                        <div className="content">
                            <a href="#"><h2>{item.name}</h2><Verify accountType={item.accountType}/></a>
                            <span>{item.location} | {dayjs(item.time).format('H [hr]')}</span>
                        </div>
                    </div>
                    <div className="menu">
                        <IoMdMore />
                    </div>
                </div>
                <div className="body">
                    {
                        item.images ? (<Slider {...settings}>
                            <div className="slide-item" onClick={()=>{handlePost(item)}}>
                                        <img src={item.images} alt="" />
                                    </div>
                                    <div className="slide-item" onClick={()=>{handlePost(item)}}>
                                        <img src={item.images} alt="" />
                                    </div>
                                    <div className="slide-item" onClick={()=>{handlePost(item)}}>
                                        <img src={item.images} alt="" />
                                    </div>
                            
                        </Slider>) : (
                           <video controls>
                           <source src={item.video} type="video/mp4" />
                         </video>
                        )
                    }
                    
                </div>
                <div className="footer">
                    <div className="control">
                        <ul>
                            <li><img src={LikeIcon} alt="home" className='icon' /><span>{item.likes}</span></li>
                            <li onClick={()=>{handlePost(item)}}><img src={CommentIcon} alt="home" className='icon' /><span>{item.comments.length}</span></li>
                            <li><img src={SendIcon} alt="home" className='icon' /><span>{item.shares}</span></li>
                            <li><img src={ChartIcon} alt="home" className='icon' /><span>{item.chart}</span></li>
                        </ul>
                        <ul>
                            <li><img src={DollarIcon} alt="home" className='icon' /></li>
                            <li><Save isSaved={item.isSaved} /></li>
                        </ul>
                    </div>
                    
                    <div className="content">
                        <p>{item.description}</p>
                        <div className="tags">
                            {
                                item.tags.map((items,id)=>(
                                    <span key={id}>{items}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        
        {
            viewComment ? <PostView setViewComment={setViewComment} postDetails={postDetails} /> : ""
        }
    </>

  )
}
