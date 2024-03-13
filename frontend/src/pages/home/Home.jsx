import React, { useEffect, useState } from "react";
import "./style.scss";
import { StorySlider } from "../../components/storySlider/StorySlider";
import { Tabing } from "../../components/tabing/Tabing";
import { PostLayout } from "../../components/postLayout/PostLayout";
import useFetch from "../../hooks/useFetch";

export const Home = () => {
  const { data, loading } = useFetch("posts");
  const [currentTab, setCurrentTab] = useState("Home");
  const [tabs, setTabs] = useState([]);
  console.warn(data);
  useEffect(()=>{
    const tabss = ["Home", "Following", "Favorite", "Artists"];
    setTabs(tabss)
  },[currentTab]);
  return (
    <div className="homePage">
      <Tabing tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab}/>
      <StorySlider />
      {!loading ? (
        data?.map((item) => <PostLayout key={item.id} item={item} />)
      ) : (
        <div className="post-skeleton">
          <div className="post-skeleton-header">
            <div className="circle skeleton"></div>
            <div className="content">
              <div className="title skeleton"></div>
              <div className="text skeleton"></div>
            </div>
          </div>
          <div className="post-skeleton-body">
            <div className="image skeleton"></div>
            <div className="cantrolls">
              <ul>
                <li className="skeleton"></li>
                <li className="skeleton"></li>
                <li className="skeleton"></li>
              </ul>
              <ul>
                <li className="skeleton"></li>
                <li className="skeleton"></li>
              </ul>
            </div>
            <div className="desc">
              <ul>
                <li className="skeleton"></li>
                <li className="skeleton"></li>
                <li className="skeleton"></li>
              </ul>
              <ul>
                <li className="skeleton"></li>
                <li className="skeleton"></li>
                <li className="skeleton"></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
