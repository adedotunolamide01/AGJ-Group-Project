import React from "react";
import Prescription from "../../ListHistory/Prescription";
import NavDoctor from "../../Navbar/NavDoctor";
import "./DoctorCss.css";
import Footer from "../../Footer/Footer";

const DoctorPrescriptionPage = () => {
  return (
    <div>
      <div className="create">
        <NavDoctor />
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

export default DoctorPrescriptionPage;
