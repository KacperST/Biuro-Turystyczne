import NavbarComponent from "../components/navbar";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from  './styles/addTripForm.module.css';

const AddTripForm = ():React.JSX.Element => {
    const [name, setName] = useState("");
    const [destinationCountry, setDestinationCountry] = useState("");
    const [startingDate, setStartingDate] = useState(new Date());
    const [endingDate, setEndingDate] = useState(new Date());
    const [price, setPrice] = useState(0)
    const [maxNumberOfParticipants, setMaxNumberOfParticipants] = useState(100)
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("")
    const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'PLN');
    useEffect(() => {
        const handleStorageChange = () => {
            setCurrency(localStorage.getItem('currency') || 'PLN');
        };
        window.addEventListener('currencyChange', handleStorageChange);
        return () => {
            window.removeEventListener('currencyChange', handleStorageChange);
        };
    },[]);  
    const addTrip = (event: any) => { 
        if(name === "" || destinationCountry === "" || startingDate === null || endingDate === null || maxNumberOfParticipants === 0 || description === "" || image === ""){
            alert("Please fill all the fields")
            event.preventDefault();
            return
        }
        if(startingDate > endingDate){
            alert("Starting date must be before ending date")
            event.preventDefault();
            return
        }
        if(startingDate < new Date()){
            alert("Starting date must be in the future")
            event.preventDefault();
            return
        }
        if(price <= 0){
            alert("Price must be positive")
            event.preventDefault();
            return
        }
        if(maxNumberOfParticipants < 0){
            alert("Max number of participants must be positive")
            event.preventDefault();
            return
        }
        if (description.length > 500 || description.length < 50){
            alert("Description must be between 50 and 500 characters")
            event.preventDefault();
            return
        }
        let updatedPrice = price;
        if(currency === '€') {
            updatedPrice = price * 4.37;
        }
        else if(currency === '$') {
            updatedPrice = price * 4.24;
        }
             
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                destinationCountry: destinationCountry,
                startingDate: startingDate,
                endingDate: endingDate,
                price: updatedPrice,
                maxNumberOfParticipants: maxNumberOfParticipants,
                description: description,
                imageUri: image
            }),
        };
        console.log(requestOptions)
        fetch('http://localhost:5000/api/trips/new', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }
    
    return(
        <div className={styles.home}>
            <nav className="navbar">
                <NavbarComponent></NavbarComponent>
            </nav>
        <div className={styles.container}>
            <form className={styles.addForm} onSubmit={addTrip}>
            <label className={styles.labelInput}>
                Trip name
                <input className={styles.inputStyle}
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                 
                />
            </label>
            <label className={styles.labelInput}>
                Destination country:
                <input className={styles.inputStyle}
                type="text" 
                value={destinationCountry}
                onChange={(e) => setDestinationCountry(e.target.value)}
                />
            </label>
            <div className={styles.dateInput}>
                <label>
                    Starting date:
                    <DatePicker className={styles.dataPicker} selected={startingDate} onChange={(date) => date && setStartingDate(date)} />
                </label>
                <label>
                    Ending date:
                    <DatePicker className={styles.dataPicker} selected={endingDate} onChange={(date) => date && setEndingDate(date)} />
                </label>
            </div>
            <label className={styles.labelInput}>
                Price in {currency}:
                <input className={styles.inputStyle}
                type="number" 
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
                />
            </label>
            <label className={styles.labelInput}>
                Max number of participants:
                <input className={styles.inputStyle}
                type="number" 
                value={maxNumberOfParticipants}
                onChange={(e) => setMaxNumberOfParticipants(parseInt(e.target.value))}
                />
            </label>
            <label className={styles.labelInput}>
                Description:
                <textarea className={styles.descriptionStyle}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <label className={styles.labelInput}>
                Link to image:
                <input className={styles.inputStyle}
                type="text" 
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
            </label>
          <button className={styles.buttonStyle} type="submit"> Add Trip </button>
          </form>
        </div>
        </div>
    )
}
export default AddTripForm;