import React from "react"
import "./style.scss"

export const Save = ({isSaved}) => {
    return(
        <>
        {
            isSaved ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M16.8199 1.90991H7.17995C5.05995 1.90991 3.31995 3.64991 3.31995 5.76991V19.8599C3.31995 21.6599 4.60995 22.4199 6.18995 21.5499L11.0699 18.8399C11.5899 18.5499 12.4299 18.5499 12.9399 18.8399L17.8199 21.5499C19.3999 22.4299 20.6899 21.6699 20.6899 19.8599V5.76991C20.6799 3.64991 18.9499 1.90991 16.8199 1.90991Z" fill="#FFD500"/>
<path d="M11.09 13.2499C10.9 13.2499 10.71 13.1799 10.56 13.0299L9.06003 11.5299C8.77003 11.2399 8.77003 10.7599 9.06003 10.4699C9.35003 10.1799 9.83003 10.1799 10.12 10.4699L11.09 11.4399L14.56 7.96994C14.85 7.67994 15.33 7.67994 15.62 7.96994C15.91 8.25994 15.91 8.73994 15.62 9.02994L11.62 13.0299C11.47 13.1799 11.28 13.2499 11.09 13.2499Z" fill="black"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M14.5 10.6499H9.5" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8.20996V13.21" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        }
        </>
    )
}