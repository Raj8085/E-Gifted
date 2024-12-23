// import { useState } from "react";
import "../../../src/App.css";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";

// const Navbar = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <div className="navbar">
//       <div className={`menu-icon ${isDrawerOpen ? "cross-icon" : ""}`} onClick={toggleDrawer}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         {/* <h1 className="navbar-title1">eGifter</h1> */}
//         <img src="/eGiftedImages/eGifter.svg" className="navbar-gifter" alt=""/>
//         <p className="navbar-title2">Buy Gift Cards</p>
//         <h1 className="navbar-title3">Buy For Business</h1>
//         {/* <Input className="navbar-title4" placeholder="United kingdom"/> */}
//         {/* <Input className="navbar-title5" placeholder="Sign up"/>
//         <img src="/eGiftedImages/download.svg" alt="HY" className="navbar-title6"/> */}

// <div className="input-container1">
//       <img src="/eGiftedImages/indiaIcon.svg" alt="HY" className="input-icon1" />
//       <Input className="input-field1" placeholder="India" />
//     </div>
    


//     <div className="input-container">
//       {/* <img src="/eGiftedImages/download.svg" alt="HY" className="input-icon" /> */}
//       {/* <Input className="input-field" placeholder="Sign up" /> */}
//       <Button>Sign Up</Button>
//     </div>

//             <img src="/eGiftedImages/cartIcon.svg"  className="cart-icon" alt=""/>
//       </div>

//       {/* Sliding Drawer */}
//       <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Services</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Navbar;






//  import "../../../src/App.css";
//  import {  useState } from "react";
//  // import { Input } from "../ui/input";
//  import { Button } from "../ui/button";
//  import SignIn from "../UserCredential/signIn"; // Import the SignIn component
//  import { Link } from "react-router-dom";






// const Navbar = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [isSignInOpen, setSignInOpen] = useState(false); // State to control Sign In modal visibility

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };


//   const closeSignIn = () => {
//     setSignInOpen(false); // Close the SignIn modal
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <div className="navbar">
//         <div
//           className={`menu-icon ${isDrawerOpen ? "cross-icon" : ""}`}
//           onClick={toggleDrawer}
//         >
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//        <Link to="/">
//         <img src="/eGiftedImages/eGifter.svg" className="navbar-gifter cursor-pointer" alt="" />
//         </Link>
//         {/* <p className="navbar-title2 cursor-pointer">Buy Gift Cards</p> */}
//         <Link to="/cards" className="navbar-title2 cursor-pointer">Buy Gift Cards</Link>
//         <Link to="/businessBuy" className="navbar-title2 cursor-pointer">Buy For Business</Link>
//         <Link to="/crypto" className="navbar-title2 cursor-pointer">Buy For Crypto</Link>



//         <div className="input-container1">
//           {/* <img src="/eGiftedImages/indiaIcon.svg" alt="HY" className="input-icon1" />
//           <Input className="input-field1" placeholder="India" /> */}



//         </div>

//         <div className="input-container">
//           {/* <Button onClick={openSignIn}>Sign Up</Button>  */}

//           <Link to="/signin">
//           <Button className="rounded-full ">Sign Up</Button>  
//         </Link>
      
//         </div>

//         <img src="/eGiftedImages/cartIcon.svg" className="cart-icon cursor-pointer" alt="" />
//         </div>

//       {/* Sliding Drawer */}
//       <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
//         <ul>
//         <Link to="/crypto">
//           <li>
//             <img src="public/sideBar/download (4).png"  className="inline-block w-5 h-5 mr-2" alt=""/>Buy Digital Gift Cards</li></Link>
//           <li><img src="public/sideBar/download (3).png" className="inline-block w-5 h-5 mr-2" alt=""/>Buy For Business</li>
//           <li><img src="public/sideBar/download (2).png" alt="" className="inline-block w-5 h-5 mr-2"/>Buy With Bitcoin</li>
//           <li><img src="public/sideBar/download.png" alt="" className="inline-block w-5 h-5 mr-2"/>Order Status</li>
//         </ul>
//       </div>

//       {/* Conditionally render the SignIn modal */}
//       {isSignInOpen && <SignIn closeSignIn={closeSignIn} />}
//     </div>
//   );
// };
// export default Navbar;




