import React from "react";
import History from "../ListHistory/History";
import "./DoctorCss.css";

const MedicalHistory = () => {
  return (
    <div>
      <div className="create">
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
