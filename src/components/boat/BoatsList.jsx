import {Link} from "react-router-dom";
import Boat from "./Boat";
import {useSelector} from "react-redux";

const BoatsList = () => {
    const boats = useSelector(state => state.boat)

  return (
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {boats.map(boat => (
          <li key={boat.id}>
            <Link to={`/boats/${boat.id}`}>
                <Boat boat={boat} />
            </Link>
          </li>
        ))}
      </ul>
  );
}

export default BoatsList;