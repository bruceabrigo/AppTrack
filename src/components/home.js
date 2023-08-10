import React from "react";
import "../components/shared/navbar.scss";

const Home = (props) => {
  console.log("props in home: ", props);

  return (
    <div className="centered-content">
      <div className="homebox">
        <div className="rectangle">
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