// import { useEffect, useState } from "react";
// import "../../../src/App.css";
// // import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import SignIn from "../UserCredential/signIn"; // Import the SignIn component
// import { Link } from "react-router-dom";



// const Navbar = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [isSignInOpen, setSignInOpen] = useState(false);
//   const [userName, setUserName] = useState(null); // State to hold the user's name

//   useEffect(() => {
//     // Retrieve the user data from localStorage when the component mounts
//     const userData = JSON.parse(localStorage.getItem("userData"));
//     if (userData && userData.name) {
//       setUserName(userData.name);
//     }
//   }, []);

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   const closeSignIn = () => {
//     setSignInOpen(false); // Close the SignIn modal
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <div className="navbar">
//         <div
//           className={`menu-icon ${isDrawerOpen ? "cross-icon" : ""}`}
//           onClick={toggleDrawer}
//         >
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         <Link to="/">
//           <img
//             src="/eGiftedImages/eGifter.svg"
//             className="navbar-gifter cursor-pointer"
//             alt=""
//           />
//         </Link>
//         <Link to="/cards" className="navbar-title2 cursor-pointer">
//           Buy Gift Cards
//         </Link>
//         <Link to="/businessBuy" className="navbar-title2 cursor-pointer">
//           Buy For Business
//         </Link>
//         <Link to="/crypto" className="navbar-title2 cursor-pointer">
//           Buy For Crypto
//         </Link>

//         <div className="input-container1"></div>

//         <div className="input-container">
//           {userName ? (
//             <span className="user-name rounded-full">
//               {userName}
//             </span>
//           ) : (
//             <Link to="/signin">
//               <Button className="rounded-full">Sign Up</Button>
//             </Link>
//           )}
//         </div>

//         <img
//           src="/eGiftedImages/cartIcon.svg"
//           className="cart-icon cursor-pointer"
//           alt=""
//         />
//       </div>

//       {/* Sliding Drawer */}
//       <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
//         <ul>
//           <Link to="/crypto">
//             <li>
//               <img
//                 src="public/sideBar/download (4).png"
//                 className="inline-block w-5 h-5 mr-2"
//                 alt=""
//               />
//               Buy Digital Gift Cards
//             </li>
//           </Link>
//           <li>
//             <img
//               src="public/sideBar/download (3).png"
//               className="inline-block w-5 h-5 mr-2"
//               alt=""
//             />
//             Buy For Business
//           </li>
//           <li>
//             <img
//               src="public/sideBar/download (2).png"
//               alt=""
//               className="inline-block w-5 h-5 mr-2"
//             />
//             Buy With Bitcoin
//           </li>
//           <li>
//             <img
//               src="public/sideBar/download.png"
//               alt=""
//               className="inline-block w-5 h-5 mr-2"
//             />
//             Order Status
//           </li>
//         </ul>
//       </div>

//       {/* Conditionally render the SignIn modal */}
//       {isSignInOpen && <SignIn closeSignIn={closeSignIn} />}
//     </div>
//   );
// };

// export default Navbar;










// import { useEffect, useState } from "react";
// import "../../../src/App.css";
// import { Button } from "../ui/button";
// import { Link } from "react-router-dom";



// const Navbar = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [userName, setUserName] = useState("Rajeev");

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("userData"));
//     if (userData && userData.name) {
//       setUserName(userData.name);
//     } else {
//       console.log("No user data found in localStorage.");
//     }
//   }, []);

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <div className="navbar">
//         <div
//           className={`menu-icon ${isDrawerOpen ? "cross-icon" : ""}`}
//           onClick={toggleDrawer}
//         >
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         <Link to="/">
//           <img
//             src="/eGiftedImages/eGifter.svg"
//             className="navbar-gifter cursor-pointer"
//             alt=""
//           />
//         </Link>
//         <Link to="/cards" className="navbar-title2 cursor-pointer">
//           Buy Gift Cards
//         </Link>
//         <Link to="/businessBuy" className="navbar-title2 cursor-pointer">
//           Buy For Business
//         </Link>
//         <Link to="/crypto" className="navbar-title2 cursor-pointer">
//           Buy For Crypto
//         </Link>

