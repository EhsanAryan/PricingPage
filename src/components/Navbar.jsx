import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import CircleAvatar from './customized-components/CircleAvatar';

const Navbar = () => {

    const { setIsOpen, isDarkMode, setIsDarkMode, openSearchbar, setOpenSearchbar, searchbarRef } = useContext(AppContext);

    const handleOpenSerachbar = (ev) => {
        ev.stopPropagation();
        setOpenSearchbar(true);
        setTimeout(() => {
            searchbarRef.current.focus();
        }, 100);
    }

    useEffect(() => {
        document.body.addEventListener("click", () => {
            setOpenSearchbar(false);
        });
    }, []);

    return (
        <nav className="main-navbar d-flex justify-content-between align-items-center 
        position-relative">
            <div className="d-flex justify-content-start align-items-center">
                <i className="fa-solid fa-bars open-trigger me-4 fs-5"
                    onClick={() => setIsOpen(true)}></i>
                <span className="search-section"
                    onClick={(ev) => handleOpenSerachbar(ev)}>
                    <i class="fa-solid fa-magnifying-glass me-2 text-muted fs-5"></i>
                    <span className="d-none d-md-inline text-muted">Search (Ctrl+/)</span>
                </span>
            </div>

            {/* Start searchbar */}
            <div className={`navbar-searchbar ${openSearchbar ? "" : "d-none"}`}
                onClick={(ev) => ev.stopPropagation()}>
                <input type="text" className="form-control w-100 h-100"
                    placeholder="Search..." ref={searchbarRef} />
                <i class="fa-solid fa-xmark close-searchbar"
                    onClick={() => setOpenSearchbar(false)}></i>
            </div>
            {/* End searchbar */}

            <div className="d-flex justify-content-end align-items-center">
                <CircleAvatar
                    src="https://a-z-animals.com/media/2022/12/iStock-1349796257.jpg"
                    className="me-4 pointer"
                />

                {
                    isDarkMode ?
                        (
                            <i class="fa-solid fa-sun fs-3 me-4 main-text-color pointer"
                                onClick={() => setIsDarkMode(prevValue => !prevValue)}></i>
                        ) : (
                            <i class="fa-solid fa-moon fs-3 me-4 main-text-color pointer"
                                onClick={() => setIsDarkMode(prevValue => !prevValue)}></i>
                        )
                }

                <CircleAvatar
                    src="https://pixlr.com/images/index/remove-bg.webp"
                    hasDot={true}
                    className="pointer"
                />

            </div>

        </nav>
    );
}

export default Navbar;
