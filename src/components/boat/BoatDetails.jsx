import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteBoat, getSingleBoat} from "../../redux/slices/boatSlice";
import {addNewReservation} from "../../redux/slices/reservationSlice";

const BoatDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [boat, setBoat] = useState({})
    // get a single boat from the store by id
    const boat = useSelector(state => state.boat.find(boat => boat.id === Number(id)));

    // useEffect(() => {
    //     setBoat(dispatch(getSingleBoat(id)))
    // }, [id, dispatch]);

    console.log('Boat: ', boat);

    const handleDeleteBoat = (id) => {
        dispatch(deleteBoat(id));
        navigate("/boats/all");
    }

    return (
        <div className="flex flex-col md:flex-row items-center gap-4 h-screen">
            <img src={boat.image} alt="boat" className="md:w-1/2 flex-1"/>
            <div className="flex-1">
                <div className="text-lg text-medium flex gap-3">
                    <div className="w-1/3">Name: </div>
                    <div>{boat?.name}</div>
                </div>
                <div className="flex gap-3">
                    <div className="w-1/3">Price: </div>
                    <div>${ boat?.price }</div>
                </div>
                <div className="flex gap-3">
                    <div className="w-1/3">Description: </div>
                    <div>{ boat?.description }</div>
                </div>
                <div className="mt-6 flex gap-4">
                    <button
                        onClick={() => handleDeleteBoat(boat.id)}
                        className="bg-red-500 hover:bg-red-500/80 text-white p-2 rounded">Delete</button>
                    <Link to={`/reservations/new?boatId=${boat.id}`}
                        className="bg-sky-500 hover:bg-sky-500/80 text-white p-2 rounded">Reserve</Link>
                </div>
            </div>
        </div>
    );
};

export default BoatDetails;