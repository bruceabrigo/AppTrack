import React from "react";
import { useState, useEffect } from "react";
import "../components/home.scss";

// import api call from api file
import { applicationsIndex } from "../api/applications";

const Home = (props) => {
  const [applications, setApplications] = useState(null)
  const [error, setError] = useState(false)
  console.log('Returned Applications: ', applications)
  // console.log("props in home: ", props);

  useEffect(() => {
    applicationsIndex()
      .then(res => {
        console.log('API Response:', res.data);
        setApplications(res.data.applications);
      })
      .catch(err => {
        console.log('API Error:', err);
        setError(true);
      });
  }, []);
  

    // if (error) {
    //   return <p>Error!</p>
    // }

  //   if (!applications) {
  //     return <p>There are are current applications </p>
  //   }

  const appsData = applications && applications.map(application => (
    <div key={application.id} className="applications">
      <p>{application.company}</p>
      <p>{application.role}</p>
      <p>{application.submitted}</p>
      <p>{application.interview}</p>
    </div>
  ));
  
  

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
                {appsData}
      </div>
    </div>
    </>
  );
};

export default Home;
