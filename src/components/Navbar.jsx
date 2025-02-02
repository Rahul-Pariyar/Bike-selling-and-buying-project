import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold">Motobike market</div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <span className="text-2xl">&times;</span>
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 absolute md:static top-16 left-0 w-full bg-gray-800 md:w-auto md:bg-transparent z-10`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-0 bg-gray-800 text-white">
            <li className="hover:bg-gray-700 rounded px-3 py-2">
              <NavLink to="/" className={(e)=>{return e.isActive?"block w-full h-full bg-red-700 px-4 py-3 rounded transition-transform transform hover:scale-110" : "block w-full h-full px-3 py-2" }} onClick={() => setIsOpen(false)}>Home</NavLink>
            </li>
            <li className="hover:bg-gray-700 rounded px-3 py-2">
              <NavLink to="/browse" className={(e)=>{return e.isActive?"block w-full h-full bg-red-700 px-4 py-3 rounded transition-transform transform hover:scale-110" : "block w-full h-full px-3 py-2"}} onClick={() => setIsOpen(false)}>Browse Bikes</NavLink>
            </li>
            <li className="hover:bg-gray-700 rounded px-3 py-2">
              <NavLink to="/sell" className={(e)=>{return e.isActive?"block w-full h-full bg-red-700 px-4 py-3 rounded transition-transform transform hover:scale-110" : "block w-full h-full px-3 py-2"}} onClick={() => setIsOpen(false)}>Sell Bikes</NavLink>
            </li>
            <li className="hover:bg-gray-700 rounded px-3 py-2">
              <NavLink to="/about" className={(e)=>{return e.isActive?"block w-full h-full bg-red-700 px-4 py-3 rounded transition-transform transform hover:scale-110" : "block w-full h-full px-3 py-2"}} onClick={() => setIsOpen(false)}>About Us</NavLink>
            </li>
            <li className="hover:bg-gray-700 rounded px-3 py-2">
              <NavLink to="/contact" className={(e)=>{return e.isActive?"block w-full h-full bg-red-700 px-4 py-3 rounded transition-transform transform hover:scale-110" : "block w-full h-full px-3 py-2"}} onClick={() => setIsOpen(false)}>Contact</NavLink>
            </li>
            {/* Login Button in Hamburger Menu */}
            <li className="mt-4 md:hidden">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center" onClick={()=>{
                navigate("/signup")
                setIsOpen(false)
              }} >
                Signup/Login
              </button>
            </li>
          </ul>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
                navigate("/signup")
              }}>
            Signup/Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800 text-white">
//       <div className="container mx-auto flex justify-between items-center p-4 relative">
//         {/* Logo */}
//         <div className="text-xl font-bold">Motobike market</div>

//         {/* Hamburger menu for mobile */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} aria-label="Toggle Menu">
//             {isOpen ? (
//               <span className="text-2xl">&times;</span>
//             ) : (
//               <span className="text-2xl">&#9776;</span>
//             )}
//           </button>
//         </div>

//         {/* Links */}
//         <div
//           className={`${
//             isOpen ? "block" : "hidden"
//           } md:flex md:items-center md:gap-6 absolute md:static top-16 left-0 w-full bg-gray-800 md:w-auto md:bg-transparent z-10`}
//         >
//           <ul className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-0 bg-gray-800 text-white">
//             <li className="hover:bg-gray-700 rounded px-3 py-2">
//               <NavLink
//                 to="/"
//                 className={(e) =>
//                   e.isActive
//                     ? "block w-full h-full bg-red-700 px-4 py-3 rounded"
//                     : "block w-full h-full px-3 py-2"
//                 }
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="hover:bg-gray-700 rounded px-3 py-2">
//               <NavLink
//                 to="/browse"
//                 className={(e) =>
//                   e.isActive
//                     ? "block w-full h-full bg-red-700 px-4 py-3 rounded"
//                     : "block w-full h-full px-3 py-2"
//                 }
//                 onClick={() => setIsOpen(false)}
//               >
//                 Browse Bikes
//               </NavLink>
//             </li>
//             <li className="hover:bg-gray-700 rounded px-3 py-2">
//               <NavLink
//                 to="/sell"
//                 className={(e) =>
//                   e.isActive
//                     ? "block w-full h-full bg-red-700 px-4 py-3 rounded"
//                     : "block w-full h-full px-3 py-2"
//                 }
//                 onClick={() => setIsOpen(false)}
//               >
//                 Sell Bikes
//               </NavLink>
//             </li>
//             <li className="hover:bg-gray-700 rounded px-3 py-2">
//               <NavLink
//                 to="/about"
//                 className={(e) =>
//                   e.isActive
//                     ? "block w-full h-full bg-red-700 px-4 py-3 rounded"
//                     : "block w-full h-full px-3 py-2"
//                 }
//                 onClick={() => setIsOpen(false)}
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="hover:bg-gray-700 rounded px-3 py-2">
//               <NavLink
//                 to="/contact"
//                 className={(e) =>
//                   e.isActive
//                     ? "block w-full h-full bg-red-700 px-4 py-3 rounded"
//                     : "block w-full h-full px-3 py-2"
//                 }
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact
//               </NavLink>
//             </li>
//             {/* Login Button in Hamburger Menu */}
//             <li className="mt-4 md:hidden">
//               <button
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center"
//                 onClick={() => {
//                   navigate("/signup");
//                   setIsOpen(false);
//                 }}
//               >
//                 Signup/Login
//               </button>
//             </li>
//           </ul>
//         </div>

//         {/* Login Button */}
//         <div className="hidden md:block">
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             onClick={() => {
//               navigate("/signup");
//             }}
//           >
//             Signup/Login
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
