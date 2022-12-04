import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';
import classes from '../Login/Login.module.css';
import MainHeader from '../MainHeader/MainHeader';
import React from 'react';
import bgImg from './regImg.jpg';
import './Form.css';
import { useProfile } from '../Context/ProfileContext';

const Form = () => {
  const [profile, setProfile] = useState({});

  const [fullName, setfullName] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');
  const [Next_of_kin_phone_no, setNext_of_kin_phone_no] = useState('');
  const [Next_of_kin_Name, setNext_of_kin_Name] = useState('');
  const [userStatus, setStatus] = useState('patient');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { addProfile, getUserProfile, userProfile } = useProfile();
  const { user, userLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await addProfile({
        ...profile,
        userId: user.uid,
      });
      setLoading(false);
      setError('');
      //   // navigate to a different page
      navigate('/');
    } catch (err) {
      //   setLoading(false);
      setError('Failed to create a profile account');
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user) getUserProfile(user.uid);
  }, [user, getUserProfile]);

  useEffect(() => {
    if (!user & !userLoading) {
      navigate('/login');
    }
  }, [user, userLoading, navigate]);

  if (loading) return <div>loading...</div>;

  return (
    <div>
      <div className={classes.mainheader}>
        <MainHeader />
      </div>
      <section>
        <div className="register">
          <div className="col-1">
            <h2>Profile Sign Up</h2>
            <span>register and enjoy the service</span>
          </div>
          <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
              placeholder="Full Name"
            />

            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
            />
            <input
              type="text"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              placeholder="Blood Group"
            />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter City"
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
            />
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              placeholder="Phone number"
            />
            <input
              type="text"
              value={Next_of_kin_Name}
              onChange={(e) => setNext_of_kin_Name(e.target.value)}
              placeholder="Enter your Next of Kin Name"
            />
            <input
              type="text"
              value={Next_of_kin_phone_no}
              onChange={(e) => setNext_of_kin_phone_no(e.target.value)}
              placeholder="Enter your Next of Kin Phone No"
            />

            <select
              value={userStatus}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
            </select>

            <button className="btn">Submit </button>
          </form>
          <div className="col-2"></div>
          <img className="regPics" src={bgImg} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Form;
