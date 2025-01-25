import React, { useState, useContext, useEffect } from 'react';
import { addDocument, listenToReports } from './../firebaseDatabase';
import './FullForm.css';
import { LanguageContext } from '../contexts/LanguageContext';

const FullForm: React.FC = () => {
    const { translations } = useContext(LanguageContext);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [affectedArea, setAffectedArea] = useState('');
    const [affectedAreas, setAffectedAreas] = useState<string[]>([]);
    const [specificLocation, setSpecificLocation] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toDate, setToDate] = useState('');
    const [toTime, setToTime] = useState('');
    const [stats, setStats] = useState({
        fatalitiesMin: 0,
        fatalitiesMax: 0,
        injuredMin: 0,
        injuredMax: 0,
        evacueesMin: 0,
        evacueesMax: 0,
        costMin: 0,
        costMax: 0,
    });

    const [disasterType, setDisasterType] = useState('');
    const [specificDisaster, setSpecificDisaster] = useState('');
    const [specificDisasters, setSpecificDisasters] = useState<string[]>([]);
    const [alertMessage, setAlertMessage] = useState('');

    const disasterData = {
        Biological: ['Epidemic', 'Infestation', 'Pandemic'],
        Meteorological: ['Avalanche', 'Cold Event', 'Drought', 'Flood', 'Geomagnetic Storm', 'Heat Event', 'Hurricane', 'Hurricane / Typhoon / Tropical Storm', 'Storm - Unspecified / Other', 'Storm Surge', 'Storms and Severe Thunderstorms','Tornado','Wildfire','Winter Storm'],
        Hydrological: ['Avalanche', 'Cold Event', 'Drought', 'Flood', 'Geomagnetic Storm', 'Heat Event', 'Hurricane', 'Hurricane / Typhoon / Tropical Storm', 'Storm - Unspecified / Other', 'Storm Surge', 'Storms and Severe Thunderstorms','Tornado','Wildfire','Winter Storm'],
        Geological: ['Earthquake', 'Landslide', 'Tsunami', 'Volcano'],        
    };

    const handleStatsChange = (field: string, min: number, max: number) => {
        setStats((prevStats) => ({
            ...prevStats,
            [`${field}Min`]: isNaN(min) ? prevStats[`${field}Min`] : min,
            [`${field}Max`]: isNaN(max) ? prevStats[`${field}Max`] : max,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = {
                fullName,
                email,
                phone,
                dateTime,
                affectedAreas,
                specificLocation,
                fromDate,
                fromTime,
                toDate,
                toTime,
                stats,
                disasterType,
                specificDisaster
            };
            console.log("Submitting data:", data);
            const docId = await addDocument('formData', data);
            console.log(`Document written with ID: ${docId}`);
        } catch (error) {
            console.error('Error adding document:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = listenToReports((newReport) => {
            console.log('New report received:', newReport); // Log the new report
            if (newReport.specificLocation && newReport.specificLocation.includes('Hamilton')) {
                console.log('Hamilton found in specificLocation'); // Log when Hamilton is found
                setAlertMessage(`New disaster report in Hamilton: ${newReport.specificDisaster}`);
                setTimeout(() => setAlertMessage(''), 10000);
            } else {
                console.log('Hamilton not found in specificLocation'); // Log when Hamilton is not found
            }
        });
    
        return () => unsubscribe();
    }, []);

    return (
        <form className="full-form" onSubmit={handleSubmit}>
            <div className="form-section">
                <label htmlFor="fullName">{translations.fullForm.name}</label>
                <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>
            <div className="form-section">
                <label htmlFor="email">{translations.fullForm.email}</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-section">
                <label htmlFor="phone">{translations.fullForm.phone}</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className="form-section">
                <label htmlFor="dateTime">{translations.fullForm.dateTime}</label>
                <input
                    type="datetime-local"
                    id="dateTime"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                />
            </div>
            <div className="form-section">
                <label htmlFor="affectedArea">{translations.fullForm.affectedArea}</label>
                <input
                    type="text"
                    id="affectedArea"
                    value={affectedArea}
                    onChange={(e) => setAffectedArea(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && affectedArea) {
                            e.preventDefault();
                            setAffectedAreas((prev) => [...prev, affectedArea]);
                            setAffectedArea('');
                        }
                    }}
                    list="affectedAreaOptions"
                />
                <div id="map">
                    {affectedAreas.map((area, index) => (
                        <div key={index}>{area}</div>
                    ))}
                </div>
            </div>
            <datalist id="affectedAreaOptions">
                {/* Add your options here */}
            </datalist>
            <div className="form-section">
                <label htmlFor="specificLocation">{translations.fullForm.specificLocation}</label>
                <input
                    type="text"
                    id="specificLocation"
                    value={specificLocation}
                    onChange={(e) => setSpecificLocation(e.target.value)}
                />
            </div>
            <div className="form-section">
                <label htmlFor="disasterType">{translations.fullForm.typeOfNaturalDisaster}</label>
                <input
                    type="text"
                    id="disasterType"
                    value={disasterType}
                    onChange={(e) => {
                        setDisasterType(e.target.value);
                        setSpecificDisasters(disasterData[e.target.value] || []);
                    }}
                    list="disasterTypeOptions"
                />
                <datalist id="disasterTypeOptions">
                    {Object.keys(disasterData).map((type) => (
                        <option key={type} value={type} />
                    ))}
                </datalist>
            </div>
            <div className="form-section">
                <label htmlFor="specificDisaster">{translations.fullForm.specificDisaster}</label>
                <input
                    type="text"
                    id="specificDisaster"
                    value={specificDisaster}
                    onChange={(e) => setSpecificDisaster(e.target.value)}
                    list="specificDisasterOptions"
                />
                <datalist id="specificDisasterOptions">
                    {specificDisasters.map((specific, index) => (
                        <option key={index} value={specific} />
                    ))}
                </datalist>
            </div>
            <div className="form-section">
                <label htmlFor="fromDate">{translations.fullForm.fromDate}</label>
                <input
                    type="date"
                    id="fromDate"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                />
            </div>
            <div className="form-section">
                <label htmlFor="fromTime">{translations.fullForm.fromTime}</label>
                <input
                    type="time"
                    id="fromTime"
                    value={fromTime}
                    onChange={(e) => setFromTime(e.target.value)}
                />
            </div>
            <div className="form-section">
                <label htmlFor="toDate">{translations.fullForm.toDate}</label>
                <input
                    type="date"
                    id="toDate"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                />
            </div>
            <div className="form-section">
                <label htmlFor="toTime">{translations.fullForm.toTime}</label>
                <input
                    type="time"
                    id="toTime"
                    value={toTime}
                    onChange={(e) => setToTime(e.target.value)}
                />
            </div>
            <div className="form-section stats-container">
                <div className="stats-header">{translations.fullForm.statistics}</div>
                <div className="stats-item">
                    <label className="stats-label">{translations.fullForm.fatalities}</label>
                    <input type="number" placeholder={translations.fullForm.min} onChange={(e) => handleStatsChange('fatalities', parseFloat(e.target.value), stats.fatalitiesMax)} />
                    <input type="number" placeholder={translations.fullForm.max} onChange={(e) => handleStatsChange('fatalities', stats.fatalitiesMin, parseFloat(e.target.value))} />
                </div>
                <div className="stats-item">
                    <label className="stats-label">{translations.fullForm.injured}</label>
                    <input type="number" placeholder={translations.fullForm.min} onChange={(e) => handleStatsChange('injured', parseFloat(e.target.value), stats.injuredMax)} />
                    <input type="number" placeholder={translations.fullForm.max} onChange={(e) => handleStatsChange('injured', stats.injuredMin, parseFloat(e.target.value))} />
                </div>
                <div className="stats-item">
                    <label className="stats-label">{translations.fullForm.evacuees}</label>
                    <input type="number" placeholder={translations.fullForm.min} onChange={(e) => handleStatsChange('evacuees', parseFloat(e.target.value), stats.evacueesMax)} />
                    <input type="number" placeholder={translations.fullForm.max} onChange={(e) => handleStatsChange('evacuees', stats.evacueesMin, parseFloat(e.target.value))} />
                </div>
                <div className="stats-item">
                    <label className="stats-label">{translations.fullForm.cost}</label>
                    <input type="number" placeholder={translations.fullForm.min} onChange={(e) => handleStatsChange('cost', parseFloat(e.target.value), stats.costMax)} />
                    <input type="number" placeholder={translations.fullForm.max} onChange={(e) => handleStatsChange('cost', stats.costMin, parseFloat(e.target.value))} />
                </div>
            </div>
            <button type="submit">{translations.fullForm.submit}</button>
        </form>
    );
};

export default FullForm;