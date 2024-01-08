import express from 'express';
import { createReview, getReviews, updateReview, deleteReview } from '../controllers/reviewController.js';

const reviewRouter = express.Router();
reviewRouter.post('/new', createReview);
reviewRouter.get('/', getReviews);
reviewRouter.put('/:id', updateReview);
reviewRouter.delete('/:id', deleteReview);

export default reviewRouter;

