// src/components/FullForm.tsx
import React, { useState } from 'react';
import { addDocument } from './../firebaseDatabase';
import './FullForm.css';
import { addDocument } from './../firebaseDatabaseHelper'; // Import the addDocument function

const FullForm: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [affectedArea, setAffectedArea] = useState('');
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
    const [disasterTypes, setDisasterTypes] = useState<string[]>([]);
    const [specificDisaster, setSpecificDisaster] = useState('');
    const [specificDisasters, setSpecificDisasters] = useState<string[]>([]);

    const disasterData = {
        Biological: ['Epidemic', 'Infestation', 'Pandemic'],
        Meteorological: ['Avalanche', 'Cold Event', 'Drought', 'Flood', 'Geomagnetic Storm', 'Heat Event', 'Hurricane', 'Hurricane / Typhoon / Tropical Storm', 'Storm - Unspecified / Other', 'Storm Surge', 'Storms and Severe Thunderstorms','Tornado','Wildfire','Winter Storm'],
        Hydrological: ['Avalanche', 'Cold Event', 'Drought', 'Flood', 'Geomagnetic Storm', 'Heat Event', 'Hurricane', 'Hurricane / Typhoon / Tropical Storm', 'Storm - Unspecified / Other', 'Storm Surge', 'Storms and Severe Thunderstorms','Tornado','Wildfire','Winter Storm'],
        Geological: ['Earthquake', 'Landslide', 'Tsunami', 'Volcano'],        
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = {
                fullName,
                email,
                phone,
                dateTime,
                affectedArea,
                specificLocation,
                fromDate,
                fromTime,
                toDate,
                toTime,
                stats
            };
            const docId = await addDocument('formData', data);
            console.log(`Document written with ID: ${docId}`);
        } catch (error) {
            console.error('Error adding document:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {
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
        };

        try {
            const docId = await addDocument('formSubmissions', formData);
            console.log('Document written with ID: ', docId);
            // Optionally, reset the form here
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <form className="full-form" onSubmit={handleSubmit}>
            <div className="form-section">
                <label htmlFor="fullName">Full Name:</label>
                <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
            </div>
            <div className="form-section">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-section">
                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div className="form-section">
                <label htmlFor="dateTime">Date and Time:</label>
                <input
                    type="datetime-local"
                    id="dateTime"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    required
                />
            </div>
            <div className="form-section">
                <label htmlFor="affectedArea">Affected Area:</label>
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
                {/* Options here */}
            </datalist>
            <div className="form-section">
                <label htmlFor="specificLocation">Specific Location:</label>
                <input
                    type="text"
                    id="specificLocation"
                    value={specificLocation}
                    onChange={(e) => setSpecificLocation(e.target.value)}
                />
            </div>
            <div className="form-section">
                <label htmlFor="disasterType">Type of Natural Disaster:</label>
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
                <label htmlFor="specificDisaster">Specific Disaster:</label>
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
                <label htmlFor="fromDate">From Date:</label>
                <input
                    type="date"
                    id="fromDate"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                />
            </div>
            <div className="form-section">
                <label htmlFor="fromTime">From Time:</label>
                <input
                    type="time"
                    id="fromTime"
                    value={fromTime}
                    onChange={(e) => setFromTime(e.target.value)}
                />
            </div>
            <div className="form-section">
                <label htmlFor="toDate">To Date:</label>
                <input
                    type="date"
                    id="toDate"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                />
            </div>
            <div className="form-section">
                <label htmlFor="toTime">To Time:</label>
                <input
                    type="time"
                    id="toTime"
                    value={toTime}
                    onChange={(e) => setToTime(e.target.value)}
                />
            </div>
            <div className="form-section stats-container">
                <div className="stats-header">Statistics</div>
                <div className="stats-item">
                    <label className="stats-label">Number of Fatalities</label>
                    <input type="number" placeholder="Min" onChange={(e) => handleStatsChange('fatalities', parseFloat(e.target.value), NaN)} />
                    <input type="number" placeholder="Max" onChange={(e) => handleStatsChange('fatalities', NaN, parseFloat(e.target.value))} />
                </div>
                <div className="stats-item">
                    <label className="stats-label">Number of Injured / Infected</label>
                    <input type="number" placeholder="Min" onChange={(e) => handleStatsChange('injured', parseFloat(e.target.value), NaN)} />
                    <input type="number" placeholder="Max" onChange={(e) => handleStatsChange('injured', NaN, parseFloat(e.target.value))} />
                </div>
                <div className="stats-item">
                    <label className="stats-label">Number of Evacuees</label>
                    <input type="number" placeholder="Min" onChange={(e) => handleStatsChange('evacuees', parseFloat(e.target.value), NaN)} />
                    <input type="number" placeholder="Max" onChange={(e) => handleStatsChange('evacuees', NaN, parseFloat(e.target.value))} />
                </div>
                <div className="stats-item">
                    <label className="stats-label">Estimated Total Cost</label>
                    <input type="number" placeholder="Min" onChange={(e) => handleStatsChange('cost', parseFloat(e.target.value), NaN)} />
                    <input type="number" placeholder="Max" onChange={(e) => handleStatsChange('cost', NaN, parseFloat(e.target.value))} />
                </div>
            </div>
            <button type="submit">Submit</button>
        <form onSubmit={handleSubmit}>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
            <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
            <input type="text" value={affectedArea} onChange={(e) => setAffectedArea(e.target.value)} placeholder="Affected Area" />
            <input type="text" value={specificLocation} onChange={(e) => setSpecificLocation(e.target.value)} placeholder="Specific Location" />
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
            <input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} />
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
            <input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} />
            <input type="number" value={stats.fatalitiesMin} onChange={(e) => setStats({ ...stats, fatalitiesMin: parseInt(e.target.value) })} placeholder="Fatalities Min" />
            <input type="number" value={stats.fatalitiesMax} onChange={(e) => setStats({ ...stats, fatalitiesMax: parseInt(e.target.value) })} placeholder="Fatalities Max" />
            <input type="number" value={stats.injuredMin} onChange={(e) => setStats({ ...stats, injuredMin: parseInt(e.target.value) })} placeholder="Injured Min" />
            <input type="number" value={stats.injuredMax} onChange={(e) => setStats({ ...stats, injuredMax: parseInt(e.target.value) })} placeholder="Injured Max" />
            <input type="number" value={stats.evacueesMin} onChange={(e) => setStats({ ...stats, evacueesMin: parseInt(e.target.value) })} placeholder="Evacuees Min" />
            <input type="number" value={stats.evacueesMax} onChange={(e) => setStats({ ...stats, evacueesMax: parseInt(e.target.value) })} placeholder="Evacuees Max" />
            <input type="number" value={stats.costMin} onChange={(e) => setStats({ ...stats, costMin: parseInt(e.target.value) })} placeholder="Cost Min" />
            <input type="number" value={stats.costMax} onChange={(e) => setStats({ ...stats, costMax: parseInt(e.target.value) })} placeholder="Cost Max" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FullForm;
