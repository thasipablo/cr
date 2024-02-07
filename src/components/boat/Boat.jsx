const Boat = ({boat}) => {
    return (
        <div
            className="max-w-sm bg-white rounded-lg dark:bg-gray-800 text-center">
            <div className="w-full h-full">
                <img className="h-auto max-w-full rounded-lg" src={boat?.image} alt=""/>
            </div>
            <div className="p-5">
                { boat.name }
            </div>
        </div>
    );
}

export default Boat;