import React from "react";

export const CrossIcon = ({ currentPath }) => {
  return (
    <>
      {currentPath === "white" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3.80496 4.16L10.325 10.68C11.095 11.45 11.095 12.71 10.325 13.48L3.80497 20"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 19.9198L12.48 13.3998C11.71 12.6298 11.71 11.3698 12.48 10.5998L19 4.07983"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke="#FFD400"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.36436 8.04028L11.6407 11.3166C12.0276 11.7036 12.0276 12.3367 11.6407 12.7237L8.36436 16"
            stroke="#FFD400"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 15.9597L12.7237 12.6834C12.3367 12.2964 12.3367 11.6633 12.7237 11.2763L16 8"
            stroke="#FFD400"
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
