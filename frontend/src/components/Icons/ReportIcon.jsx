import React from "react";

export const ReportIcon = ({ currentPath }) => {
  return (
    <>
      {currentPath === "/help-and-support" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18.02 12.3301L16.8 11.1101C16.51 10.8601 16.34 10.4901 16.33 10.0801C16.31 9.63011 16.49 9.18011 16.82 8.85011L18.02 7.65011C19.06 6.61011 19.45 5.61011 19.12 4.82011C18.8 4.04011 17.81 3.61011 16.35 3.61011H5.15002C4.94002 3.62011 4.77002 3.79011 4.77002 4.00011V16.0001C4.77002 16.2101 4.94002 16.3801 5.15002 16.3801H16.35C17.79 16.3801 18.76 15.9401 19.09 15.1501C19.42 14.3501 19.04 13.3601 18.02 12.3301Z"
            fill="#FFD400"
          />
          <path
            d="M5.15002 22C4.74002 22 4.40002 21.66 4.40002 21.25V2.75C4.40002 2.34 4.74002 2 5.15002 2C5.56002 2 5.90002 2.34 5.90002 2.75V21.25C5.90002 21.66 5.56002 22 5.15002 22Z"
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
            d="M5.15002 2V22"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.15002 4H16.35C19.05 4 19.65 5.5 17.75 7.4L16.55 8.6C15.75 9.4 15.75 10.7 16.55 11.4L17.75 12.6C19.65 14.5 18.95 16 16.35 16H5.15002"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </>
  );
};