//         <div className="input-container">
//           {userName ? (
//             <span className="user-name rounded-full">
//               Welcome, {userName}
//             </span>
//           ) : (
//             <Link to="/signin">
//               {/* <Button className="rounded-full">Sign Up</Button> */}
//               {/* <Button className="rounded-full">Sign Up</Button> */}

//               <Button style={{ display: 'block', backgroundColor: 'red', zIndex: 1000 }}>
//   Sign Up
// </Button>

//             </Link>
//           )}
//         </div>

//         <img
//           src="/eGiftedImages/cartIcon.svg"
//           className="cart-icon cursor-pointer"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default Navbar;









// This is my present code.


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "../ui/button";
// // import SignIn from "../UserCredential/signIn";
// // import { Button } from "../ui/button";

// const Navbar = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [userName, setUserName] = useState(null);

//   useEffect(() => {
//     // Retrieve the user data from localStorage when the component mounts
//     const userData = JSON.parse(localStorage.getItem("userData"));
//     if (userData && userData.name) {
//       setUserName(userData.name);
//     }

//   }, []);

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };


//   const handleSignOut = () => {
//     // Clear user data from localStorage and reset the username
//     localStorage.removeItem("userData");
//     setUserName(null); // Reset the userName state to null
//   };



//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/">
//             <img
//               src="/eGiftedImages/eGifter.svg"
//               className="h-8 w-auto"
//               alt="Logo"
//             />
//           </Link>

//           {/* Navigation Links */}
//           <div className="hidden md:flex space-x-6">
//             <Link
//               to="/cards"
//               className="text-gray-700 hover:text-blue-500 font-medium"
//             >
//               Buy Gift Cards
//             </Link>
//             <Link
//               to="/businessBuy"
//               className="text-gray-700 hover:text-blue-500 font-medium"
//             >
//               Buy For Business
//             </Link>
//             <Link
//               to="/crypto"
//               className="text-gray-700 hover:text-blue-500 font-medium"
//             >
//               Buy For Crypto
//             </Link>
//           </div>





//           {/* Right Section */}
//           <div className="flex items-center space-x-4">
//            {/* Right Section */}
// <div className="flex items-center space-x-4 md:space-x-6">
//   {userName ? (
//     <div className="flex items-center space-x-4">
//       <span className="user-name rounded-full text-sm md:text-base">
//         Welcome, {userName}
//       </span>
//       <Button
//         className="sign-out-btn rounded-full ml-4 text-sm md:text-base"
//         onClick={handleSignOut}
//       >
//         Sign Out
//       </Button>
//     </div>
//   ) : (
//     <Link to="/signin">
//       {/* Sign Up button visible only on medium screens and up */}
//       <button className=" bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
//         Sign Up
//       </button>
//     </Link>
//   )}
// </div>

            
//             {/* <Link to="/signin">
//               <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
//                 Sign Up
//               </button>
//             </Link> */}
//             <img
//               src="/eGiftedImages/cartIcon.svg"
//               className="h-6 w-6 cursor-pointer"
//               alt="Cart"
//             />
//             {/* Mobile Menu Icon */}
//             <button
//               onClick={toggleDrawer}
//               className="md:hidden text-gray-700 hover:text-blue-500"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={
//                     isDrawerOpen
//                       ? "M6 18L18 6M6 6l12 12"
//                       : "M4 6h16M4 12h16M4 18h16"
//                   }
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Drawer */}
//       {isDrawerOpen && (
//         <div className="md:hidden bg-white shadow-lg fixed top-16 left-0 w-full z-40">
//           <ul className="space-y-4 px-4 py-6">
//             <Link to="/cards" onClick={toggleDrawer}>
//               <li className="text-gray-700 hover:text-blue-500 font-medium">
//                 Buy Gift Cards
//               </li>
//             </Link>
//             <Link to="/businessBuy" onClick={toggleDrawer}>
//               <li className="text-gray-700 hover:text-blue-500 font-medium">
//                 Buy For Business
//               </li>
//             </Link>
//             <Link to="/crypto" onClick={toggleDrawer}>
//               <li className="text-gray-700 hover:text-blue-500 font-medium">
//                 Buy For Crypto
//               </li>
//             </Link>
//           </ul>
//         </div>
//       )}

