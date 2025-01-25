// src/components/Card.tsx
import React from 'react';

interface CardProps {
    fullName: string;
    email: string;
    phone: string;
    dateTime: string;
    affectedArea: string;
    specificLocation: string;
    fromDate: string;
    fromTime: string;
    toDate: string;
    toTime: string;
    stats: {
        fatalitiesMin: number;
        fatalitiesMax: number;
        injuredMin: number;
        injuredMax: number;
        evacueesMin: number;
        evacueesMax: number;
        costMin: number;
        costMax: number;
    };
}

const Card: React.FC<CardProps> = ({ fullName, email, phone, dateTime, affectedArea, specificLocation, fromDate, fromTime, toDate, toTime, stats }) => {
    return (
        <div className="card">
            <h3>{fullName}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Date and Time: {dateTime}</p>
            <p>Affected Area: {affectedArea}</p>
            <p>Specific Location: {specificLocation}</p>
            <p>From: {fromDate} {fromTime}</p>
            <p>To: {toDate} {toTime}</p>
            <p>Fatalities: {stats.fatalitiesMin} - {stats.fatalitiesMax}</p>
            <p>Injured: {stats.injuredMin} - {stats.injuredMax}</p>
            <p>Evacuees: {stats.evacueesMin} - {stats.evacueesMax}</p>
            <p>Cost: {stats.costMin} - {stats.costMax}</p>
        </div>
    );
};

export default Card;