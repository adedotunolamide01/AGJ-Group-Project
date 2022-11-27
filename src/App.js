import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HistoryDetails from './components/ListHistory/HistoryDetails';
import Doctorpage from './components/Page/Doctorpage';
import Frontpage from './components/Page/FrontPage';
import MedicalHistory from './components/Page/MedicalHistory';
import Prescription from './components/Page/PrescriptionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/doctorpage" element={<Doctorpage />} />
        <Route path="/medicalhistory" element={<MedicalHistory />} />
        <Route path="/history/:id" element={<HistoryDetails />} />
        <Route path="/prescription" element={<Prescription />} />
        Prescription
      </Routes>
    </BrowserRouter>
  );
}

export default App;
