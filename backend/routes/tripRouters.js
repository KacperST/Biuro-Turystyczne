import express from 'express';
import { createTrip, getTrips, getTrip, updateTrip, deleteTrip, addReviewToTrip } from '../controllers/tripController.js';

const tripRouter = express.Router();
tripRouter.post('/new', createTrip);
tripRouter.get('/', getTrips);
tripRouter.get('/:id', getTrip);
tripRouter.put('/:id', updateTrip);
tripRouter.delete('/:id', deleteTrip);
tripRouter.post('/:id/reviews', addReviewToTrip);

export default tripRouter;