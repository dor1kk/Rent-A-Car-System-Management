import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth } from '../backend/firebaseConfig';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Home from './pages/Home';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log('User signed in:', user);
      } else {
        setUser(null);
        console.log('User signed out');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/*' element={<Home user={user} />} />
        <Route path='/sign-in' element={<SignIn setUser={setUser} />} />
        <Route path='/register' element={<Register setUser={setUser} />} />
      </Routes>
    </div>
  );
};

export default App;
