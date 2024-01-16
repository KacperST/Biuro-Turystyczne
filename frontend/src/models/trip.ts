import Review from "./review";

interface Trip {
    id: number;
    name: string;
    destinationCountry: string;
    startingDate: Date;
    endingDate: Date;
    price: number;
    maxNumberOfParticipants: number;
    numberOfParticipants: number;
    description: string;
    imageUri: string;
    reviews: Review[];
    averageRating: number;
}

export default Trip;