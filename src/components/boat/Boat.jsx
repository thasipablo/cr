const Boat = ({boat}) => {
    return (
        <div
            className="max-w-sm bg-white rounded-lg dark:bg-gray-800 text-center">
                <img className="rounded-t-lg" src="https://png.pngtree.com/png-clipart/20210516/original/pngtree-sea-blue-cruise-ship-png-image_6293419.png" alt=""/>
            <div className="p-5">
                { boat.name }
            </div>
        </div>
    );
}

export default Boat;