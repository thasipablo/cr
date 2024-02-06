import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="w-[300px] flex gap-4 flex-col p-4 border-r-2 border-slate-200">
            <div>Boat Cruise</div>
            <div className="flex flex-col gap-2 justify-center uppercase h-full">
                <NavLink to={'/boats/all'}>Boats</NavLink>
                <NavLink to={'/boats/new-boat'}>New Boat</NavLink>
                <NavLink to={'/boats/reservations'}>Reservations</NavLink>
            </div>
            <div className="text-sm">
                &copy; Boat Cruise &middot; 2024
            </div>
        </nav>
    )
}

export default Navigation;
