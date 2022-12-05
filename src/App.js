import { useAuth } from './components/Context/authContext';
import PatienceHome from './components/Home/PatienceHome';

import { Navigate } from 'react-router-dom';
import DoctorHome from './components/Home/DoctorHome';

function App() {
  const { user, userLoading } = useAuth();

  if (userLoading) return <div>loading...</div>;
  if (user)
    return (
      <div>
        <DoctorHome />
        <PatienceHome />
      </div>
    );
  return (
    <div className="App">
      <Navigate to="/login" />;
    </div>
  );
}

export default App;
