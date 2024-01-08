import Review from './review.js';

class Trip {
    constructor(id, name, destinationCountry, startingDate,endingDate, price, maxNumberOfParticipants, description, imageUri, reviews = []) {
        this.id = id;
        this.name = name;
        this.destinationCountry = destinationCountry;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
        this.price = price;
        this.maxNumberOfParticipants = maxNumberOfParticipants;
        this.description = description;
        this.imageUri = imageUri;
        this.reviews = reviews;
        this.averageRating = this.calculateAverageRating();
    }
    calculateAverageRating() {
        if (this.reviews.length === 0) {
            return 0;
        }
        let sum = 0;
        for (let review of this.reviews) {
            sum += review.rating;
        }
        return sum / this.reviews.length;
    }
}
const tripData = {
    "id": 1,
    "name": "Trip to Paris",
    "destinationCountry": "France",
    "startingDate": "2022-10-01",
    "endingDate": "2022-10-10",
    "price": 1000,
    "maxNumberOfParticipants": 20,
    "description": "Explore the beautiful city of Paris",
    "imageUri": "https://example.com/paris.jpg",
};

export default Trip;