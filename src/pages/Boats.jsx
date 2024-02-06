import {Navigation} from "../components";
import {Outlet} from "react-router-dom";

const Boats = () => {
    return (
        <div className="flex h-screen">
            <Navigation />
            <div className="min-h-screen w-full overflow-y-scroll p-8">
                <Outlet />
            </div>
        </div>
    );
}

export default Boats;
