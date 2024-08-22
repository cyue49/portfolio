import React, { useState, useEffect, createContext } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import Home from './pages/Home'

export const LanguageContext = createContext()

function App() {
    // language and theme states 
    const [language, setLanguage] = useState('en');
    const [theme, setTheme] = useState('dark');

    // toggle language
    const handleLanguage = () => {
        language === 'en' ? setLanguage('fr') : setLanguage('en')
    }

    // toggle theme
    const handleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    // set theme
    useEffect(() => {
        const themes = ['dark', 'light']
        themes.forEach(theme => document.body.classList.remove(theme))
        document.body.classList.add(theme)
    }, [theme])

    return (
        <LanguageContext.Provider value={language}>
            <div className='fixed top-4 left-4 z-10 flex flex-row items-center justify-start gap-4'>
                <div className='bg-darkColor border border-lightColor rounded-full font-bold py-2 px-3 cursor-pointer uppercase hover:bg-primaryColor hover:border-primaryColor shadow-type-1 hover-animation' onClick={handleLanguage}>{language}</div>
                <FontAwesomeIcon icon={faCircleHalfStroke} className='text-3xl text-lightColor hover:text-primaryColor hover-animation' onClick={handleTheme} />
            </div>


            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </LanguageContext.Provider>
    );
}

export default App;
