import { BrowserRouter as Router } from "react-router-dom";
import AppointmentHome from "./components/Appointment/AppointmentHomePage/AppointmentHomePage";
import Doctorpage from "./components/Page/Doctorpage";
import Frontpage from "./components/Page/FrontPage";

function App() {
  return (
    <Router>
      <div>
        <Frontpage />
        <Doctorpage />
        <AppointmentHome />
      </div>
    </Router>
  );
}

export default App;
