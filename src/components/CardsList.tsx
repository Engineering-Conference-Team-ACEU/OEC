// src/components/CardList.tsx
import React, { useEffect, useState } from 'react';
import { getAllDocuments } from '../firebaseDatabase';
import Card from './Cards';

const CardList: React.FC = () => {
    const [documents, setDocuments] = useState<any[]>([]);

    useEffect(() => {
        const fetchDocuments = async () => {
            const docs = await getAllDocuments('formData');
            setDocuments(docs);
        };

        fetchDocuments();
    }, []);

    return (
        <div className="card-list">
            {documents.map((doc) => (
                <Card key={doc.id} {...doc} />
            ))}
        </div>
    );
};

export default CardList;