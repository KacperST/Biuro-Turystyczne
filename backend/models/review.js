class Review {
    constructor(id, userNickname, tripName, review, buyDate, rating) {
        this.id = id;
        this.userNickname = userNickname;
        this.tripName = tripName;
        this.review = review;
        this.buyDate = buyDate;
        this.rating = rating;
    }
}

const review1 = new Review(1, "JohnDoe", "Trip to Paris", "Great experience!", "2022-01-01", 5);
const review2 = new Review(2, "JaneSmith", "Trip to Rome", "Amazing sights!", "2022-02-15", 4);
const review3 = new Review(3, "MikeJohnson", "Trip to London", "Highly recommended!", "2022-03-10", 5);

const jsonReview1 = JSON.stringify(review1);
const jsonReview2 = JSON.stringify(review2);
const jsonReview3 = JSON.stringify(review3);

console.log(jsonReview1);
console.log(jsonReview2);
console.log(jsonReview3);

export default Review;