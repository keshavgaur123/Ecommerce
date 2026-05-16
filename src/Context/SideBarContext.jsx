import React, { useState, createContext } from "react";

export const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SideBarContext.Provider
      value={{ isOpen, setIsOpen, handleClose, toggleSidebar }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;