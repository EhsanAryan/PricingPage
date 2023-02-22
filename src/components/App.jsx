import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';

const App = () => {
  const { isDarkMode, setIsOpen, setOpenSearchbar, searchbarRef } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1200) {
        setIsOpen(false);
      }
    });

    document.body.addEventListener("keydown", (ev) => {
      if(ev.key === "/" && ev.ctrlKey) {
        setOpenSearchbar(prevValue => !prevValue);
        setTimeout(() => {
          searchbarRef.current.focus();
      }, 100);
      }
    });
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <div className='position-fixed top-0 left-0 w-100 h-100'>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pricing" element={<Main />} />
          <Route path="*" element={<Main />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
