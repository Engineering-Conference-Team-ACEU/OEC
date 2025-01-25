import React, { useEffect, useState } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust the path as necessary
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Ensure this matches your root element

const DisasterAlert = () => {
    const [alert, setAlert] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'formData'), (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const report = change.doc.data();
                    console.log('New report received:', report); // Log the new report
                    if (report.specificLocation && report.specificLocation.includes('Hamilton')) {
                        console.log('Hamilton found in specificLocation'); // Log when Hamilton is found
                        setAlert(`New disaster report in Hamilton: ${report.specificDisaster}`);
                        setIsModalOpen(true);
                        setTimeout(() => {
                            setIsModalOpen(false);
                            setAlert(null);
                        }, 10000); // Clear alert after 10 seconds
                    }
                }
            });
        });

        return () => {
            console.log('Unsubscribing from Firestore updates'); // Log unsubscribe action
            unsubscribe();
        };
    }, []);

    return (
        <div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Disaster Alert"
                className="alert-modal"
                overlayClassName="alert-overlay"
            >
                <h2>Disaster Alert</h2>
                <p>{alert}</p>
                <button onClick={() => setIsModalOpen(false)}>Close</button>
            </Modal>
        </div>
    );
};

export default DisasterAlert;