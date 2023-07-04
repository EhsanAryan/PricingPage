import { Checkbox } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SidebarHeader = () => {
    const { setIsExtended, setIsOpen } = useContext(AppContext);

    return (
        <div className="d-flex justify-content-between align-items-center">
            <a href="https://github.com/EhsanAryan" target="_blank" rel="noreferrer"
                className="d-flex justify-content-start align-items-center no-link sidebar-logo">
                <span>
                    <svg width="37" height="37" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0"></path>
                        <path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616"></path>
                        <path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0"></path>
                    </svg>
                </span>
                <span className="ps-2 fs-4 fw-bold text-muted hidden-item">
                    Vuexy
                </span>
            </a>
            <div className="extend-trigger">
                <Checkbox icon={<i className="fa-regular fa-circle"></i>}
                    checkedIcon={<i className="fa-solid fa-circle text-primary"></i>}
                    onChange={(ev) => setIsExtended(ev.target.checked)} 
                    className="main-text-color"/>
            </div>
            <div className="close-trigger">
                <i className="fa-regular fa-circle-xmark"
                onClick={() => setIsOpen(false)}></i>
            </div>
        </div>
    );
}

export default SidebarHeader;
