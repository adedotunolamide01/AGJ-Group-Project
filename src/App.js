import { useAuth } from './components/Context/authContext';
import { Navigate } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';

function App() {
  const { user, userLoading } = useAuth();

  if (!user && userLoading)
    return (
      <div className="App">
        <div>loading...</div>;
        <Navigate to="/login" />;
      </div>
    );
  else {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
