import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../firebaseConfig';
import './DisasterList.css';

interface Disaster {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    dateTime: string;
    affectedAreas: string[];
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
    disasterType: string;
    specificDisaster: string;
}

const DisasterList: React.FC = () => {
    const [disasters, setDisasters] = useState<Disaster[]>([]);

    useEffect(() => {
        const fetchDisasters = async () => {
            const querySnapshot = await getDocs(collection(db, 'formData'));
            const disasterList: Disaster[] = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Disaster[];
            setDisasters(disasterList);
        };

        fetchDisasters();
    }, []);

    return (
        <div className="disaster-list">
            <h1>Disaster Reports</h1>
            {disasters.map((disaster) => (
                <div key={disaster.id} className="disaster-card">
                    <h2>{disaster.disasterType} - {disaster.specificDisaster}</h2>
                    <p><strong>Reported by:</strong> {disaster.fullName}</p>
                    <p><strong>Email:</strong> {disaster.email}</p>
                    <p><strong>Phone:</strong> {disaster.phone}</p>
                    <p><strong>Date and Time:</strong> {disaster.dateTime}</p>
                    <p><strong>Affected Areas:</strong> {disaster.affectedAreas.join(', ')}</p>
                    <p><strong>Specific Location:</strong> {disaster.specificLocation}</p>
                    <p><strong>From:</strong> {disaster.fromDate} {disaster.fromTime}</p>
                    <p><strong>To:</strong> {disaster.toDate} {disaster.toTime}</p>
                    <div className="stats">
                        <p><strong>Fatalities:</strong> {disaster.stats.fatalitiesMin} - {disaster.stats.fatalitiesMax}</p>
                        <p><strong>Injured/Infected:</strong> {disaster.stats.injuredMin} - {disaster.stats.injuredMax}</p>
                        <p><strong>Evacuees:</strong> {disaster.stats.evacueesMin} - {disaster.stats.evacueesMax}</p>
                        <p><strong>Estimated Cost:</strong> ${disaster.stats.costMin} - ${disaster.stats.costMax}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DisasterList;