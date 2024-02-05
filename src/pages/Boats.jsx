import {Navigation} from "../components";
import {Outlet} from "react-router-dom";

const Boats = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    );
}

export default Boats;
