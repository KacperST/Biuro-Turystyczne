import { useEffect, useState } from "react";
import TripCard from "./tripCard";
import Trip from "../models/trip";
import './styles/tripViewStyle.css';

export default function TripsComponent() {
    const [trips, setTrips] = useState<Trip[]>([]);
    const [loading, setLoading] = useState(true);
    
    const getData = async () => {
        const response = await fetch("http://localhost:5000/api/trips");
        const data = await response.json();
        console.log(data)
        return data;
    }
    useEffect(() => {
        getData().then((data) => {
            setTrips(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    const removeTrip = async (event: any, trip: Trip) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: trip.id
            }),
        };
        await fetch(`http://localhost:5000/api/trips/${trip.id}`, requestOptions)
        .then((response) =>{
            if(response.ok && response.status === 200) {
               getData().then((data) => {
                setTrips(data);
               });
                console.log("Usunięto wycieczkę")
            }
            else{
                alert("Nie udało się usunąć wycieczki")
            }
        }
        )
    }
    const reserveTrip = async (event: any, trip: Trip) => {
        trip.numberOfParticipants -= 1;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: trip.name,
                destinationCountry: trip.destinationCountry,
                startingDate: trip.startingDate,
                endingDate: trip.endingDate,
                price: trip.price,
                maxNumberOfParticipants: trip.maxNumberOfParticipants,
                description: trip.description,
                imageUri: trip.imageUri,
                numberOfParticipants: trip.numberOfParticipants
            }),
        };
        console.log("xdd")
        await fetch(`http://localhost:5000/api/trips/${trip.id}`, requestOptions)
        .then((response) =>{
            if(response.ok && response.status === 200) {
                getData().then((data) => {
                    setTrips(data);
                   }
                );
                console.log("Zarezerwowano wycieczkę")
            }
            else{
                alert("Nie udało się zarezerwować wycieczki")
            }
        }
        )
    }

    return (
        <div className="trips">
            <h1>Trips</h1>
            <div className="trips-list">
                {trips.map((trip) => (
                    <TripCard key={trip.id} trip={trip} removeTrip={event => removeTrip(event, trip)} reserveTrip={event => reserveTrip(event, trip)} />
                ))}
            </div>
        </div>
    );
}