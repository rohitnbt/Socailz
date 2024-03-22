import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import BackArrow from "../../images/icons/back-arrow.svg";
import { BiImageAdd } from "react-icons/bi";
import axios from "axios";
import Cookies from 'js-cookie';

export const EditProfile = () => {
  const [profileBanner, setProfileBanner] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [data, setData] = useState([])
  const bannerRef = useRef(null);
  const pictureRef = useRef(null);
  const userData = Cookies.get('UserData');
  const stringifiedCookieData = JSON.parse(userData);
  const formData = new FormData();

  console.warn(stringifiedCookieData);

  useEffect(() => {
    setProfileBanner("https://demourls.xyz/Pulse-development/img/Maskgroup-new.png");
  }, []);

  const bannerUpload = () => {
    bannerRef.current.click();
  };

  const pictureUpload = () => {
    pictureRef.current.click();
  };

  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    setProfileBanner(file); // Set profileBanner to the file object
     // Append the file object to formData
    
  };

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file); // Set profileBanner to the file object
     // Append the file object to formData
    
  };

  const handleInfoSubmit = async(e) => {
    e.preventDefault();
    console.warn(formData);
    formData.append('profileBanner', profileBanner);
    formData.append('profilePicture', profilePicture);
    const id = "65f52d060b14a726b8aa66fe";
    const response = await axios.patch(`http://localhost:5555/upload/${id}`, formData);
    setData(response.data);
    console.warn(data);
  }
  
  return (
    <div className="EditProfile">
      <div className="page-title">
        <a href="#">
          <img src={BackArrow} alt="" /> <span>Profile</span>
        </a>
      </div>
      <div className="page-body">
        <form onSubmit={handleInfoSubmit}>
          <div className="profile-header">
            <div className="banner-box">
              <img src={data.profileBanner ? `http://localhost:5555/images/${data.profileBanner}` : "https://demourls.xyz/Pulse-development/img/Maskgroup-new.png"} alt="" /> {/* Use profileBanner directly */}
              <div className="upload-btn">
                <input type="file" name="banner" ref={bannerRef} onChange={handleBannerUpload} />
                <BiImageAdd onClick={bannerUpload} />
              </div>
            </div>
            <div className="profile-box-outer">
              <div className="profile-box">
                <div className="profile">
                  <img
                    src={data.profilePicture ? `http://localhost:5555/images/${data.profilePicture}` :"https://demourls.xyz/Pulse-development/img/gal5.png"}
                    alt=""
                  />
                    <div className="upload-btn">
                      <input type="file" name="banner" ref={pictureRef} onChange={handlePictureUpload} />
                      <BiImageAdd onClick={pictureUpload} />
                  </div>
                </div>
              </div>
            </div>
            <div className="user-details">
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="input-field">
              <label htmlFor="bio">Bio</label>
              <textarea name="bio" cols="30" rows="5"></textarea>
            </div>
            <div className="input-field">
              <label htmlFor="location">Location</label>
              <input type="text" name="location" />
            </div>
            <div className="input-field">
              <label htmlFor="website">Website</label>
              <input type="text" name="website" />
            </div>
            <div className="input-field">
              <label htmlFor="birthDate">Birth date</label>
              <input type="date" name="birthDate" placeholder="" />
            </div>
            <div className="input-field">
              <button>Save</button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};
