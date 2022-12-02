import React from 'react';
import History from '../../ListHistory/History';
import PatienceNav from '../../Navbar/Patiencenav';
import './PatienceCss.css';

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
    </div>
  );
};

export default PatienceMedicalHistory;
