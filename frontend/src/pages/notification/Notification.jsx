import React from "react";
import "./style.scss";
import { ClearTaskIcon } from "../../components/Icons/ClearTaskIcon";
import { ThreeDotIcon } from "../../components/Icons/ThreeDotIcon";

export const Notification = () => {
  return (
    <div className="notification-page">
      <div className="page-header">
        <h3>Notification</h3>
        <span>
          <ClearTaskIcon />
        </span>
      </div>
      <div className="page-body">
        <div className="tabs">
            <ul>
                <li className="active">All</li>
                <li>Comments</li>
                <li>Mentions</li>
                <li>Subscriptions</li>
                <li>Wallet</li>
            </ul>
        </div>
        <div className="tab-contents">
            <div className="tab1">
                <div className="slides">
                    <div className="slide">
                        <div className="profile">
                            <img src="https://demourls.xyz/Pulse-development/img/account-notification1.svg" alt="" />
                        </div>
                        <div className="content">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe numquam rem eius. Nesciunt, at reprehenderit.</p>
                            <span className="date">yesterday 10:20 PM</span>
                        </div>
                        <div className="menu">
                            <ThreeDotIcon />
                        </div>
                    </div>

                    <div className="slide">
                        <div className="profile">
                            <img src="https://demourls.xyz/Pulse-development/img/account-notification1.svg" alt="" />
                        </div>
                        <div className="content">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe numquam rem eius. Nesciunt, at reprehenderit.</p>
                            <span className="date">yesterday 10:20 PM</span>
                        </div>
                        <div className="additional-content">
                            <img src="https://demourls.xyz/Pulse-development/img/best3.png" alt="" />
                        </div>
                        <div className="menu">
                            <ThreeDotIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
