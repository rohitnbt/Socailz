import React, { useEffect, useState } from "react";
import "./style.scss"

import { PostLayout } from "../../components/postLayout/PostLayout";

export const Saved = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setData(items);
    }
  }, []);
  const savedPosts = Data.filter(post => post.isSaved);
    return (
        <div className="savdPage">
            <div className="page-header">
                <h3>Saved</h3>
                <a href="#">clear all</a>
            </div>
            <div className="page-body">
            {
                savedPosts.map((item)=>(
                    <PostLayout key={item.id} 
                    item={item}
                    />
                ))
            }
            </div>
        </div>
    )
}