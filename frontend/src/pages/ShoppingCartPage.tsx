import { useEffect, useState } from "react";
import Trip from "../models/trip";
import ShoppingCard from "../components/ShoppingCard";

const ShoppingCartPage = ({trips} : {trips: Trip[]}): React.JSX.Element => {
    
    
    return (
        <div className="trips">
        <h1>Trips</h1>
        <div className="trips-list">
            {trips.map((trip) => (
                <ShoppingCard key={trip.id} trip={trip} />
            ))}
        </div>
    </div>
    );
}