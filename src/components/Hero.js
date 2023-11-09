import React from "react";


import BCBSHeroImage from "../assets/BCBSEmployeeHero.png";

const Hero = () => (
  // <div className="text-center hero my-5">
  //   <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
  //   <h1 className="mb-4">React.js Sample Project</h1>

  //   <p className="lead">
  //     This is a sample application that demonstrates an authentication flow for
  //     an SPA, using <a href="https://reactjs.org">React.js</a>
  //   </p>
  // </div>

  <div className="row justify-content-md-center">

    <h1 className="mb-4">Employee Portal</h1>
    <img src={BCBSHeroImage} />

  </div>
);

export default Hero;
