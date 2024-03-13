import React from "react";

export const CrossBoxIcon = ({ currentPath }) => {
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
            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
            fill="#FFD400"
          />
          <path
            d="M13.06 12.0001L15.36 9.70011C15.65 9.41011 15.65 8.93011 15.36 8.64011C15.07 8.35011 14.59 8.35011 14.3 8.64011L12 10.9401L9.69998 8.64011C9.40998 8.35011 8.92999 8.35011 8.63999 8.64011C8.34999 8.93011 8.34999 9.41011 8.63999 9.70011L10.94 12.0001L8.63999 14.3001C8.34999 14.5901 8.34999 15.0701 8.63999 15.3601C8.78999 15.5101 8.97999 15.5801 9.16999 15.5801C9.35999 15.5801 9.54998 15.5101 9.69998 15.3601L12 13.0601L14.3 15.3601C14.45 15.5101 14.64 15.5801 14.83 15.5801C15.02 15.5801 15.21 15.5101 15.36 15.3601C15.65 15.0701 15.65 14.5901 15.36 14.3001L13.06 12.0001Z"
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
            d="M9.17004 14.8299L14.83 9.16992"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.83 14.8299L9.17004 9.16992"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};
