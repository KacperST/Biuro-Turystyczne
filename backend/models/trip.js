class Trip {
    constructor(id, name, destinationCountry, startingDate,endingDate, price, maxNumberOfParticipants, description, imageUri) {
        this.id = id;
        this.name = name;
        this.destinationCountry = destinationCountry;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
        this.price = price;
        this.maxNumberOfParticipants = maxNumberOfParticipants;
        this.description = description;
        this.imageUri = imageUri;
    }
}
const trip1 = {
    "id": 1,
    "name": "Trip 1",
    "destinationCountry": "Country 1",
    "startingDate": "2022-01-01",
    "endingDate": "2022-01-10",
    "price": 1000,
    "maxNumberOfParticipants": 10,
    "description": "Description 1",
    "imageUri": "image1.jpg"
};

const trip2 = {
    "id": 2,
    "name": "Trip 2",
    "destinationCountry": "Country 2",
    "startingDate": "2022-02-01",
    "endingDate": "2022-02-10",
    "price": 1500,
    "maxNumberOfParticipants": 15,
    "description": "Description 2",
    "imageUri": "image2.jpg"
};

const trip3 = {
    "id": 3,
    "name": "Trip 3",
    "destinationCountry": "Country 3",
    "startingDate": "2022-03-01",
    "endingDate": "2022-03-10",
    "price": 2000,
    "maxNumberOfParticipants": 20,
    "description": "Description 3",
    "imageUri": "image3.jpg"
};
export default Trip;