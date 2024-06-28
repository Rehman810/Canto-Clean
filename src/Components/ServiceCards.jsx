import React from "react";
import Service from "./ServiceCard";
import '../css/servicecard.css';

const Services = () => {
  return (
    <div style={{paddingTop: "20px", display: "flex", justifyContent: "flex-start", alignItems:"flex-start", flexDirection: "column"}}>
        <h1 className="service-h">SERVICES</h1>
      <Service
      overlay1={"Office Cleaning"}
      overlay2={"Standard Cleaning"}
      overlay3={"Deep Cleaning"}
        img1={`https://img.freepik.com/free-photo/disinfecting-home_155003-9129.jpg?t=st=1719589914~exp=1719593514~hmac=10ede844985a8fc07c0d9f82ddcbd0b50c198e67b7f8c4f19b772be5585329a4&w=900`}
        img2={`https://img.freepik.com/free-photo/close-up-man-cleaning-his-house_23-2148112860.jpg?t=st=1719590467~exp=1719594067~hmac=752cd95e05839d353a559c5c2f3b1b1b75e3d384b75d8010d91e103412190acc&w=900`}
        img3={`https://img.freepik.com/free-photo/professional-cleaning-service-person-using-steam-cleaner-office_23-2150520644.jpg?t=st=1719590523~exp=1719594123~hmac=106779e24efd519577b0898d57a92a3ae792787b7113373f7e1bf3228f2831ec&w=900`}
      />
      <Service
      overlay1={"House Sitting"}
      overlay2={"Moving in or out clean"}
      overlay3={"Customized Cleaning"}
        img1={`https://img.freepik.com/free-photo/full-shot-roommates-together-home_23-2149358498.jpg?t=st=1719590633~exp=1719594233~hmac=1a7d0befa2f8f1563592f83d45e5975ddd2a246ea05d260cc48f56803fbc6632&w=900`}
        img2={`https://img.freepik.com/premium-photo/close-up-housekeeper-holding-modern-washing-vacuum-cleaner-cleaning-dirty-sofa-with-professionally-detergent-professional-springclean-home-concept_130111-3580.jpg?w=900`}
        img3={`https://img.freepik.com/premium-photo/cleaning-lady-shows-qualitatively-cleaned-house-blurred-background_646443-1497.jpg?w=900`}
      />
    </div>
  );
};

export default Services;
