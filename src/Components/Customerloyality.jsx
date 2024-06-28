import React from "react";
import Button from "./Button";
import "../css/loyality.css"

const Customerloyality = () => {
  return (
    <div className="loyality">
        <div className="loyality-cont">
      <h1>CUSTOMER LOYALTY PROGRAM</h1>
      <p>
        We offer a great customer loyalty program for our recurring bookings and
        testimonial videos. If you’re one of our loyal customers, you can enjoy
        a huge savings or a potential free clean after a while.
      </p>
      <Button btn={"Learn More"} />
      </div>
    </div>
  );
};

export default Customerloyality;
