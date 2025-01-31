import { Link } from "react-router-dom";
import bikeImage from "./../assets/bike1.jpg"

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Buy & Sell Your Dream Bike With Ease
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300">
          Browse a wide range of new and used bikes from trusted sellers in Nepal.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/browse">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition transition-transform transform hover:scale-105" >
              🚴 Browse Bikes
            </button>
          </Link>
          <Link to="/sell">
            <button className="bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-md transition transition-transform transform hover:scale-105">
              🏷️ Sell Your Bike
            </button>
          </Link>
        </div>
      </div>

      {/* Featured Bike Image */}
      <div className="mt-10">
        <img
          src={bikeImage}
          alt="Motorbike"
          className="rounded-lg shadow-lg w-full md:w-[800px] transition-transform transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Home;



