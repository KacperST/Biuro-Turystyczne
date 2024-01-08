import firebase from "../firebase.js";
import Trip from "../models/trip.js";
import { getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
 } from "firebase/firestore";

const db = getFirestore(firebase);

const createTrip = async (req, res, next) => {
    try {
        const trip = req.body;
        await addDoc(collection(db, "trips"), trip);
        res.status(201).send("Trip created successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getTrips = async (req, res, next) => {
    try {
        const trips = [];
        const response = await getDocs(collection(db, "trips"));
        response.forEach((doc) => {
            const trip = new Trip(
                doc.id,
                doc.data().name,
                doc.data().destinationCountry,
                doc.data().startingDate,
                doc.data().endingDate,
                doc.data().price,
                doc.data().maxNumberOfParticipants,
                doc.data().description,
                doc.data().imageUri
            );
            trips.push(trip);
        });
        res.status(200).send(trips);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getTrip = async (req, res, next) => {
    try {
        const id = req.params.id;
        const trip = doc(db, "trips", id);
        const docSnap = await getDoc(trip);
        if (docSnap.exists()) {
            const trip = new Trip(
                docSnap.id,
                docSnap.data().name,
                docSnap.data().destinationCountry,
                docSnap.data().startingDate,
                docSnap.data().endingDate,
                docSnap.data().price,
                docSnap.data().maxNumberOfParticipants,
                docSnap.data().description,
                docSnap.data().imageUri
            );
            res.status(200).send(trip);
        } else {
            res.status(404).send("Trip not found");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateTrip = async (req, res, next) => {
    try {
        const id = req.params.id;
        const trip = req.body;
        const docRef = doc(db, "trips", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            await updateDoc(docRef, trip);
            res.status(200).send("Trip updated successfully");
        } else {
            res.status(404).send("Trip not found");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const deleteTrip = async (req, res, next) => {
    try {
        const id = req.params.id;
        const docRef = doc(db, "trips", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            await deleteDoc(docRef);
            res.status(200).send("Trip deleted successfully");
        } else {
            res.status(404).send("Trip not found");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export { createTrip, getTrips, getTrip, updateTrip, deleteTrip };