import React from "react";
import History from "../../ListHistory/History";
import PatienceNav from "../../Navbar/Patiencenav";
import "./PatienceCss.css";
import Footer from "../../Footer/Footer";

const PatienceMedicalHistory = () => {
  return (
    <div>
      <div className="create">
        <PatienceNav />
        <div>
          <h2>Medical History</h2>
        </div>

        <div className="medical">
          <History />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PatienceMedicalHistory;