//       {/* Conditionally Render the SignIn Modal */}
//       {/* {isSignInOpen && <SignIn closeSignIn={closeSignIn} />} */}
//     </div>
//   );
// };

// export default Navbar;





import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import "../../../src/App.css";
import PropTypes from "prop-types";
import { MenubarDemo } from "./Menu";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  // const navigate = useNavigate();
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.name) {
      setUserName(userData.name);
    }
  }, []);

  const toggleDrawer = (event) => {
    event.stopPropagation();
    setDrawerOpen((prevState) => !prevState);
  };

  const handleSignOut = () => {
    localStorage.removeItem("userData");
    setUserName(null);
  };

  // const showCart = () => {
  //   navigate("/cards");
  // };

  return (
    <div>
      <nav className="bg-white shadow-md left-0 w-full z-50 p-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">
          <MenubarDemo className="menu-bar" />

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="\eGiftedImages\logo-gifter-removebg-preview (1).png"
              className="h-20 w-auto ml-2 mb-3"
              alt="Logo"
            />
          </Link>

          {/* Hamburger Icon for Mobile */}
          <div
            className="flex md:hidden cursor-pointer"
            onClick={toggleDrawer}
          >
            <Button className="bg-blue-600">Profile</Button>
            {/* <div className="w-6 h-5 bg-gray-700 mb-1"></div> */}
            {/* <div className="w-6 h-5 bg-gray-700 mb-1"></div>
            <div className="w-6 h-5 bg-gray-700"></div> */}
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/cards"
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Buy Gift Cards
            </Link>
            <Link
              to="/businessBuy"
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Buy For Business
            </Link>
            <Link
              to="/crypto"
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Buy For Crypto
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {userName ? (
              <div className="flex items-center space-x-4">
                <span className="rounded-full text-sm md:text-base">
                  Welcome, {userName}
                </span>
                <Button
                  className="rounded-full ml-4 text-sm md:text-base"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/signin">
                <Button>Sign up</Button>
              </Link>
            )}
          </div>
        </div>

        {/* Sidebar for mobile */}
        <div
          ref={sidebarRef}
          className={`${
            isDrawerOpen ? "block" : "hidden"
          } bg-white shadow-md fixed top-12 left-0 w-full z-40 md:hidden`}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            {/* <Link
              to="/cards"
              className="text-gray-700 hover:text-blue-500 font-medium"
              onClick={() => setDrawerOpen(false)}
            >
              Buy Gift Cards
            </Link>
            <Link
              to="/businessBuy"
              className="text-gray-700 hover:text-blue-500 font-medium"
              onClick={() => setDrawerOpen(false)}
            >
              Buy For Business
            </Link>
            <Link
              to="/crypto"
              className="text-gray-700 hover:text-blue-500 font-medium"
              onClick={() => setDrawerOpen(false)}
            >
              Buy For Crypto
            </Link> */}

            {userName ? (
              <div className="flex flex-col items-center space-y-4">
                <span className="rounded-full text-sm md:text-base">
                  Welcome, {userName}
                </span>
                <Button
                  className="rounded-full text-sm md:text-base"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/signin" onClick={() => setDrawerOpen(false)}>
                <Button>Sign up</Button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  cart: PropTypes.array,
};

Navbar.defaultProps = {
  cart: [],
};

export default Navbar;





const OfferBanner = () => {
  const offers = [
    { 
      text: "Buy $100 Outback Gift Cards for $90!", 
      image: "/eGiftedImages/cardCurrency.png",
      bgColor: "bg-red-800"
    },
    {
      text: "Get $50 Habitats Card for $45!",
      image: "/cardsImage/1081483_fp01.png",
      bgColor: "bg-black"
    },
    {
      text: "Save 10% on Adiddas Gift Cards!",
      image: "/eGiftedImages/currency_fp01.png",
      bgColor: "bg-blue-800"
    },
    {
      text: "Buy $200 WHsmith Gift Cards for $180!",
      image: "/cardsImage/1073683_fp01.png",
      bgColor: "bg-[#F26A24]"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate offers every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [offers.length]);

  const currentOffer = offers[currentIndex];

  return (
    <div className={`w-full flex items-center justify-center text-white px-4 py-2 transition-all duration-300 ${currentOffer.bgColor}`}>
      <img 
        src={currentOffer.image} 
        alt="Offer Logo" 
        className="h-8 w-auto mr-3" 
      />
      <div className="text-sm md:text-base">
        {currentOffer.text}
      </div>
    </div>
  );
};

export { OfferBanner };




// const OfferBanner = () => {
//   // Array of offers. 
//   // If each offer has its own image, store that in the object as well.
//   const offers = [
//     { 
//       text: "Buy $100 Outback Gift Cards for $90!", 
//       image: "/eGiftedImages/cardCurrency.png",
//       color : "bg-black-800"
//     },
//     {
//       text: "Get $50 Starbucks Card for $45!",
//       image: "/eGiftedImages/cardStarbucks.png"
//     },
//     {
//       text: "Save 10% on Amazon Gift Cards!",
//       image: "/eGiftedImages/cardAmazon.png"
//     },
//     {
//       text: "Buy $200 Apple Gift Cards for $180!",
//       image: "/eGiftedImages/cardApple.png"
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Rotate offers every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
//     }, 2000); // 2000 milliseconds = 2 seconds

//     return () => clearInterval(interval);
//   }, [offers.length]);

//   const currentOffer = offers[currentIndex];

//   return (
//     <div className="w-full bg-red-800 flex items-center justify-center text-white px-4 py-2 transition-all duration-300">
//       <img 
//         src={currentOffer.image} 
//         alt="Offer Logo" 
//         className="h-8 w-auto mr-3" 
//       />
//       <div className="text-sm md:text-base">
//         {currentOffer.text}
//       </div>
//     </div>
//   );
// };

// export { OfferBanner };









// const OfferBanner = () => {
//   return (
//     <div className="w-full bg-red-800 flex items-center justify-center text-white px-4 py-2">
//       <img 
//         src="/eGiftedImages/cardCurrency.png" 
//         alt="Outback Logo" 
//         className="h-8 w-auto mr-3" 
//       />
//       <div className="text-sm md:text-base">
//         Buy $100 Outback Gift Cards for $90!
//       </div>
//     </div>
//   );
// };

// export { OfferBanner };











// import {Link, useNavigate } from "react-router-dom";
// import { Button } from "../ui/button";
// import { useEffect, useRef, useState } from "react";
// import "../../../src/App.css";
// import PropTypes from 'prop-types';
// import { MenubarDemo } from "./Menu";


// // eslint-disable-next-line react/prop-types
// const Navbar = ({ cart }) => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [userName, setUserName] = useState(null);
//   const navigate = useNavigate();


//   const sidebarRef = useRef(null);
//   const menuIconRef = useRef(null);

//   useEffect(() => {
//     // Close sidebar if clicked outside
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setDrawerOpen(false); // Close the sidebar
//       }
//     };

//     // Add event listener
//     document.addEventListener("mousedown", handleClickOutside);

//     // Cleanup event listener when component is unmounted
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);


//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("userData"));
//     if (userData && userData.name) {
//       setUserName(userData.name);
//     }
//   }, []);

//   // const toggleDrawer = () => {
//   //   setDrawerOpen(!isDrawerOpen);
//   // };
//   const toggleDrawer = (event) => {
//     event.stopPropagation(); // Prevent click from propagating to the document
//     setDrawerOpen((prevState) => !prevState);
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("userData");
//     setUserName(null);
//   };

//   const showCart=()=>{

//     navigate("/cards")
//   }


//   return (
//     <div>
//       <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 p-2">
//       <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 flex items-center justify-between h-12 ">
//       <MenubarDemo className="menu-bar"/>

//           {/* Logo */}
//           <Link to="/" className="">
//             <img
//               src="/eGiftedImages/eGifter.svg"
//               className="h-8 w-auto ml-16 main-logo"
//               alt="Logo"
//             />
//           </Link>

       


//           {/* Menu Icon in the center */}
//           <div
//            >
//           </div>
//       {/* <div
//            className={`menu-icon ${isDrawerOpen ? "cross-icon" : ""}`}
//            onClick={toggleDrawer}
//            style={{
//             position: "absolute",
//             left: "50%",
//             transform: "translateX(-2000%)",
//           }}
//          >
//            <div></div>
//            <div></div>
//            <div></div>
//          </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 flex items-center justify-between h-12">
//           <Link to="/">
//             <img src="/eGiftedImages/eGifter.svg" className="h-8 w-auto mb-6" alt="Logo" /> 
//           </Link> */}

//           <div className="hidden md:flex space-x-6 ">
//             <Link to="/cards" className="text-gray-700 hover:text-blue-500 font-medium">
//               Buy Gift Cards
//             </Link>
//             <Link to="/businessBuy" className="text-gray-700 hover:text-blue-500 font-medium">
//               Buy For Business
//             </Link>
//             <Link to="/crypto" className="text-gray-700 hover:text-blue-500 font-medium">
//               Buy For Crypto
//             </Link>
//           </div>

//           <div className="flex items-center space-x-4">
//             {userName ? (
//               <div className="flex items-center space-x-4 sign-out">
//                 <span className="user-name rounded-full text-sm md:text-base">
//                   Welcome, {userName}
//                 </span>
//                 <Button className="sign-out-btn rounded-full ml-4 text-sm md:text-base" onClick={handleSignOut}>
//                   Sign Out
//                 </Button>
//               </div>
//             ) : (
//               <Link to="/signin">
//                 {/* <button className=" bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition sign-up">
//                   Sign Up
//                 </button> */}
//                 <Button>Sign up</Button>
//               </Link>
//             )}

           
//           </div>
//         </div>
//       </nav>
      
//     </div>
//   );
// };

// Navbar.propTypes = {
//   cart: PropTypes.array, // Validate that `cart` is an array
// };

// // Optionally, you can also define defaultProps if needed
// Navbar.defaultProps = {
//   cart: [], // Default `cart` to an empty array if it's not passed
// };

// export default Navbar;












// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "../ui/button";

// const Navbar = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [userName, setUserName] = useState(null);

//   useEffect(() => {
//     // Retrieve the user data from localStorage when the component mounts
//     const userData = JSON.parse(localStorage.getItem("userData"));
//     if (userData && userData.name) {
//       setUserName(userData.name);
//     }
//   }, []);

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <div>
//       <div className="navbar">
//         <div
//           className={`menu-icon ${isDrawerOpen ? "cross-icon" : ""}`}
//           onClick={toggleDrawer}
//         >
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         <Link to="/">
//           <img
//             src="/eGiftedImages/eGifter.svg"
//             className="navbar-gifter cursor-pointer"
//             alt=""
//           />
//         </Link>
//         <Link to="/cards" className="navbar-title2 cursor-pointer">
//           Buy Gift Cards
//         </Link>
//         <Link to="/businessBuy" className="navbar-title2 cursor-pointer">
//           Buy For Business
//         </Link>
//         <Link to="/crypto" className="navbar-title2 cursor-pointer">
//           Buy For Crypto
//         </Link>

//         <div className="input-container">
//           {userName ? (
//             <span className="user-name rounded-full">
//               Welcome, {userName}
//             </span>
//           ) : (
//             <Link to="/signin">
//               <Button className="rounded-full">Sign Up</Button>
//             </Link>
//           )}
//         </div>

//         <img
//           src="/eGiftedImages/cartIcon.svg"
//           className="cart-icon cursor-pointer"
//           alt=""
//         />
//       </div>

//       {/* Sliding Drawer */}
//       <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
//         <ul>
//           <Link to="/crypto">
//             <li>
//               <img
//                 src="public/sideBar/download (4).png"
//                 className="inline-block w-5 h-5 mr-2"
//                 alt=""
//               />
//               Buy Digital Gift Cards
//             </li>
//           </Link>
//           <li>
//             <img
//               src="public/sideBar/download (3).png"
//               className="inline-block w-5 h-5 mr-2"
//               alt=""
//             />
//             Buy For Business
//           </li>
//           <li>
//             <img
//               src="public/sideBar/download (2).png"
//               alt=""
//               className="inline-block w-5 h-5 mr-2"
//             />
//             Buy With Bitcoin
//           </li>
//           <li>
//             <img
//               src="public/sideBar/download.png"
//               alt=""
//               className="inline-block w-5 h-5 mr-2"
//             />
//             Order Status
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
