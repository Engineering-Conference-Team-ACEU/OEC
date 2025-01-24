import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import firebaseApp from './Firebase';
// src/firebaseDatabase.js
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';


/**
 * Add a document to a Firestore collection
 * @param {string} collectionName - Name of the Firestore collection
 * @param {Object} data - Data to add to the collection
 * @returns {Promise<string>} - The ID of the newly added document
 */
export const addDocument = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        return docRef.id;
    } catch (error) {
        console.error('Error adding document:', error);
        throw error;
    }
};

/**
 * Get all documents from a Firestore collection
 * @param {string} collectionName - Name of the Firestore collection
 * @returns {Promise<Array<Object>>} - Array of documents from the collection
 */
export const getAllDocuments = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error getting documents:', error);
        throw error;
    }
};

/**
 * Get a single document by ID from a Firestore collection
 * @param {string} collectionName - Name of the Firestore collection
 * @param {string} docId - ID of the document to retrieve
 * @returns {Promise<Object>} - The document data
 */
export const getDocumentById = async (collectionName, docId) => {
    try {
        const docRef = doc(db, collectionName, docId);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
            return { id: docSnapshot.id, ...docSnapshot.data() };
        } else {
            throw new Error('Document not found');
        }
    } catch (error) {
        console.error('Error getting document:', error);
        throw error;
    }
};

/**
 * Update a document in a Firestore collection
 * @param {string} collectionName - Name of the Firestore collection
 * @param {string} docId - ID of the document to update
 * @param {Object} updatedData - Data to update in the document
 * @returns {Promise<void>}
 */
export const updateDocument = async (collectionName, docId, updatedData) => {
    try {
        const docRef = doc(db, collectionName, docId);
        await updateDoc(docRef, updatedData);
    } catch (error) {
        console.error('Error updating document:', error);
        throw error;
    }
};

/**
 * Delete a document from a Firestore collection
 * @param {string} collectionName - Name of the Firestore collection
 * @param {string} docId - ID of the document to delete
 * @returns {Promise<void>}
 */
export const deleteDocument = async (collectionName, docId) => {
    try {
        const docRef = doc(db, collectionName, docId);
        await deleteDoc(docRef);
    } catch (error) {
        console.error('Error deleting document:', error);
        throw error;
    }
};