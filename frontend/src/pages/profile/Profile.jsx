import React, { useEffect, useState } from "react";
import "./style.scss";

import BackArrow from "../../images/icons/back-arrow.svg";
import { GalleryAddIcon } from "../../components/Icons/GalleryAddIcon";
import { ShareIcon } from "../../components/Icons/shareIcon";
import { FollowIcon } from "../../components/followButton/FollowButton";
import { CalendarIcon } from "../../components/Icons/CalendarIcon";
import { EyeIcon } from "../../components/Icons/EyeIcon";
import { LocationIcon } from "../../components/Icons/LocationIcon";
import { Verify } from "../../components/verify/verify";
import { Tabing } from "../../components/tabing/Tabing";
import { MediaHeader } from "../../components/mediaHeader/MediaHeader";
import { Pegination } from "../../components/pagination/Pegination";
import { MediaView } from "../../components/mediaView/MediaView";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [currentTab, setCurrentTab] = useState("Post");
  const [tabs, setTabs] = useState([]);
  const [currentMedia, setCurrentMedia] = useState("Albums");
  
  const navigate = useNavigate();

  useEffect(()=>{
    const tabss = ["Post", "Media", "Likes", "About"];
    setTabs(tabss)
  },[currentTab]);
  return (
    <div className="profile-page">
      <div className="page-title">
        <a href="#">
          <img src={BackArrow} alt="" /> <span>Profile</span>
        </a>
      </div>
      <div className="page-body">
        <div className="profile-header">
          <div className="banner-box">
            <img src="https://demourls.xyz/Pulse-development/img/Maskgroup-new.png" alt="" />
          </div>
          <div className="profile-box-outer">
            <div className="profile-box">
                <div className="profile">
                    <img src="https://demourls.xyz/Pulse-development/img/gal5.png" alt="" />
                </div>
                <div className="content">
                    <a href="#"><h3>Title</h3><Verify accountType={"accountType"}/></a>
                    <span>@title</span>
                </div>
            </div>
            <div className="profile-options">
                <span><GalleryAddIcon /></span>
                <span><ShareIcon /></span>
                <span onClick={()=>navigate('/editProfile')}><FollowIcon /></span>
            </div>
          </div>
          <p className="bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto? Quia pariatur ipsa laboriosam tempora quam. Molestiae tenetur nobis vitae perferendis accusamus doloremque temporibus id!</p>
          <div className="followers-box">
            <ul>
                <li><span>91</span>Following</li>
                <li><span>548</span>Followers</li>
                <li><span><CalendarIcon /></span>2011</li>
                <li><span><EyeIcon /></span>1k</li>
                <li><span><LocationIcon /></span>UK, London</li>
            </ul>
          </div>
        </div>
        <div className="profile-body">
        <Tabing tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab}/>
        <div className="tab-content">
          <div className="post-section"></div>
          <div className="media-section">
            <MediaHeader currentMedia={currentMedia} setCurrentMedia={setCurrentMedia} />
            <MediaView />
          </div>
          <Pegination />
        </div>
        </div>
      </div>
    </div>
  );
};
