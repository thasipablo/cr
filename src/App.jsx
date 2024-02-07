import {Link} from "react-router-dom";

function App() {
  return (
        <div className="flex flex-col gap-6 justify-center items-center w-full h-screen">
            <div>
                <img
                    src="https://clipart-library.com/newimages/cruise-ship-clip-art-15.png"
                    alt="alt"
                    className="w-60 h-60 rounded-full"
                />
            </div>
            <div className="flex flex-col gap-4">
                <Link className="text-white text-center p-3 rounded bg-sky-500" to="Login">Login</Link>
                <Link className="text-white text-center p-3 rounded bg-slate-500" to="Register">Register</Link>
            </div>
        </div>
  );
}

export default App;
