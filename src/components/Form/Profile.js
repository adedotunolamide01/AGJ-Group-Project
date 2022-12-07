import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';
import classes from '../Login/Login.module.css';
import '../ListHistory/historydetails.css';

import React from 'react';
import bgImg from './regImg.jpg';
import './Form.css';
import { useProfile } from '../Context/ProfileContext';
import Patiencenav from '../Navbar/Patiencenav';

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [setError] = useState('');

  const [profile, setProfile] = useState({
    name: '',
    gender: '',
    city: '',
    age: '',
    bloodGroup: '',
    address: '',
    phoneNumber: '',
    Next_of_kin_Name: '',
    Next_of_kin_phone_no: '',
    Status: '',
  });

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
      navigate('/PatienceHome');
    } catch (err) {
      //   setLoading(false);
      setError('Failed to create a profile account');
      setLoading(false);
    }
  };
  // fetch profile  from firebase
  useEffect(() => {
    if (user) getUserProfile(user.uid);
  }, [user, getUserProfile]);

  //loading userpage
  useEffect(() => {
    if (getUserProfile.status === 'doctor') {
      navigate('/dochome');
    }
  }, [getUserProfile, navigate]);

  useEffect(() => {
    if (!user & !userLoading) {
      navigate('/login');
    }
  }, [user, userLoading, navigate]);

  if (loading) return <div>loading...</div>;

  if (userProfile)
    return (
      <div className="history-details">
        <div className="create">
          <Patiencenav />
        </div>
        <div>
          <h2>
            <strong>Name: </strong> {userProfile.name}
          </h2>
          <p>
            <strong>Gender: </strong> {userProfile.gender}
          </p>
          <p>
            <strong>Age: </strong> {userProfile.age}
          </p>
          <p>
            <strong>Blood Group: </strong> {userProfile.bloodgroup}
          </p>
          <p>
            <strong>Address: </strong> {userProfile.address}
          </p>
          <p>
            <strong>City: </strong> {userProfile.city}
          </p>
          <p>
            <strong>Next of Kin Name: </strong> {userProfile.nextofkinname}
          </p>
          <p>
            <strong>Next of Kin Phone No: </strong>
            {userProfile.nextofkinphone}
          </p>
          <p>
            <strong>Phone No: </strong> {userProfile.phoneno}
          </p>
          <p>
            <strong>Status: </strong> {userProfile.status}
          </p>
        </div>
      </div>
    );
  else {
    return (
      <div>
        <div className={classes.mainheader}>
          <Patiencenav />
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
                value={profile.name}
                onChange={(e) => {
                  setProfile({
                    name: e.target.value,
                  });
                }}
                placeholder="Full Name"
              />

              <select
                value={profile.gender}
                onChange={(e) => {
                  setProfile({
                    gender: e.target.value,
                  });
                }}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="text"
                value={profile.age}
                onChange={(e) => {
                  setProfile({
                    age: e.target.value,
                  });
                }}
                placeholder="Age"
              />
              <input
                type="text"
                value={profile.bloodGroup}
                onChange={(e) => {
                  setProfile({
                    bloodGroup: e.target.value,
                  });
                }}
                placeholder="Blood Group"
              />
              <input
                type="text"
                value={profile.city}
                onChange={(e) => {
                  setProfile({
                    city: e.target.value,
                  });
                }}
                placeholder="Enter City"
              />
              <input
                type="text"
                value={profile.address}
                onChange={(e) => {
                  setProfile({
                    address: e.target.value,
                  });
                }}
                placeholder="Address"
              />
              <input
                type="text"
                value={profile.phoneNumber}
                onChange={(e) => {
                  setProfile({
                    phoneNumber: e.target.value,
                  });
                }}
                placeholder="Phone number"
              />
              <input
                type="text"
                value={profile.Next_of_kin_Name}
                onChange={(e) => {
                  setProfile({
                    Next_of_kin_Name: e.target.value,
                  });
                }}
                placeholder="Enter your Next of Kin Name"
              />
              <input
                type="text"
                value={profile.Next_of_kin_phone_no}
                onChange={(e) => {
                  setProfile({
                    Next_of_kin_phone_no: e.target.value,
                  });
                }}
                placeholder="Enter your Next of Kin Phone No"
              />

              <select
                value={profile.Status}
                onChange={(e) => {
                  setProfile({
                    Status: e.target.value,
                  });
                }}
              >
                <option value="Patient">Patient</option>
                <option value="Doctor">Doctor</option>
              </select>

              <button className="btn" onClick={() => navigate('/login')}>
                Submit{' '}
              </button>
            </form>
            <div className="col-2"></div>
            <img className="regPics" src={bgImg} alt="" />
          </div>
        </section>
      </div>
    );
  }
};

export default Profile;
