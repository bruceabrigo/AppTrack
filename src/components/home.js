import React from "react";
import "../components/home.scss";

const Home = (props) => {
  console.log("props in home: ", props);

  return (
    <>
    <button className="new-application">
        New Application
    </button>
    <div className="centered-content">
      <div className="content-container">
        <div className="content-bar">
            <h1 className="content-bar-title">Applications</h1>
        </div>
        <div className="application-container">
            <ul className="applications">
                <li>Company</li>
                <li>Role</li>
                <li>Submitted</li>
                <li>Interview</li>
                <li>Status</li>
            </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
