import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import AppointmentHome from './components/Appointment/AppointmentHomePage/AppointmentHomePage';
import BookAppointment from './components/Appointment/BookAppointment.js/BookAppointment';
import ViewAppointment from './components/Appointment/ViewAppointment/ViewAppointment';
import Cancer from './components/HealthInformation/Cancer/Cancer';
import Diabetes from './components/HealthInformation/Diabetes/Diabetes';
import HealthInformation from './components/HealthInformation/HealthInfoHomePage/HealthInfo';
import Stroke from './components/HealthInformation/Stroke/Stroke';
import Doctorpage from './components/Page/Doctorpage/Doctorpage';
import HistoryDetails from './components/ListHistory/HistoryDetails';
import Login from './components/Login/Login';
import DoctorHome from './components/Home/DoctorHome';
import PatienceHome from './components/Home/PatienceHome';
import DoctorMedicalHistory from './components/Page/Doctorpage/DoctorMedicalHistory';
import DoctorPrescriptionPage from './components/Page/Doctorpage/DoctorPrescriptionPage';
import PatiencePrescriptionPage from './components/Page/Patience/PatiencePrescriptionPage';
import PatienceMedicalHistory from './components/Page/Patience/PatienceMedicalHistory';
import Signup from './components/SignUp/Signup.js';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import AuthProvider from '../src/components/Context/authContext';
import ProfileProvider from './components/Context/ProfileContext';
import Home from './components/Home/Home';
import Profiledoc from './components/Form/Profiledoc';
import Profile from './components/Form/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequiredAuth>
        <App />
      </RequiredAuth>
    ),
  },

  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/home',
    element: (
      <RequiredAuth>
        <Home />
      </RequiredAuth>
    ),
  },
  {
    path: '/patiencehome',
    element: (
      <RequiredAuth>
        <PatienceHome />
      </RequiredAuth>
    ),
  },
  {
    path: '/patienceprescription',

    element: (
      <RequiredAuth>
        <PatiencePrescriptionPage />
      </RequiredAuth>
    ),
  },
  {
    path: '/patiencemedicalhistory',
    element: (
      <RequiredAuth>
        <PatienceMedicalHistory />{' '}
      </RequiredAuth>
    ),
  },
  {
    path: '/doctorhome',
    element: (
      <RequiredAuth>
        <DoctorHome />
      </RequiredAuth>
    ),
  },
  {
    path: '/doctorpage',
    element: (
      <RequiredAuth>
        <Doctorpage />
      </RequiredAuth>
    ),
  },
  {
    path: '/doctormedicalhistory',
    element: (
      <RequiredAuth>
        <DoctorMedicalHistory />
      </RequiredAuth>
    ),
  },
  {
    path: '/doctorprescription',
    element: (
      <RequiredAuth>
        <DoctorPrescriptionPage />
      </RequiredAuth>
    ),
  },
  {
    path: '/appointment',
    element: (
      <RequiredAuth>
        <AppointmentHome />
      </RequiredAuth>
    ),
  },
  {
    path: '/history/:id',
    element: (
      <RequiredAuth>
        <HistoryDetails />
      </RequiredAuth>
    ),
  },
  {
    path: '/viewappointment',
    element: (
      <RequiredAuth>
        <ViewAppointment />
      </RequiredAuth>
    ),
  },
  {
    path: '/bookappointment',
    element: (
      <RequiredAuth>
        <BookAppointment />
      </RequiredAuth>
    ),
  },
  {
    path: '/healthinfo',
    element: (
      <RequiredAuth>
        <HealthInformation />
      </RequiredAuth>
    ),
  },
  {
    path: '/diabetes',
    element: (
      <RequiredAuth>
        <Diabetes />
      </RequiredAuth>
    ),
  },
  {
    path: '/cancer',
    element: (
      <RequiredAuth>
        <Cancer />
      </RequiredAuth>
    ),
  },
  {
    path: '/stroke',
    element: (
      <RequiredAuth>
        <Stroke />
      </RequiredAuth>
    ),
  },
  {
    path: '/profile',
    element: (
      <RequiredAuth>
        <Profile />
      </RequiredAuth>
    ),
  },
  {
    path: '/Profiledoc',
    element: (
      <RequiredAuth>
        <Profiledoc />
      </RequiredAuth>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProfileProvider>
        <RouterProvider router={router} />
      </ProfileProvider>
    </AuthProvider>
  </React.StrictMode>
);
