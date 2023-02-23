import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import CutsomButton from './customized-components/CutsomButton';
import Main from './Main';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const App = () => {
  const { isDarkMode, isOpen, setIsOpen, setOpenSearchbar, searchbarRef } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1200) {
        setIsOpen(false);
      }
    });

    document.body.addEventListener("keydown", (ev) => {
      if (ev.key === "/" && ev.ctrlKey) {
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

      <div className='position-fixed top-0 left-0 w-100 h-100 p-0 m-0'>
        <Sidebar />
        <Navbar />
        <Main />

        <CutsomButton
          backgroundColor="#ea5455"
          color="#fff"
          hoverBackgroundColor="#cf4b4b"
          href="https://google.com"
          className="buy-button"
        >
          Buy now
        </CutsomButton>

        {/* Start sidebar modal */}
        <div className={`sidebar-modal-base ${isOpen ? "" : "d-none"}`}
          onClick={() => setIsOpen(false)}>
        </div>
        {/* End sidebar modal */}
      </div>

  );
}

export default App;
