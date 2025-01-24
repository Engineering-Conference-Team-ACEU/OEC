import React from 'react';
import { addDocument } from './firebaseDatabaseHelper';

function AddData() {
    const handleAdd = async () => {
        const data = { name: 'John Doe', age: 30 };
        try {
            const docId = await addDocument('users', data);
            console.log('Document added with ID:', docId);
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    return <button onClick={handleAdd}>Add Data</button>;
}




function FetchAllData() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllDocuments('users');
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>All Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{`${user.name} (${user.age} years old)`}</li>
                ))}
            </ul>
        </div>
    );
}




function UpdateData() {
    const handleUpdate = async () => {
        const updatedData = { age: 35 };
        try {
            await updateDocument('users', 'DOCUMENT_ID', updatedData);
            console.log('Document updated successfully');
        } catch (error) {
            console.error('Error updating document:', error);
        }
    };

    return <button onClick={handleUpdate}>Update Data</button>;
}





function DeleteData() {
    const handleDelete = async () => {
        try {
            await deleteDocument('users', 'DOCUMENT_ID');
            console.log('Document deleted successfully');
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    };

    return <button onClick={handleDelete}>Delete Data</button>;
}


export { AddData, FetchAllData, UpdateData, DeleteData };