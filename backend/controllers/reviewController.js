import firebase from "../firebase.js";
import Review from "../models/review.js";
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

const createReview = async (req, res, next) => {
    try {
        const review = req.body;
        await addDoc(collection(db, "reviews"), review);
        res.status(201).send("Review created successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getReviews = async (req, res, next) => {
    try {
        const reviews = [];
        const response = await getDocs(collection(db, "reviews"));
        response.forEach((doc) => {
            const review = new Review(
                doc.id,
                doc.data().userNickname,
                doc.data().tripName,
                doc.data().review,
                doc.data().buyDate,
                doc.data().rating
            );
            reviews.push(review);
        });
        res.status(200).send(reviews);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const deleteReview = async (req, res, next) => {
    try {
        const id = req.params.id;
        await deleteDoc(doc(db, "reviews", id));
        res.status(200).send("Review deleted successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateReview = async (req, res, next) => {
    try {
        const id = req.params.id;
        const review = doc(db, "reviews", id);
        await updateDoc(review, req.body);
        res.status(200).send("Review updated successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export { createReview, getReviews, updateReview, deleteReview };