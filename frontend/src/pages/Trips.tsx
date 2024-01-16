import NavbarComponent from "../components/navbar";
import TripsComponent from "../components/tripsView";
import './styles/tripPage.css';

const Trips = () => {
    return(
        <div className="home">
            <nav className="navbar">
                <NavbarComponent></NavbarComponent>
            </nav>
            <div className="main">
                <TripsComponent></TripsComponent>
            </div>
        </div>

    )
}
export default Trips;