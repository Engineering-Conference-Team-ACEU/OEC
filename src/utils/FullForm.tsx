// src/components/FullForm.tsx
import React, { useState } from 'react';
import { addDocument } from './../firebaseDatabase';
import './FullForm.css';

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

    return (
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