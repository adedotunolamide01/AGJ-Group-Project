import React from "react";
import Prescription from "../../ListHistory/Prescription";
import PatienceNav from "../../Navbar/Patiencenav";
import "./PatienceCss.css";
import Footer from "../../Footer/Footer";

const PatiencePrescriptionPage = () => {
  return (
    <div>
      <div className="create">
        <PatienceNav />
        <div>
          <h2>Medical History</h2>
        </div>

        <div className="medical">
          <Prescription />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PatiencePrescriptionPage;
