import React from "react";

export const RightArrowIcon = ({ currentPath }) => {
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
            d="M13.2301 8.52002L8.18005 12.31V17.92C8.18005 18.88 9.34005 19.36 10.0201 18.68L15.2001 13.5C16.0301 12.67 16.0301 11.32 15.2001 10.49L13.2301 8.52002Z"
            fill="#FFD400"
          />
          <path
            d="M8.18005 6.07993V12.3099L13.2301 8.51993L10.0201 5.30993C9.34005 4.63993 8.18005 5.11993 8.18005 6.07993Z"
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
            d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
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
