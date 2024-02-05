import {useParams} from "react-router-dom";

const BoatDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Boat Details/{id}</h1>
        </div>
    );
}

export default BoatDetails;