import React, { useState } from 'react';
import './FullForm.css';

const FullForm: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [affectedArea, setAffectedArea] = useState('');
    const [specificLocation, setSpecificLocation] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [affectedAreas, setAffectedAreas] = useState<string[]>([]);
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

    const handleStatsChange = (field: string, min: number, max: number) => {
        setStats((prevStats) => ({
            ...prevStats,
            [`${field}Min`]: min,
            [`${field}Max`]: max,
        }));
    };

    return (
        <form className="full-form">
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
                <option value="Toronto" />
                <option value="Montreal" />
                <option value="Vancouver" />
                <option value="Calgary" />
                <option value="Edmonton" />
                <option value="Ottawa" />
                <option value="Winnipeg" />
                <option value="Quebec City" />
                <option value="Hamilton" />
                <option value="Kitchener" />
                <option value="London" />
                <option value="Victoria" />
                <option value="Halifax" />
                <option value="Oshawa" />
                <option value="Windsor" />
                <option value="Saskatoon" />
                <option value="St. Catharines" />
                <option value="Regina" />
                <option value="St. John's" />
                <option value="Kelowna" />
                <option value="Barrie" />
                <option value="Sherbrooke" />
                <option value="Guelph" />
                <option value="Abbotsford" />
                <option value="Kingston" />
                <option value="Kanata" />
                <option value="Trois-Rivières" />
                <option value="Moncton" />
                <option value="Chicoutimi" />
                <option value="Milton" />
                <option value="Red Deer" />
                <option value="Brantford" />
                <option value="Thunder Bay" />
                <option value="White Rock" />
                <option value="Nanaimo" />
                <option value="Sudbury" />
                <option value="Lethbridge" />
                <option value="Saint John" />
                <option value="Peterborough" />
                <option value="Kamloops" />
                <option value="Sarnia" />
                <option value="Sault Ste. Marie" />
                <option value="Chilliwack" />
                <option value="Prince George" />
                <option value="Drummondville" />
                <option value="Belleville" />
                <option value="Fort McMurray" />
                <option value="Grande Prairie" />
                <option value="Fredericton" />
                <option value="North Bay" />
                <option value="Cornwall" />
                <option value="Medicine Hat" />
                <option value="Airdrie" />
                <option value="Spruce Grove" />
                <option value="Lloydminster" />
                <option value="Orillia" />
                <option value="Timmins" />
                <option value="Leamington" />
                <option value="Stratford" />
                <option value="Orangeville" />
                <option value="Bradford" />
                <option value="Woodstock" />
                <option value="Innisfil" />
                <option value="Saint-Hyacinthe" />
                <option value="Brockville" />
                <option value="Moose Jaw" />
                <option value="Midland" />
                <option value="Parksville" />
                <option value="Courtenay" />
                <option value="Penticton" />
                <option value="Yellowknife" />
                <option value="Iqaluit" />
                <option value="Whitehorse" />
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
        </form>
    );
};

export default FullForm;