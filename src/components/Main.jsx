import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Price from './Price';
import Navbar from './Navbar';
import Footer from './Footer';

const Main = () => {
    const { isExtended, setIsOpen, isOpen } = useContext(AppContext);

    return (
        <div className={`main-section ${isExtended ? "main-with-sidebar" : ""}`}>
            <Navbar />
            <Price />
            <Footer />
            {/* Start sidebar modal */}
            <div className={`sidebar-modal-base ${isOpen ? "" : "d-none"}`}
                onClick={() => setIsOpen(false)}>
            </div>
            {/* End sidebar modal */}
        </div>
    );
}

export default Main;
