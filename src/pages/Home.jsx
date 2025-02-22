import { Link } from "react-router-dom";
import Category from "../components/category";
import LatestBikeSlider from "../components/latestBikeSlider";
import SellComponent from "../components/SellComponent.jsx";

const Home = () => {
  return (
    
<>
      <div className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden justify-center" style={{backgroundImage: "url('/bike2.jpg')"}}>

        <div className="flex flex-col items-center justify-center text-center text-white px-4 bg-opacity-40 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Find Your Perfect Ride - Buy Motorcycles in Nepal!
          </h1>
          <p className="mt-3 text-2xl sm:text-3xl">
            Choose from over 500+ motorcycles for sale.
          </p>
          <Link to='/browse'>
            <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105">
              Show bikes for sale
            </button>
        </Link>
      </div>
    </div>
      
    <h2 className='h-20 pt-5 bg-white text-black text-3xl md:text-4xl lg:text-4xl font-semi-bold'>Explore by category</h2>
      <Category/>
      <LatestBikeSlider/>
      <SellComponent/>
      
    </>



  );
};

export default Home;



