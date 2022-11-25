import React from "react";
import History from "../ListHistory/History";

import Doctornav from "../Navbar/Doctornav";
import "./DoctorCss.css";

const MedicalHistory = () => {
  return (
    <div>
      <div className="create">
        <Doctornav />
        <div>
          <h2>Medical History</h2>
        </div>

        <div className="medical">
          <History />
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
