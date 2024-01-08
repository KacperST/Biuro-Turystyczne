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

let something = {
    "id": 1,
    "userNickname": "John",
    "tripName": "Trip to Paris",
    "review": "It was a great trip",
    "buyDate": "2021-10-01",
    "rating": 5
}

export default Review;