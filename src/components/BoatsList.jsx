import {Link} from "react-router-dom";
import Boat from "./Boat";

const BoatsList = () => {
    const boats = [
        {id: 1, name: 'Boat 1'},
        {id: 2, name: 'Boat 2'},
        {id: 3, name: 'Boat 3'},
        {id: 4, name: 'Boat 4'},
        {id: 5, name: 'Boat 5'},
    ]

  return (
    <div>
      <h1>Boats</h1>
      <ul>
        {boats.map(boat => (
          <li key={boat.id}>
            <Link to={`/boats/${boat.id}`}>
                <Boat boat={boat} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoatsList;