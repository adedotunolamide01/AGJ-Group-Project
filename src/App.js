import { Route, Routes } from "react-router-dom";
import AppointmentHome from "./components/Appointment/AppointmentHomePage/AppointmentHomePage";
import BookAppointment from "./components/Appointment/BookAppointment.js/BookAppointment";
import ViewAppointment from "./components/Appointment/ViewAppointment/ViewAppointment";
import Doctorpage from "./components/Page/Doctorpage";
import Frontpage from "./components/Page/FrontPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/doctor" element={<Doctorpage />} />
        <Route path="/frontpage" element={<Frontpage />} />
        <Route path="/appointment" element={<AppointmentHome />} />
        <Route path="/viewappointment" element={<ViewAppointment />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
      </Routes>
    </div>
  );
}

export default App;
