import React from "react";

export const LeftArrowIcon = ({ currentPath }) => {
  return (
    <>
      {currentPath !== "/help-and-support" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10.77 8.52002L15.82 12.31V17.92C15.82 18.88 14.66 19.36 13.98 18.68L8.79999 13.51C7.96999 12.68 7.96999 11.33 8.79999 10.5L10.77 8.52002Z"
            fill="#FFD400"
          />
          <path
            d="M15.82 6.07993V12.3099L10.77 8.51993L13.98 5.30993C14.66 4.63993 15.82 5.11993 15.82 6.07993Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};
