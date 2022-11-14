import { BrowserRouter as Router } from "react-router-dom";
import Doctorpage from "./components/Page/Doctorpage";
import Frontpage from "./components/Page/FrontPage";

function App() {
  return (
    <Router>
      <div>
        <Frontpage />
        <Doctorpage />
      </div>
    </Router>
  );
}

export default App;
