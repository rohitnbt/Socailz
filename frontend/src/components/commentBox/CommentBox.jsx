import React, { useState } from "react";
import "./style.scss"

import { AttachIcon } from '../Icons/AttachIcon';
import { SendTextIcon } from '../Icons/SendTextIcon';
import { SendTextIconDisabled } from '../Icons/SendTextIconDisabled';
import { CameraIcon } from "../Icons/CameraIcon";
import { GalleryIcon } from "../Icons/GalleryIcon";
import { StickerIcon } from "../Icons/StickerIcon";
import { SoundIcon } from "../Icons/SoundIcon";
import { LocationIcon } from "../Icons/LocationIcon";
import { DollerIcon } from "../Icons/DollerIcon";

export const CommentBox = ({handleSend}) => {
    const [showAttach, setShowAttach] = useState(false);
    const [text, setText] = useState("");

    const handleAttach = () => {
        setShowAttach(!showAttach)
    }

    const handleSubmit = () => {
      handleSend(text)
      setText("")
    }

  return (
    <div className="comment-box">
      {showAttach && (
        <div className="attach-menu">
          <ul>
            <li><CameraIcon />Camera</li>
            <li><GalleryIcon />Photos</li>
            <li><StickerIcon />Stickers</li>
            <li><SoundIcon />Audio</li>
            <li><LocationIcon />Location</li>
            <li><DollerIcon />Reward</li>
          </ul>
        </div>
      )}
      <span onClick={() => handleAttach()}>
        <AttachIcon />
      </span>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      {text.length ? (
        <span onClick={() => handleSubmit()}>
          <SendTextIcon />
        </span>
      ) : (
        <span>
          <SendTextIconDisabled />
        </span>
      )}
    </div>
  );
};
