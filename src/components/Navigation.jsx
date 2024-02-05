import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <p>Boat Cruise</p>
            <NavLink to={'/boats'}>Boats</NavLink>
            <NavLink to={'/boats/reservations'}>Reservations</NavLink>
        </nav>
    )
}

export default Navigation;
