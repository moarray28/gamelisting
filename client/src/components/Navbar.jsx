import React, { useState, useEffect } from "react";
import icon from "../assets/icon.svg";

export default function Navbar() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : prefersDarkMode;
  });

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);

  return (
    <div className={`flex  m-3 justify-between items-center p-4 bg-transparent dark:text-white  text-slate-950`}>
      <span className="flex items-center text-3xl">
        <img src={icon} className="h-7 w-7 mr-2" alt="icon" />
        EpicPlay
      </span>

      <span className="text-4xl cursor-pointer" onClick={toggleDarkMode}>
        {isDarkMode ? <ion-icon name="sunny"></ion-icon> : <ion-icon name="moon"></ion-icon>}
      </span>
    </div>
  );
}
