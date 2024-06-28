import React from "react";
import "../css/navbar.css";
import LeftDrawer from "./Drawer";

const Navbar = () => {
  return (
    <div className="navbar1">
      <div className="left1">
        <img
          src="https://img.freepik.com/premium-vector/cleaning-service_609550-333.jpg?w=740"
          alt="logo"
        />
        <h2>Canto Clean</h2>
      </div>
      <div className="right1">
        <div>
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Testimonials</span>
        <span>Contact</span>
        </div>
      </div>
      <div className="navbar-menu">
          <LeftDrawer />
        </div>
    </div>
  );
};

export default Navbar;
