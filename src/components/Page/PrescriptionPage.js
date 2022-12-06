import React from "react";
import Prescription from "../ListHistory/Prescription";
import "./DoctorCss.css";

const PrescriptionPage = () => {
  return (
    <div>
      <div className="create">
        <div>
          <h2>Medical History</h2>
        </div>

        <div className="medical">
          <Prescription />
        </div>
      </div>
    </div>
  );
};

export default PrescriptionPage;
