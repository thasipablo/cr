import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {getSingleBoat} from "../../redux/slices/boatSlice";

const BoatDetails = () => {
    const {id} = useParams();
    // const dispatch = useDispatch()
    //
    // const [boat, setBoat] = useState({})
    //
    // useEffect(() => {
    //     const boat = dispatch(getSingleBoat(id))
    //     setBoat(boat)
    // }, [boat]);

    return (
        <div>
            <h1>Boat Details/{id}</h1>
            {/*<p>{boat.name}</p>*/}
        </div>
    );
};

export default BoatDetails;