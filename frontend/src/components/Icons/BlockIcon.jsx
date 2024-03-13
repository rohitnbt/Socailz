import React from "react";

export const BlockIcon = ({ currentPath }) => {
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
            d="M19.53 5.53L5.53 19.53C5.51 19.55 5.5 19.56 5.48 19.57C5.1 19.25 4.75 18.9 4.43 18.52C2.91 16.77 2 14.49 2 12C2 6.48 6.48 2 12 2C14.49 2 16.77 2.91 18.52 4.43C18.9 4.75 19.25 5.1 19.57 5.48C19.56 5.5 19.55 5.51 19.53 5.53Z"
            fill="#FFD400"
          />
          <path
            d="M22 12.0001C22 17.5201 17.52 22.0001 12 22.0001C10.01 22.0001 8.15998 21.4201 6.59998 20.4001L20.4 6.6001C21.42 8.1601 22 10.0101 22 12.0001Z"
            fill="#FFD400"
          />
          <path
            d="M21.77 2.22988C21.47 1.92988 20.98 1.92988 20.68 2.22988L2.23 20.6899C1.93 20.9899 1.93 21.4799 2.23 21.7799C2.38 21.9199 2.57 21.9999 2.77 21.9999C2.97 21.9999 3.16 21.9199 3.31 21.7699L21.77 3.30988C22.08 3.00988 22.08 2.52988 21.77 2.22988Z"
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
            d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.9 5L4.90002 19"
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
