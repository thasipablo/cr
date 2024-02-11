import { Trash2 } from "lucide-react";
import {useSelector} from "react-redux";

const ReservationsList = () => {
    const reservations = useSelector(state => state.reservation);

    return (
        <div>
            <h1 className="font-bold uppercase text-xl pb-6">Reservations</h1>
            <table>
                <thead>
                    <tr>
                        <th>Boat</th>
                        <th>Guests</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {reservations.map((reservation, index) => (
                    <tr key={index}>
                        <td>{reservation.boat.name}</td>
                        <td>{reservation.guests}</td>
                        <td>${reservation.boat.price}</td>
                        <td>{reservation.date}</td>
                        <td>
                            <button className="text-red-500 hover:text-red-500/80 p-2 rounded-full">
                                <Trash2 className="w-5 h-5"/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReservationsList;
