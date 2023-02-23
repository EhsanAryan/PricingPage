import React from 'react';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Footer from './Footer';
import Price from './Price';

const Main = () => {
    const { isExtended } = useContext(AppContext);

    return (
        <div className={`main-section ${isExtended ? "main-with-sidebar" : ""}`}>
            <Routes>
                <Route path="/" element={<Price />} />
                <Route path="/pricing" element={<Price />} />
                <Route path="*" element={<Price />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default Main;
