import React from "react";
import "../components/home.scss";

const Home = (props) => {
  console.log("props in home: ", props);

  return (
    <div className="centered-content">
      <div className="homebox">
          <h1>hello</h1>
      </div>
    </div>
  );
};

export default Home;
