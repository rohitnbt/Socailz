import React from "react";
import "./style.scss";
import useFetch from "../../hooks/useFetch";

export const MediaView = () => {
  const { data, loading } = useFetch("posts");
  return (
    <>
      <div className="media-view">
        {data?.map((item) => (
          <div className="media-item">
            <figure>
              <img src={item.images || item.avatar} alt="" />
              <figcaption>{item.name}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </>
  );
};
