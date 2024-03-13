import React, { useState, useEffect } from "react";
import "./style.scss"
import { Link, useLocation } from "react-router-dom";
import { SettingMenu } from "./SettingMenu";
import { SupportMenu } from "./SupportMenu";
import { WalletIcon } from "../../Icons/WalletIcon";
import { MembershipIcon } from "../../Icons/MembershipIcon";
import { PreciousListIcon } from "../../Icons/PreciousListIcon";
import { ProfileTrafficIcon } from "../../Icons/ProfileTrafficIcon";
import { VerificationIcon } from "../../Icons/VerificationIcon";
import { HomeIcon } from "../../Icons/HomeIcon";
import { SettingIcon } from "../../Icons/SettingIcon";
import { SupportIcon } from "../../Icons/SupportIcon";
import { AppearanceIcon } from "../../Icons/AppearanceIcon";
import { LogoutIcon } from "../../Icons/LogoutIcon";

export const MoreMenu = ({setShowMore}) => {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState('');
    const [showSetting, setShowSetting] = useState(false);
    const [showSupport, setShowSupport] = useState(false);

    useEffect(() => {
        setCurrentPath(location.pathname);
      }, [location.pathname]);

    const handleSetting = () => {
        setShowSetting(!showSetting);
        setShowSupport(false);
    }

    const handleSupport = () => {
        setShowSupport(!showSupport);
        setShowSetting(false);
    }
    return (
        <div className="moreMenu">
            <ul>
            <li><Link to="/wallet" onClick={()=>setShowMore(false)}><WalletIcon currentPath={currentPath} /><span>Wallet</span></Link></li>
            <li><Link to="/memberships" onClick={()=>setShowMore(false)}><MembershipIcon currentPath={currentPath} /><span>Memberships</span></Link></li>
            <li><Link to="/preciousList" onClick={()=>setShowMore(false)}><PreciousListIcon currentPath={currentPath} /><span>Precious List</span></Link></li>
            <li><Link to="/profileTraffic" onClick={()=>setShowMore(false)}><ProfileTrafficIcon currentPath={currentPath} /><span>Profile Traffic</span></Link></li>
            <li><Link to="/verification" onClick={()=>setShowMore(false)}><VerificationIcon currentPath={currentPath} /><span>Verification</span></Link></li>
            <li><Link onClick={()=>handleSetting()}><SettingIcon /><span>Setting</span></Link></li>
            {
                showSetting && <SettingMenu setShowMore={setShowMore}/>
            }
            
            <li><Link onClick={()=>handleSupport()}><SupportIcon /><span>Support</span></Link></li>
            {
                showSupport && <SupportMenu setShowMore={setShowMore} />
            }
            <li><Link to="/appearance" onClick={()=>setShowMore(false)}><AppearanceIcon currentPath={currentPath} /><span>Appearance</span></Link></li>
            <li><Link to=""><LogoutIcon /><span>Log out</span></Link></li>
            </ul>
        </div>
    )
}