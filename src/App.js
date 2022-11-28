import { Route, Routes } from 'react-router-dom';
import AppointmentHome from './components/Appointment/AppointmentHomePage/AppointmentHomePage';
import BookAppointment from './components/Appointment/BookAppointment.js/BookAppointment';
import ViewAppointment from './components/Appointment/ViewAppointment/ViewAppointment';
import Cancer from './components/HealthInformation/Cancer/Cancer';
import Diabetes from './components/HealthInformation/Diabetes/Diabetes';
import HealthInformation from './components/HealthInformation/HealthInfoHomePage/HealthInfo';
import Stroke from './components/HealthInformation/Stroke/Stroke';
import Doctorpage from './components/Page/Doctorpage';
import Frontpage from './components/Page/FrontPage';
import MedicalHistory from './components/Page/MedicalHistory';
import Prescription from './components/Page/PrescriptionPage';
import HistoryDetails from './components/ListHistory/HistoryDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/frontpage" element={<Frontpage />} />
        <Route path="/medicalhistory" element={<MedicalHistory />} />
        <Route path="/appointment" element={<AppointmentHome />} />
        <Route path="/doctorpage" element={<Doctorpage />} />
        <Route path="/history/:id" element={<HistoryDetails />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/viewappointment" element={<ViewAppointment />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/healthinfo" element={<HealthInformation />} />
        <Route path="/diabetes" element={<Diabetes />} />
        <Route path="/cancer" element={<Cancer />} />
        <Route path="/stroke" element={<Stroke />} />
      </Routes>
    </div>
  );
}
export default App;
