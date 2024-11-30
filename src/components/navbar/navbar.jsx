import { useState } from "react";
import "../../../src/App.css";
import { Input } from "../ui/input";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
      <div className={`menu-icon ${isDrawerOpen ? "cross-icon" : ""}`} onClick={toggleDrawer}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* <h1 className="navbar-title1">eGifter</h1> */}
        <img src="/eGiftedImages/eGifter.svg" className="navbar-gifter" alt=""/>
        <p className="navbar-title2">Buy Gift Cards</p>
        <h1 className="navbar-title3">Buy For Business</h1>
        {/* <Input className="navbar-title4" placeholder="United kingdom"/> */}
        {/* <Input className="navbar-title5" placeholder="Sign up"/>
        <img src="/eGiftedImages/download.svg" alt="HY" className="navbar-title6"/> */}

<div className="input-container1">
      <img src="/eGiftedImages/indiaIcon.svg" alt="HY" className="input-icon1" />
      <Input className="input-field1" placeholder="India" />
    </div>
    


    <div className="input-container">
      <img src="/eGiftedImages/download.svg" alt="HY" className="input-icon" />
      <Input className="input-field" placeholder="Sign up" />
    </div>

            <img src="/eGiftedImages/cartIcon.svg"  className="cart-icon" alt=""/>
      </div>

      {/* Sliding Drawer */}
      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;