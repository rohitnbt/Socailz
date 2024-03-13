import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import BackArrow from "../../images/icons/back-arrow.svg";
import { BiImageAdd } from "react-icons/bi";
import axios from "axios";

export const EditProfile = () => {
  const [profileBanner, setProfileBanner] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    setProfileBanner("https://demourls.xyz/Pulse-development/img/Maskgroup-new.png");
  }, []);

  const bannerUpload = () => {
    bannerRef.current.click();
  };

  const handleBannerUpload = async(e) => {
    const file = e.target.files[0];
    setProfileBanner(URL.createObjectURL(file)); // Set profileBanner to the file object
    const formData = new FormData();
    formData.append('profileBanner', file); // Append the file object to formData
    await axios.post('http://localhost:5555/upload', formData);
  };
  
  return (
    <div className="EditProfile">
      <div className="page-title">
        <a href="#">
          <img src={BackArrow} alt="" /> <span>Profile</span>
        </a>
      </div>
      <div className="page-body">
        <form>
          <div className="profile-header">
            <div className="banner-box">
              <img src={profileBanner} alt="" /> {/* Use profileBanner directly */}
              <div className="upload-btn">
                <input type="file" name="banner" ref={bannerRef} onChange={handleBannerUpload} />
                <BiImageAdd onClick={bannerUpload} />
              </div>
            </div>
            <div className="profile-box-outer">
              <div className="profile-box">
                <div className="profile">
                  <img
                    src="https://demourls.xyz/Pulse-development/img/gal5.png"
                    alt=""
                  />
                    <div className="upload-btn">
                      <input type="file" name="banner" ref={bannerRef} onChange={handleBannerUpload} />
                      <BiImageAdd onClick={bannerUpload} />
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
