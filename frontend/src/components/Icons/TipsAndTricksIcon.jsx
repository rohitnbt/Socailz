import React from "react";

export const TipsAndTricksIcon = ({ currentPath }) => {
  return (
    <>
      {currentPath === "/tips-and-tricks" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
            fill="#FFD400"
          />
          <path
            d="M15.5 10.1301C16.5383 10.1301 17.38 9.28841 17.38 8.25012C17.38 7.21182 16.5383 6.37012 15.5 6.37012C14.4617 6.37012 13.62 7.21182 13.62 8.25012C13.62 9.28841 14.4617 10.1301 15.5 10.1301Z"
            fill="black"
          />
          <path
            d="M8.5 10.1301C9.53829 10.1301 10.38 9.28841 10.38 8.25012C10.38 7.21182 9.53829 6.37012 8.5 6.37012C7.4617 6.37012 6.62 7.21182 6.62 8.25012C6.62 9.28841 7.4617 10.1301 8.5 10.1301Z"
            fill="black"
          />
          <path
            d="M15.6 12.9199H8.4C7.7 12.9199 7.13 13.4899 7.13 14.1999C7.13 16.8899 9.32 19.0799 12.01 19.0799C14.7 19.0799 16.89 16.8899 16.89 14.1999C16.88 13.4999 16.3 12.9199 15.6 12.9199Z"
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
            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 9.75C16.3284 9.75 17 9.07843 17 8.25C17 7.42157 16.3284 6.75 15.5 6.75C14.6716 6.75 14 7.42157 14 8.25C14 9.07843 14.6716 9.75 15.5 9.75Z"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 9.75C9.32843 9.75 10 9.07843 10 8.25C10 7.42157 9.32843 6.75 8.5 6.75C7.67157 6.75 7 7.42157 7 8.25C7 9.07843 7.67157 9.75 8.5 9.75Z"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.4 13.3H15.6C16.1 13.3 16.5 13.7 16.5 14.2C16.5 16.69 14.49 18.7 12 18.7C9.51 18.7 7.5 16.69 7.5 14.2C7.5 13.7 7.9 13.3 8.4 13.3Z"
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
