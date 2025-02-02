import { Link } from "react-router-dom";
// import bikeImage from "./../assets/bike2.jpg"
import Category from "../components/category";

const Home = () => {
  return (
    // <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6">
    //   {/* Hero Section */}
    //   <div className="max-w-4xl text-center">
    //     <h1 className="text-4xl md:text-5xl font-bold leading-tight">
    //       Buy & Sell Your Dream Bike With Ease
    //     </h1>
    //     <p className="text-lg md:text-xl mt-4 text-gray-300">
    //       Browse a wide range of new and used bikes from trusted sellers in Nepal.
    //     </p>

    //     {/* CTA Buttons */}
    //     <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
    //       <Link to="/browse">
    //         <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition transition-transform transform hover:scale-105" >
    //           🚴 Browse Bikes
    //         </button>
    //       </Link>
    //       <Link to="/sell">
    //         <button className="bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-md transition transition-transform transform hover:scale-105">
    //           🏷️ Sell Your Bike
    //         </button>
    //       </Link>
    //     </div>
    //   </div>

    //   {/* Featured Bike Image */}
    //   <div className="mt-10">
    //     <img
    //       src={bikeImage}
    //       alt="Motorbike"
    //       className="rounded-lg shadow-lg w-full md:w-[800px] transition-transform transform hover:scale-105"
    //     />
    //   </div>
    // </div>

    
<>
  {/* <div className="relative h-80 w-full md: h-90 lg:h-100">
      <img src={bikeImage} alt="bikeImage" className="w-full h-[100vh] md:h-[100vh] object-cover"/>
    </div> 

    <div className="flex items-center justify-center">
      <div className="absolute mt-20 flex flex-col items-center justify-center text-center text-white px-4 bg-opacity-40">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
        Find Your Perfect Ride - Buy Motorcycles in Nepal!
      </h1>
      <p className="mt-3 text-2xl sm:text-4xl">
        Choose from over + motorcycles for sale.
      </p>
      <Link to='/sell'>
        <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105">
          Show bikes for sale
        </button>
      </Link>
    </div>
    </div>

    <Category/>
     */}
      <div className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden justify-center" style={{backgroundImage: "url('/bike2.jpg')"}}>

        <div className="flex flex-col items-center justify-center text-center text-white px-4 bg-opacity-40 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Find Your Perfect Ride - Buy Motorcycles in Nepal!
          </h1>
          <p className="mt-3 text-2xl sm:text-3xl">
            Choose from over 500+ motorcycles for sale.
          </p>
          <Link to='/sell'>
            <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105">
              Show bikes for sale
            </button>
        </Link>
      </div>
    </div>
      
    <h2 className='h-20 pt-5 bg-slate-800 text-white text-3xl md:text-4xl lg:text-4xl'>Explore By Category</h2>
      <Category/>
    </>



  );
};

export default Home;



