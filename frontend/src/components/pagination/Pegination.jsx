import React from "react";
import "./style.scss";

import { LeftArrowIcon } from "../../components/Icons/LeftArrowIcon";
import { RightArrowIcon } from "../../components/Icons/RightArrowIcon";

export const Pegination = () => {
  return (
    <div className="pagination">
      <span className="left">
        <LeftArrowIcon />
      </span>
      <ul className="center">
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>...</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </ul>
      <span className="right">
        <RightArrowIcon />
      </span>
    </div>
  );
};
