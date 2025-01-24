import React, { useState, useContext } from 'react';
import '../styles/Report.css';
import { LanguageContext } from '../contexts/LanguageContext';

const Report = () => {
    const { translations } = useContext(LanguageContext); // Get translations from context
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="report-container">
            <button className="report-button" onClick={handleButtonClick}>
                {translations.report.fileReport}
            </button>
            {showPopup && (
                <div className="popup">
                    <button className="close-button" onClick={handleClosePopup}>Close</button>
                    {/* Add your popup content here */}
                </div>
            )}
        </div>
    );
};

export default Report;