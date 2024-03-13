import React from "react"


export const PreciousIcon = ({currentPath}) => {
    return(
        <>
        {

        currentPath==="/precious" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21.21 13.24L14.36 20.78C13.06 22.21 10.94 22.21 9.63996 20.78L2.78995 13.24C2.01995 12.39 1.76995 10.85 2.22995 9.8L3.02996 8H20.97L21.77 9.8C22.23 10.85 21.98 12.39 21.21 13.24Z" fill="black"/>
        <path d="M20.97 7.9999H3.03003L4.79002 4.0399C5.26002 2.9999 6.00003 2.1499 7.70003 2.1499H16.3C18 2.1499 18.74 2.9999 19.21 4.0399L20.97 7.9999Z" fill="#FFD500"/>
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M16.29 2.1499H7.69995C5.99995 2.1499 5.24995 2.9999 4.78995 4.0399L2.22995 9.7999C1.76995 10.8399 2.01995 12.3899 2.78995 13.2299L9.64995 20.7699C10.95 22.1899 13.07 22.1899 14.36 20.7699L21.21 13.2199C21.98 12.3699 22.23 10.8299 21.76 9.7899L19.2 4.0299C18.74 2.9999 17.99 2.1499 16.29 2.1499Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.5 8H20.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

        }
        
        </>
    )
}