import { deleteDoc } from 'firebase/firestore';
import { createContext, useContext, useState } from 'react';
import {
  db,
  addDoc,
  collection,
  serverTimestamp,
  setDoc,
  query,
  where,
  getDocs,
  doc,
} from '../firebase/firebase.js';

const ProfileContext = createContext();

const useProfile = () => {
  return useContext(ProfileContext);
};

const ProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState();
  const [profiles, setProfiles] = useState([]);

  // POST (ADD)
  const addProfile = async (profile) => {
    if (!profile.userId) {
      throw new Error('User id is mandatory');
    }

    // --> firebase --> add...
    await addDoc(collection(db, 'profiles'), {
      ...profile,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  };

  // GET ALL PROFILES
  const getAllProfiles = async () => {
    console.log('getting all profiles');
    const querySnapshot = await getDocs(collection(db, 'profiles'));
    const newProfiles = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      newProfiles.push({ ...data, id: doc.id });
    });
    setProfiles(newProfiles);
  };

  // GET USER PROFILE
  const getUserProfile = async (userId) => {
    if (typeof userId !== 'string') {
      throw new Error('user id must be a string');
    }

    const q = query(collection(db, 'profiles'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q); // get all docs that their "userId" field is equal to userId
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setUserProfile({ ...data, id: doc.id });
    });
  };

  // UPDATE/PUT (SET)
  const editUserProfile = async (profile) => {
    if (!profile.id) {
      throw new Error('Profile needs an id');
    }

    const docRef = doc(db, 'profiles', profile.id);
    await setDoc(docRef, {
      ...profile,
      updatedAt: serverTimestamp(),
    });
  };

  // DELETE
  const deleteUserProfile = async (profileId) => {
    const docRef = doc(db, 'profiles', profileId);
    await deleteDoc(docRef);
  };

  const clearProfile = () => {
    setUserProfile(null);
  };

  const exports = {
    addProfile,
    getUserProfile,
    userProfile,
    editUserProfile,
    deleteUserProfile,
    clearProfile,
    getAllProfiles,
    profiles,
  };

  return (
    <ProfileContext.Provider value={exports}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
export { useProfile };
