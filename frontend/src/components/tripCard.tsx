import React, { MouseEventHandler, useEffect, useState } from "react";
import Trip from "../models/trip";
import styles from "./styles/tripCardStyle.module.css"
import DeleteIcon from '@mui/icons-material/Delete';


function TripCard({ trip, removeTrip, reserveTrip }: { trip: Trip, removeTrip : MouseEventHandler<HTMLDivElement>, reserveTrip:MouseEventHandler<HTMLButtonElement> }): React.JSX.Element {
    
    const startingDate = new Date(trip.startingDate);
    const formattedStartingDate = `${startingDate.getFullYear()}.${startingDate.getMonth()+1}.${startingDate.getDate()}`;
    const endingDate = new Date(trip.endingDate);
    const formattedEndingDate = `${endingDate.getFullYear()}.${endingDate.getMonth()+1}.${endingDate.getDate()}`;
    const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'PLN');
    let price = trip.price;
    if (currency === '€') {
        price = trip.price / 4.37;
    }
    else if (currency === '$') {
        price = trip.price / 4.24;
    }
    else {
        price = trip.price;
    }

    let formattedPrice = price.toLocaleString();
    useEffect(() => {
        const handleStorageChange = () => {
            setCurrency(localStorage.getItem('currency') || 'PLN');
        };
        window.addEventListener('currencyChange', handleStorageChange);
        return () => {
            window.removeEventListener('currencyChange', handleStorageChange);
        };
    },[]);
    return (
        <div className={styles.tripCard}>
            <img src={trip.imageUri} alt={trip.name} />
            <div className={styles.tripCardInfo}>
                <div className={styles.tripDetails}>
                    <h2 className={styles.tripName}>{trip.name}</h2>
                    <p className={styles.destinationCountry}>{trip.destinationCountry}</p>
                    <p className={styles.description}>{trip.description}</p>

                </div>
                <div className={styles.tripInfo}>
                    <p className={styles.price}>{formattedPrice} {currency}</p>
                    <p className={styles.dateInfo}>
                        {formattedStartingDate} - {formattedEndingDate}
                    </p>
                    <p className={styles.numberOfParticipants}>
                    {trip.numberOfParticipants}/{trip.maxNumberOfParticipants}
                </p>
                <button className={styles.reverseButton} onClick={reserveTrip} disabled={trip.numberOfParticipants === 0}>Rezerwuj</button>
                </div>
            </div>
        <div className={styles.icon} onClick={removeTrip}>
            <DeleteIcon sx={{ color: "white" }}/>
        </div>
        </div>
    );
}
export default TripCard;
