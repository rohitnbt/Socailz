import React from "react";

export const PrivacyAndSafetyIcon = ({ currentPath }) => {
  return (
    <>
      {currentPath === "/privacy-and-safety" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18.33 5.67L6.58997 17.41C6.14997 17.85 5.40996 17.79 5.04996 17.27C3.80996 15.46 3.07996 13.32 3.07996 11.12V6.73C3.07996 5.91 3.69996 4.98 4.45996 4.67L10.03 2.39C11.29 1.87 12.69 1.87 13.95 2.39L17.99 4.03999C18.66 4.30999 18.83 5.17 18.33 5.67Z"
            fill="#FFD400"
          />
          <path
            d="M19.27 7.04012C19.92 6.49012 20.91 6.96011 20.91 7.81011V11.1201C20.91 16.0101 17.36 20.5901 12.51 21.9301C12.18 22.0201 11.82 22.0201 11.48 21.9301C10.06 21.5301 8.74 20.8601 7.61 19.9801C7.13 19.6101 7.08001 18.9101 7.50001 18.4801C9.68001 16.2501 16.06 9.75012 19.27 7.04012Z"
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
            d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.63996 20.59 3.08997 16.01 3.08997 11.12V6.73003C3.08997 5.91003 3.70998 4.98004 4.47998 4.67004L10.05 2.39007C11.3 1.88007 12.71 1.88007 13.96 2.39007L19.53 4.67004C20.29 4.98004 20.92 5.91003 20.92 6.73003L20.91 11.12Z"
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
