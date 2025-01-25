import React, { useEffect, useState } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust the path as necessary
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root'); // Ensure this matches your root element

const DisasterAlert = () => {
    const [alert, setAlert] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'formData'), (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const report = change.doc.data();
                    console.log('New report received:', report);
                    if (report.specificLocation && report.specificLocation.includes('Hamilton')) {
                        console.log('Hamilton found in specificLocation');
                        setAlert(`New disaster report in Hamilton: ${report.specificDisaster}`);
                        setIsModalOpen(true);

                        // Send email via SendGrid
                        const sendEmail = async () => {
                            try {
                                const response = await axios.post('https://api.sendgrid.com/v3/mail/send', {
                                    personalizations: [{
                                        to: [{ email: 'redwhiteredagain@gmail.com' }], // Replace with the recipient's email
                                        subject: `Disaster Alert: ${report.specificDisaster} in ${report.specificLocation}`
                                    }],
                                    from: { email: 'your-email@gmail.com' }, // Replace with your email
                                    content: [{
                                        type: 'text/plain',
                                        value: `A new disaster report has been received for ${report.specificLocation} with the following details:\n\nDisaster Type: ${report.specificDisaster}`
                                    }]
                                }, {
                                    headers: {
                                        'Authorization': `Bearer YOUR_SENDGRID_API_KEY`, // Replace with your SendGrid API key
                                        'Content-Type': 'application/json'
                                    }
                                });
                                console.log('Email sent successfully:', response.data);
                            } catch (error) {
                                console.error('Error sending email:', error);
                            }
                        };

                        sendEmail();

                        // Clear alert after 10 seconds
                        setTimeout(() => {
                            setIsModalOpen(false);
                            setAlert(null);
                        }, 10000);
                    }
                }
            });
        });

        return () => {
            console.log('Unsubscribing from Firestore updates');
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