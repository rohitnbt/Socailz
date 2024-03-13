import React from "react";
import "./style.scss";

import { GalleryIcon } from "../../components/Icons/GalleryIcon";
import { VideoIcon } from "../../components/Icons/VideoIcon";

export const MediaHeader = ({currentMedia, setCurrentMedia}) => {
  return (
    <div className="media-header">
      <ul>
        <li onClick={()=>setCurrentMedia("Albums")} className={currentMedia === "Albums" ? "active" : "" }><GalleryIcon currentMedia={currentMedia}/> <span>Albums</span></li>
        <li onClick={()=>setCurrentMedia("Videos")} className={currentMedia === "Videos" ? "active" : "" }><VideoIcon currentMedia={currentMedia} /> <span>Videos</span></li>
      </ul>
    </div>
  );
};
