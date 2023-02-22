import { useRef } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext({
    isExtended: false,
    setIsExtended: () => { },
    isOpen: false,
    setIsOpen: () => { },
    isDarkMode: false,
    setIsDarkMode: () => { },
    openSearchbar: false,
    setOpenSearchbar: () => {},
    searchbarRef: null
});

const AppContextContainer = ({ children }) => {
    const [isExtended, setIsExtended] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [openSearchbar, setOpenSearchbar] = useState(false);

    const searchbarRef = useRef(null);

    return (
        <AppContext.Provider value={{
            isExtended,
            setIsExtended,
            isOpen,
            setIsOpen,
            isDarkMode,
            setIsDarkMode,
            openSearchbar,
            setOpenSearchbar,
            searchbarRef
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextContainer;
