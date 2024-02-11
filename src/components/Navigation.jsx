import {NavLink} from "react-router-dom";
import {Power} from "lucide-react";

const Navigation = () => {
    return (
        <nav className="hidden sm:flex w-[300px] gap-4 flex-col p-4 border-r-2 border-slate-200 ">
            <div>Boat Cruise</div>
            <div className="flex flex-col gap-2 justify-center uppercase h-full">
                <NavLink to={'/boats/all'} className="p-2">Boats</NavLink>
                <NavLink to={'/boats/new-boat'} className="p-2">New Boat</NavLink>
                <NavLink to={'/reservations'} className="p-2">Reservations</NavLink>
                <NavLink
                    to={'/'}
                    className="transition p-2 mt-4 text-white bg-slate-500 hover:bg-orange-500 rounded flex justify-center gap-2"
                >
                    <Power className="h-5 w-5" />
                    <span>Logout</span>
                </NavLink>
            </div>
            <div className="text-sm">
                &copy; Boat Cruise &middot; 2024
            </div>
        </nav>
    )
}

export default Navigation;
