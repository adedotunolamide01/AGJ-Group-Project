import { BrowserRouter, Route, Routes } from "react-router-dom";
import Doctorpage from "./components/Page/Doctorpage";
import Frontpage from "./components/Page/FrontPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/doctorpage" element={<Doctorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
