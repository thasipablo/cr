import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BoatDetails = () => {
    const {id} = useParams();
    // get a single boat from the store by id
    const boat = useSelector(state => state.boat.find(boat => boat.id === Number(id)));

    console.log(boat);

    return (
        <div>
            <h1>Boat Details/{id}</h1>
            <img src={boat.image} alt="boat"/>
            <p>{boat.name}</p>
        </div>
    );
};

export default BoatDetails;