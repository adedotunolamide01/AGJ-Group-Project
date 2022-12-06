import React from "react";
import History from "../../ListHistory/History";
import NavDoctor from "../../Navbar/NavDoctor";
import "./DoctorCss.css";
import Footer from "../../Footer/Footer";

const DoctorMedicalHistory = () => {
  return (
    <div>
      <div className="create">
        <NavDoctor />
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

export default DoctorMedicalHistory;
