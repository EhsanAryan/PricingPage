import React from 'react';

const Footer = () => {
    let date = new Date().getFullYear();

    return (
        <footer className="w-100 main-text-color mt-4 mb-3 
        d-flex flex-column justify-content-start align-items-center 
        flex-md-row justify-content-md-between">
            <div>
                ©
                <span className="ms-1">{date}</span>,
                Made by
                <a href="https://github.com/EhsanAryan" target="_blank"
                    rel="noreferrer" className="mx-1 no-link">
                    <i class="fa-brands fa-github fs-4 account-icon"></i>
                </a>
            </div>
            <ul className="list-unstyled d-flex justify-content-arround align-items-center 
            my-2 my-md-0">
                <li className="mx-2"><a href="https://github.com/EhsanAryan" className="no-link main-text-color" 
                target="_blank" rel="noreferrer">
                    License</a></li>
                <li className="mx-2"><a href="https://github.com/EhsanAryan" className="no-link main-text-color" 
                target="_blank" rel="noreferrer">
                    More</a></li>
                <li className="mx-2"><a href="https://github.com/EhsanAryan" className="no-link main-text-color" 
                target="_blank" rel="noreferrer">
                    Themes</a></li>
                <li className="mx-2"><a href="https://github.com/EhsanAryan" className="no-link main-text-color" 
                target="_blank" rel="noreferrer">
                    Documentation</a></li>
                <li className="mx-2"><a href="https://github.com/EhsanAryan" className="no-link main-text-color" 
                target="_blank" rel="noreferrer">
                    Support</a></li>
            </ul>
        </footer>
    );
}
    

export default Footer;
