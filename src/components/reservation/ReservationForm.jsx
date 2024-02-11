import {useLocation} from "react-router-dom";

const ReservationForm = () => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    return (
        <div>
            <h1>Reservation Form/{searchParams.get('boatId')}</h1>
        </div>
    );
}

export default ReservationForm;
