import { useAuth } from './components/Context/authContext';
import { Navigate } from 'react-router-dom';

import Home from './components/Home/Home';

function App() {
  const { user, userLoading } = useAuth();

  if (userLoading) return <div>loading...</div>;
  if (user)
    return (
      <div>
        <Home />
      </div>
    );
  return (
    <div className="App">
      <Navigate to="/login" />;
    </div>
  );
}

export default App;
