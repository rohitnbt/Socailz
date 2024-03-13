import React from "react";

export const CloseBoxIcon = ({ currentPath }) => {
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
            d="M16.24 3.6499H7.76004C5.29004 3.6499 3.29004 5.6599 3.29004 8.1199V17.5299C3.29004 19.9899 5.30004 21.9999 7.76004 21.9999H16.23C18.7 21.9999 20.7 19.9899 20.7 17.5299V8.1199C20.71 5.6499 18.7 3.6499 16.24 3.6499Z"
            fill="#FFD400"
          />
          <path
            d="M14.35 2H9.65001C8.61001 2 7.76001 2.84 7.76001 3.88V4.82C7.76001 5.86 8.60001 6.7 9.64001 6.7H14.35C15.39 6.7 16.23 5.86 16.23 4.82V3.88C16.24 2.84 15.39 2 14.35 2Z"
            fill="black"
          />
          <path
            d="M14.5299 15.6199L13.0799 14.1699L14.4799 12.7699C14.7699 12.4799 14.7699 11.9999 14.4799 11.7099C14.1899 11.4199 13.7099 11.4199 13.4199 11.7099L12.0199 13.1099L10.5699 11.6599C10.2799 11.3699 9.79994 11.3699 9.50994 11.6599C9.21994 11.9499 9.21994 12.4299 9.50994 12.7199L10.9599 14.1699L9.46994 15.6599C9.17994 15.9499 9.17994 16.4299 9.46994 16.7199C9.61994 16.8699 9.80994 16.9399 9.99994 16.9399C10.1899 16.9399 10.3799 16.8699 10.5299 16.7199L12.0199 15.2299L13.4699 16.6799C13.6199 16.8299 13.8099 16.8999 13.9999 16.8999C14.1899 16.8999 14.3799 16.8299 14.5299 16.6799C14.8199 16.3899 14.8199 15.9199 14.5299 15.6199Z"
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
            d="M14 16.16L10.04 12.2"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.96 12.24L10 16.2"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"
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
