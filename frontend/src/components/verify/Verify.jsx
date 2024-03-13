import React, { useEffect, useState } from "react";
import GoldVerifyIcon from "../../images/icons/gold-verify.svg";
import SilverVerifyIcon from "../../images/icons/silver-verify.svg";
import SimpleVerifyIcon from "../../images/icons/simple-verify.svg";
import BusinessVerifyIcon from "../../images/icons/business-verify.svg";
import ArtistVerifyIcon from "../../images/icons/artist-verify.svg";
import GoldIcon from "../../images/icons/gold.svg";
import SilverIcon from "../../images/icons/silver.svg";
import SimpleIcon from "../../images/icons/simple.svg";
import BusinessIcon from "../../images/icons/business.svg";
import ArtistIcon from "../../images/icons/artist.svg";

export const Verify = ({ accountType }) => {
  const [icon, setIcon] = useState("");
  useEffect(() => {
    switch (accountType) {
      case "1":
        setIcon(GoldVerifyIcon);
        break;
      case "2":
        setIcon(SilverVerifyIcon);
        break;
      case "3":
        setIcon(SimpleVerifyIcon);
        break;
      case "4":
        setIcon(BusinessVerifyIcon);
        break;
      case "5":
        setIcon(ArtistVerifyIcon);
        break;
      case "6":
        setIcon(GoldIcon);
        break;
      case "7":
        setIcon(SilverIcon);
        break;
      case "8":
        setIcon(SimpleIcon);
        break;
      case "9":
        setIcon(BusinessIcon);
        break;
      case "10":
        setIcon(ArtistIcon);
        break;
      default:
        setIcon(SilverVerifyIcon);
        break;
    }
  }, [accountType]);

  return (
    <>
      <img src={icon} alt="home" className="icon" />
    </>
  );
};
