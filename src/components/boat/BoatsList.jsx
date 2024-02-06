import {Link} from "react-router-dom";
import Boat from "./Boat";
import {useSelector} from "react-redux";

const BoatsList = () => {
    const boats = useSelector(state => state.boat)

  return (
      <ul className="flex gap-6 flex-wrap justify-center">
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