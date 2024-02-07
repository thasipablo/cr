import {useNavigate} from "react-router-dom";
import {useState} from "react";

const NewBoatForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        description: "",
        price: ""
    });

    const handleNameChange = (e) => setFormData({...formData, name: e.target.value});
    const handleImageChange = (e) => setFormData({...formData, image: e.target.value});
    const handleDescriptionChange = (e) => setFormData({...formData, description: e.target.value});
    const handlePriceChange = (e) => setFormData({...formData, price: e.target.value});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New boat form data: ', formData);
        navigate("/boats/all");
    }

    return (
        <div>
            <h2>New Boat</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                    <div className="mb-5">
                        <label htmlFor="name"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input
                            type="email"
                            id="name"
                            onChange={handleNameChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Angel Rose" required/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="image"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                        <input
                            type="text"
                            id="image"
                            onChange={handleImageChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="https://via.placeholder.com/150" required/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="description"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea
                            id="description"
                            onChange={handleDescriptionChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="A beautiful boat for a cruise" required/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="price"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input
                            type="number"
                            id="price"
                            onChange={handlePriceChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="150" required/>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Create Boat
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewBoatForm
